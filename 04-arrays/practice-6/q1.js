let company = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"]
let deletedItems = company.shift();
console.log("Deleted Items:" , deletedItems);

let val = company.splice(1,1,"Ola");
console.log("Deleted Items:" , val);

console.log(company.push("Amazon"));
console.log(company);