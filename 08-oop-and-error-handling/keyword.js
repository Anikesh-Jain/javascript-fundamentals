class Person {
    constructor() {
        console.log("Enter the parent constructor");
        this.species ="homo sapiens";
    }
    eat() {
        console.log("eating...");
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter the child constructor");
        super();
        this.branch = branch;
        console.log("Exit the child constructor");
    }
    
    work() {
        super().eat;
        console.log("coding...");
    }
}

let AnikeshObj = new Engineer("computer science engg");