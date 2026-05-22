let arr = [1,2,3,4,5,6,7,8];
// map method is same as forEach method but in map method there is new array that is printed rther than changing in old array
let newArray = arr.map((num) => {
    return num*num;
});

console.log(newArray);