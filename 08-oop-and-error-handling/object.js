const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
};

const Anikesh = {
    salary:100000,
}

const Anikesh2 = {
    salary:100000,
}

const Anikesh3 = {
    salary:100000,
}

const Anikesh4 = {
    salary:100000,
}

Anikesh.__proto__  = employee;
Anikesh2.__proto__  = employee;
Anikesh3.__proto__  = employee;
Anikesh4.__proto__  = employee;

const Ali = {
    salary:200000,
    calcTax1() {
        console.log("tax rate is 20%");
    },
}