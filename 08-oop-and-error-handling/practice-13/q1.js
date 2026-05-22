let data = "secret information";
class User {
    constructor(name , email) {
        this.name=name;
        this.email=email;
    }

    viewdata() {
        console.log("data = " , data);
    }
}

let user1 = new User("Anikesh" , "anikeshjain@gmail.com");
class Admin extends User {
    constructor(name , email){
        super(name , email);
    }
    
    editdata(){
        data = "some new data ";
    }
}

let host = new Admin("Admin" , "adminbhai@gmail.com");