let arr = [5,3,8,2,9,1,4];

let maxNumber = arr.reduce((prev , curr) => {
    return prev>curr ? prev : curr;
});

console.log(maxNumber);