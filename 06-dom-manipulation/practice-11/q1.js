let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);