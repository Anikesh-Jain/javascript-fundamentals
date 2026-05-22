let arr = [1,2,3,4,5,6,7];

//filter method used to separate the elements in tyhe array that you want separately
let evenArray = arr.filter((val) =>{
    return val % 2==0;
});

console.log(evenArray);

let oddArray = arr.filter((val) =>{
    return val % 2!=0;
});

console.log(oddArray);

let greaterThan = arr.filter((val) =>{
    return val >= 3;
});

console.log(greaterThan);