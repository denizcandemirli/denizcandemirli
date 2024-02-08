//Event Listener and Event Objects

//button listener

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");
/*
btn.addEventListener("click", function(){
    console.log("button clicked");
});*/

/*  Button 

btn.addEventListener("click", btnClick);
btn2.addEventListener("click", btnClick);


function btnClick(){
    console.log("button clicked");
};*/

btn.addEventListener("click", function(a){

      let value;
      value = a;
      value = a.target;
      value = a.target.id;
      value = a.target.classList;
      value = a.type;

      a.preventDefault();
      console.log(value);
});