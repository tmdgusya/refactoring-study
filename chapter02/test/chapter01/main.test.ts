import {Screening, statement, StaticMovie} from "../../src/chapter01/main";
import readJson from "../../src/common/reader/readjson";

const ABSOLUTE_PATH = './src/chapter01/'
const INVOICES_JSON_PATH = ABSOLUTE_PATH + 'invoices.json'
const PLAYS_JSON = ABSOLUTE_PATH + 'plays.json'

it('STATEMENT PRINT E2E TEST', function () {
    //given
    const invoiceJsonFile = readJson<Screening[]>(INVOICES_JSON_PATH);
    const playJsonFile = readJson<StaticMovie>(PLAYS_JSON);
    const expectedStatementMessage = "청구 내역 (고객명: BigCo\n" +
        " hamlet: $650.00 (55 석)\n" +
        " As You Like it: $580.00 (35 석)\n" +
        " othello: $550.00 (45 석)\n" +
        "총액: $1,780.00\n" +
        "적립 포인트: 52점\n"

    //when
    const result = statement(playJsonFile, invoiceJsonFile[0]);

    //then
    expect(result).toEqual(expectedStatementMessage);
});