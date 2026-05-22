// let promise = new Promise ((resolve , reject) => {
//     console.log("hello i am a promise");
//     resolve("sucess");
//     reject("unsucessful");
// }) 

// function getData(dataId , getNextData) {
//     return new Promise ((resolve , reject) =>{
//         setTimeout (() => {
//             console.log("data " , dataId);
//             resolve("sucess");
//             if(getNextData) {
//                 getNextData();
//             }
//         } , 5000);
//     });
// };

// let result = getData("anikesh");

const getPromise = () => {
    return new Promise ((resolve , reject) => {
        console.log("hello i am a promise");
        // resolve("sucess");
        reject("error");
    });
};

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise resolved as new" , res)
// });

let promise = getPromise();
promise.catch((err) => {
    console.log("promise rejected as new" , err)
});