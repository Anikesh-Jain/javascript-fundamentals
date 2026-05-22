class toyotaCar {
    constructor(brand , mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }
}

let fortuner = new toyotaCar("fortuner" , 12);
console.log(fortuner);
let lexus = new toyotaCar("lexus" , 10);
console.log(lexus);