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

console.log(getDefaultOwner());

//set함수로 변경점을 제한함.
setDefaultOwner({ firstname: "Tei.", lastName: "sla" });
console.log(getDefaultOwner());



