let arr = [1,2,3,4,5,6,7,8,9];
// arr.forEach(callBackFunction)
// callBackFunction :here, it is funcation to execute for each element in array 
// callBackFunction is a function that passed as an argument in another function 

arr.forEach( function myFun(val) {
    console.log(val);
});

arr.forEach( (val) => {
    console.log(val);
});

// Higher order function are called those funtions which pass another function as a parameter or as a return 