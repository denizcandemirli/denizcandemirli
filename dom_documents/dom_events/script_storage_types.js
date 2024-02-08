//KEYBOARD EVENTS 
/*
const text = document.getElementById("txtTaskName");
//text.addEventListener("keydown",run);

text.addEventListener("keyup",run);

function run(e) {
    console.log(e.type);
    console.log(e.target.value);
}*/

// EVENT BUBBLING
/*
const form = document.querySelector("form");

const cardBody = document.querySelector(".card-body");

const card = document.querySelector(".card");

const container = document.querySelector(".container");

form.addEventListener("click",function(e){
    console.log("form");
    e.stopPropagation();
});

cardBody.addEventListener("click",function(e){
    console.log("card body");
    e.stopPropagation();

});
card.addEventListener("click",function(e){
    console.log("card");
    e.stopPropagation();

});
container.addEventListener("click",function(e){
    console.log("container");
    e.stopPropagation();

}); */
/*
const deleteItems = document.querySelectorAll(".fa-times")
deleteItems.forEach(function(item){
    item.addEventListener("click", function(e){
    console.log(e.target);
    })
}); */

const ul = document.querySelector("ul");
ul.addEventListener("click",function(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
    }
    console.log(e.target);
});