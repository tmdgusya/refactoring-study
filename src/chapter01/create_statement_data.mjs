import { createPerformanceCalculator } from "./PerformanceCalculator.mjs";

export function createStatementData(invoice, plays) {
    const playFor = (aPerformance) => {
        return plays[aPerformance.playID];
    };

    const volumeCreditsFor = (aPerformance) => {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if (aPerformance.play.type === "comedy") result += Math.floor(aPerformance.audience / 5);

        return result;
    };

    const totalVolumeCredits = (data) => {
        let volumeCredits = 0;
        for (let pref of data.performances) {
            volumeCredits += volumeCreditsFor(pref);
        }
        return volumeCredits;
    };

    const totalAmount = (data) => {
        let result = 0;
        for (let pref of data.performances) {
            result += pref.amount;
        }
        return result;
    };

    const enrichPerformance = (aPerformance) => {
        const calculator = createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = Object.assign({}, aPerformance);
        result.play = calculator.play;
        result.amount = calculator.amount;
        result.volumeCredits = calculator.volumeCredits;
        return result;
    };
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalAmount = totalAmount(statementData);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    return statementData;
}
