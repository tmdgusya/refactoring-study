import { statement } from "./statement.js";
import { invoices } from "./json/invoices.js";
import { plays } from "./json/plays.js";

console.log(statement(invoices[0], plays));