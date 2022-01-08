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
