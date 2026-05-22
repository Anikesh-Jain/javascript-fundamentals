//styling of elements

//let div = document.querySelector("div");
//div.style.backgroundColor = "red";
//div.style.fontSize = "30px";
//div.innerText = "HELLO!";

//insert elements

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

// append for last and prepend for start
let div = document.querySelector("div");
div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>I AM ALVARO KAISER </i>";

//before means start before node and after means start after the node
div.before(newHeading);

//delete elements 
let para = document.querySelector("p");
para.remove();