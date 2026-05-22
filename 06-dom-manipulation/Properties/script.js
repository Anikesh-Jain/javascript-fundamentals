let firstEl = document.querySelector("#myID");
console.dir(firstEl);
console.log(firstEl);

// Tagname tells us about the tag of the elements
console.log(firstEl.tagName);

let div = document.querySelector("div");
console.dir(div);
console.log(div);

//innerText returns the text content of the elements and all its children
console.log(div.innerText);

//innerHTML returns the Html content with text content of the elements and all its children
console.log(div.innerHTML);

let heading = document.querySelector("h1")

//text content returns the text that is hidden 
console.log(heading.textContent);