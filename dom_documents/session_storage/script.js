
// Storage Spaces


// Session Storage
/*
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

function addItem(e){
    sessionStorage.setItem(addkey.value, addvalue.value);
}
function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}
function clearItem(e){
    sessionStorage.clear();
}*/


// Local Storage


localStorage.setItem("programming", "javascript");
localStorage.setItem("computer", 7000);

/* GET ITEM

const value = localStorage.getItem("computer");
const value2 = localStorage.getItem("programming");

console.log(value);
console.log(value2);
console.log(typeof value);
*/
// to clear
//localStorage.clear();

// console.log(localStorage.getItem("keyboard"));
if (localStorage.getItem("computer") === null){
    console.log("Variable not found!");
}
else{
    console.log("variable found!");
}