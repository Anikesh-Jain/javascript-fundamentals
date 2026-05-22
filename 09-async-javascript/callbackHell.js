function getData(dataId , getNextData) {
    setTimeout (() => {
        console.log("data " , dataId);
        if(getNextData) {
            getNextData();
        }
    } , 2000);
};

// Callback Hell or Pyramid of Doom
getData(1 , () => {
    console.log("data 2 is coming ...");
    getData(2 , () => {
        console.log("data 3 is coming ...");
        getData(3 , () => {
            console.log("data 4 is coming ...");
            getData(4);
        });
    });
});