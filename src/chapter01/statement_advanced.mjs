import { createStatementData } from "./create_statement_data.mjs";

export function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구내역 = ${data.customer} \n`;

    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;

    for (let pref of data.performances) {
        // 청구 내역 출력
        result += `${pref.play.name}: ${format(pref.amount / 100)}: ${pref.audience}석 \n`;
    }

    result += `총액 : ${format(data.totalAmount / 100)}\n`;
    result += `적립 포인트 : ${data.totalVolumeCredits}점\n`;

    return result;
}
