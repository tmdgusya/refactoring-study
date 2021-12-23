import { amountFor } from './amountFor.js';


export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 = ${invoice.customer} \n`;

    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;

    for (let pref of invoice.performances) {
        const play = plays[pref.playID];
       let thisAmount = amountFor(pref,play)

        // 포인트 적립해주고
        volumeCredits += Math.max(pref.audience - 30, 0);

        // 코미티 관객 5명마다 포인트 제공해주고
        if (play.type === "comedy") volumeCredits += Math.floor(pref.audience / 5);

        // 청구 내역 출력
        result += `${play.name}: ${format(thisAmount / 100)}: ${pref.audience}석 \n`;
        totalAmount += thisAmount;
    }

    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;

    return result;
}