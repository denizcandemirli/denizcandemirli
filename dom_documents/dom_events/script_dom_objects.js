
/* Creating Elements 
const li = document.createElement("li");

// add class
li.className = "list-group-item list-group-item-secondary";

//attribute

li.setAttribute("title","new item");
li.setAttribute("data-id","5");

const text = document.createTextNode("new item");
li.appendChild(text);

const a = document.createElement("a");
a.setAttribute("href", "#");
a.className = "delete-item float-right";
a.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(a);

document.querySelector("#task-list").appendChild(li);

console.log(li); */

/* TO REMOVE !!!

const taskList = document.querySelector("#task-list");

// taskList.childNodes[6].remove();
// taskList.children[0].remove();
// taskList.removeChild(taskList.children[3]);
// taskList.children[2].removeAttribute("class");

// to Remove ALL !!!

for(let i = 0; i<taskList.children.length; i++){
    taskList.children[i].removeAttribute("class");
}

console.log(taskList) */

// Updating Elements !!!

const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");
h2.setAttribute("class","card-header");
h2.appendChild(document.createTextNode("Yeni Listeler"));

const parent = document.querySelector(".card");
parent.replaceChild(h2,cardHeader);

//Updating of class
const taskList = document.querySelector("#task-list");

let value;

link = taskList.children[0].children[0];

value = link.className;
value = link.classList;


link.classList.add("new");
link.classList.remove("new");

//attribute updating

value = link.getAttribute("href");
value = link.setAttribute("href","https://instagram/demirlideniz");



console.log(value);