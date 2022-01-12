let defaultOwner = {
    firstName: "마틴",
    lastName: "파울러",
};

 class Person {
    constructor(data){
        this.lastName = data.lastName;
        this.firstName = data.firstName;
    }
    lastName() { return  this.lastName }
    firstName() { return  this.firstName }
}

export function getDefaultOwner() {
    return new Person(defaultOwner);
}

export function setDefaultOwner(arg) {
    defaultOwner = arg;
}