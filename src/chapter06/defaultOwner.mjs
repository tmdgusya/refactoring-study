let defaultOwner = {
    firstName: "Tei",
    lastName: "hong",
};

export function getDefaultOwner() {
    return new Person(defaultOwner);
}

export function setDefaultOwner(arg) {
    defaultOwner = arg;
}

class Person {
    constructor(data) {
        this._lastName = data.lastName;
        this._firstName = data.firstName;
    }
    get lastName() {
        return this._lastName;
    }

    get firstName() {
        return this._firstName;
    }
}
