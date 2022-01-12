import { getDefaultOwner, person, setDefaultOwner } from "./defaultOwner.js";
import { printOwing } from "./printOwing.js";

export const invoice = {
    customer: "Customer",
    dueDate: "2022-01-12",
    orders: [
        {
            amount: 12,
        },
        {
            amount: 2,
        },
        {
            amount: 40,
        },
    ],
};
printOwing(invoice);


//set함수로 변경점을 제한함.

setDefaultOwner({ firstName: "동민", lastName: "안" });
console.log(getDefaultOwner());

