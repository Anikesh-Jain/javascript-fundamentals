// Template literals in javascript
let specialString = `This is a template literal string`;;
console.log(specialString);

// String interpolation using template literals
// by using this placeholder --> ${obj.item}
let obj = {
    item: "pen",
    price: 5,
};
let output = `The price of the ${obj.item} is ${obj.price} rupees`;
console.log(output); 