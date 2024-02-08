//mouse eventleri

const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");
/*
btn.addEventListener("click", run);
ul.addEventListener("click",run);
*/

//different mouse events
/*
btn.addEventListener("mousedown", run);

btn.addEventListener("mouseup", run);
*/

/*
btn.addEventListener("mouseenter", run);

btn.addEventListener("mouseleave", run);
*/
ul.addEventListener("mouseover", run);
ul.addEventListener("mouseout", run);

function run(event){
    console.log(`event type: ${event.type}`)
}