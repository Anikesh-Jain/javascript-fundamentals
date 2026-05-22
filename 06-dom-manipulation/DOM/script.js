// Access the id from document object
let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);

// Access the class from document object
let headings = document.getElementsByClassName("headings-of-class");
console.dir(headings);
console.log(headings);

// Access the paragraph from document object
let parshs = document.getElementsByTagName("p");
console.dir(parshs);
console.log(parshs);

// Access the button which is act as a id from document object
let button = document.getElementById("myID");
console.dir(button);
console.log(button);

// access evrything but give only first element
let Element = document.querySelector("p");
console.dir(Element);
console.log(Element);

// access evrything give all element in the form of node
let allElement = document.querySelectorAll("p");
console.dir(allElement);
console.log(allElement);

let firstEl = document.querySelector("#myID");
console.dir(firstEl);
console.log(firstEl);

let classEl = document.querySelector(".headings-of-class");
console.dir(classEl);
console.log(classEl);