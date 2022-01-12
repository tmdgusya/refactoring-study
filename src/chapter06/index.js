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