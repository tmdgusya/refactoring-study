import { getDefaultOwner, setDefaultOwner } from "./defaultOwner.mjs";
import { printOwing } from "./printOwing.mjs";

const invoice = {
    customer: "Tei",
    dueDate: "2021-12-31",
    orders: [
        {
            amount: 55,
        },
        {
            amount: 35,
        },
        {
            amount: 40,
        },
    ],
};
printOwing(invoice);

// 2,3,4절은 당연하다고 생각되어, 코드는 생략.

const defaultOwner = getDefaultOwner();
console.log(defaultOwner);

console.log(defaultOwner);
