// loading IFCs

import * as THREE from "three";
import * as OBC from "openbim-components";
import { downloadZip } from "https://cdn.jsdelivr.net/npm/client-zip/index.js"

const components = new OBC.Components();
const container = document.getElementById("ifcCanvas");

components.scene = new OBC.SimpleScene(components); // A scene component where our objects will live in 3D.
components.renderer = new OBC.SimpleRenderer(components, container); // ⌚ A renderer component that allows us to see things moving around.
components.camera = new OBC.SimpleCamera(components); //🎥 A camera component that defines where we are and in that 3D world.
components.raycaster = new OBC.SimpleRaycaster(components); //⚡ A raycaster component that makes it possible to interact with that 3D scene with our mouse / touch.
components.init(); //init method. It will start updating all the components at 60 fps, so that you don't have to worry about the animation loop: 🚗

const scene = components.scene.get(); //  we need a reference to the scene, which you can get with the get() method. This method is present in all the components and is used to get the core of the component

components.camera.controls.setLookAt(10, 10, 10, 0, 0, 0);
components.scene.setup();

const grid = new OBC.SimpleGrid(components);

let fragments = new OBC.FragmentManager(components);
let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

//toolbar
const toolbar = new OBC.Toolbar(components, {
  name: "Main Toolbar",
  position: "bottom",
});
components.ui.addToolbar(toolbar);
const ifcButton = fragmentIfcLoader.uiElement.get("main");
toolbar.addChild(ifcButton);

// ifc converter
fragmentIfcLoader.settings.wasm = {
  path: "https://unpkg.com/web-ifc@0.0.46/",
  absolute: true,
};

// we will make the IFC model go to the origin of the scene,  optimize the profiles geometry so that it generates very efficient geometry for certain geometries (e.g. HVAC)
fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = false;
fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

// 🚗🔥 Loading the IFC
async function loadIfcAsFragments() {
  const file = await fetch("240212_GroupE_New Bridge Model_Concept6_merged_R24.ifc");
  const data = await file.arrayBuffer();
  const buffer = new Uint8Array(data);
  const model = await fragmentIfcLoader.load(buffer, "example");
  scene.add(model);
}

const loadButton = new OBC.Button(components);
loadButton.materialIcon = "download";
loadButton.tooltip = "Load model";
toolbar.addChild(loadButton);
loadButton.onClick.add(() => loadIfcAsFragments());

// Exporting the result
async function exportFragments() {
  if (!fragments.groups.length) return;
  const group = fragments.groups[0];
  const data = fragments.export(group);
  const blob = new Blob([data]);
  const fragmentFile = new File([blob], "small.frag");
  const files = [];
  files.push(fragmentFile);
  files.push(new File([JSON.stringify(group.properties)], "small.json"));
  const result = await downloadZip(files).blob();
  result.name = "example";
  download(result);
}

const exportButton = new OBC.Button(components);
exportButton.materialIcon = "exit_to_app";
exportButton.tooltip = "Export model";
toolbar.addChild(exportButton);
exportButton.onClick.add(() => exportFragments());

// download function
function download(file) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = file.name;
  document.body.appendChild(link);
  link.click();
  link.remove();
}
//  no download button as the export folder does the download 

// Cleaning memory
function disposeFragments() {
  fragments.dispose();
}
const disposeButton = new OBC.Button(components);
disposeButton.materialIcon = "delete";
disposeButton.tooltip = "Delete model";
toolbar.addChild(disposeButton);
disposeButton.onClick.add(() => disposeFragments());

 