//reduce function is used when there are many inputs but single output 
let arr = [1,2,3,4,5,6,7,8,9,10];
let summation = arr.reduce((result,current) => {
    return result+current;
});

console.log(summation);