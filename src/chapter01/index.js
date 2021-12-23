import { statement } from "./statement_advanced.mjs";
import { invoices } from "./json/invoices.mjs";
import { plays } from "./json/plays.mjs";

console.log(statement(invoices[0], plays));
