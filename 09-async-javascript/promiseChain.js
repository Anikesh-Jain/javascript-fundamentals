// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async Function Executed");
//             resolve("Success");
//         }, 4000);    
//     });    
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Async Function Executed");
//             resolve("Success");
//         }, 4000);    
//     });    
// }

// console.log("fetching data...");
// let data1 = asyncFunc1(); 
// data1.then((res) => {
//     console.log("Result:", res);
//     console.log("fetching data...");
//     let data2 = asyncFunc2(); 
//         data2.then((res) => {
//         console.log("Result:", res);
//     });
// });


function getData(dataId) {
    return new Promise ((resolve , reject) => {
    setTimeout (() => {
        console.log("data " , dataId);
        resolve("sucess");
    } , 2000);
    });
};


//this is looking same as the callback now doing chaining like Promise Chain
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//         getData(3).then((res) => {
//             console.log(res);
//         });
//     });
// });

console.log("Data 1 fetching ...");
getData(1)
    .then((res) => {
        console.log("Data 2 fetching ...");
     return getData(2)
    })
    .then((res) => {
        console.log("Data 3 fetching ...");
     return getData(3)
    })
    .then((res) => {
      console.log(res);
    });
