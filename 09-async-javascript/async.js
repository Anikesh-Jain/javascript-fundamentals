// function api() {
//     return new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             console.log("weather data");
//             resolve(200);
//         } , 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }

function getData(dataId) {
    return new Promise ((resolve , reject) => {
    setTimeout (() => {
        console.log("data " , dataId);
        resolve("sucess");
    } , 2000);
    });
};

async function getAllData() {
    console.log("data1 fetching");
    await getData(1);
    console.log("data2 fetching");
    await getData(2);
    console.log("data3 fetching");
    await getData(3);
    console.log("data4 fetching");
    await getData(4);
}