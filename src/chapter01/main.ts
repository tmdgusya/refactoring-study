import readJson from "../common/reader/readjson";

const ABSOLUTE_PATH = './src/chapter01/'
const INVOICES_JSON_PATH = ABSOLUTE_PATH + 'invoices.json'
const PLAYS_JSON = ABSOLUTE_PATH + 'plays.json'

type movieInfo = {
    name : string,
    type : string
}

function statement(invoiceList : movieInfo) {

}


const invoicesJson = readJson(INVOICES_JSON_PATH);
console.log("@@@@", invoicesJson)