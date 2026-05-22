/*class Parent {
    hello() {
        console.log("i am a parent class");
    }
}

class Child extends Parent {}

let obj = new Child();
*/

class Person {

    constructor() {
        this.species ="homo sapiens";
    }
    eat() {
        console.log("eating...");
    }

    sleep() {
        console.log("sleeping...");
    }

    work() {
        console.log("doing nothing...");
    }
}

class Engineer extends Person {
    work() {
        console.log("coding...");
    }
}

class Doctor extends Person {
    work() {
        console.log("medical...");
    }
}

let AnikeshObj = new Engineer();