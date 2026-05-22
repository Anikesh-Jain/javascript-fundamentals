class toyotaCar {
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand ;
    }
}

let fortuner = new toyotaCar();
fortuner.setBrand("fortuner");
let lexus = new toyotaCar();
lexus.setBrand("lexus");