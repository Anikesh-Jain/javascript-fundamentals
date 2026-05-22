let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click" , () => {
    console.log("btn1 was clicked-handler1");
});

btn1.addEventListener("click" , () => {
    console.log("btn1 was clicked-handler2");
});

const handler3 = () => {
    console.log("btn1 was clicked-handler3");
};

btn1.addEventListener("click" , handler3);

btn1.addEventListener("click" , () => {
    console.log("btn1 was clicked-handler4");
});

btn1.removeEventListener("click" , handler3);