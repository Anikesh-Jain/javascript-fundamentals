let cars = ['Ferrari', 'BMW', 'Audi', 'Buggati', 'lamborghini'];
console.log(cars);

// PUSH METHOD - adds new items in the array from the end
cars.push("rolls royce", "pagani");
console.log(cars);

// POP METHOD - delete items in the array from the end
let deletedItems = cars.pop();
console.log(cars);
console.log("deleted items" , deletedItems);

// .toString() METHOD - convert array items to the string items
console.log(cars.toString());

// CONCAT METHOD - merge two arrays
let bikes = ['Yamaha', 'KTM', 'Ducatti', 'Kawasaki'];
let allVehicles = cars.concat(bikes);
console.log(allVehicles);

// UNSHIFT METHOD - adds new items in the array from the beginning
cars.unshift("aston martin", "maserati");
console.log(cars);

// SHIFT METHOD - delete items in the array from the beginning
let val = cars.shift();
console.log("deleted" , val);

// SLICE METHOD - slice method is used to slice the array items based on index value
console.log(cars);
console.log(cars.slice(1,3)); // it will slice from index 1 to index 3 but index 3 will not be included

// SPLICE METHOD - splice method is used to add or remove items in the array based on index value
console.log(cars);
console.log(cars.splice(2,1,"McLaren")); // it will remove 1 item from index 2 and add McLaren at index 2