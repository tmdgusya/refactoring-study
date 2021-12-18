export function statement(invoice, plays) {
    let result = `청구내역 = ${invoice.customer} \n`;

    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;

    const playFor = (aPerformance) => {
        return plays[aPerformance.playID];
    };

    const amountFor = (aPerformance) => {
        let result = 0;
        switch (playFor(aPerformance).type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 ${playFor(aPerformance).type}`);
        }
        return result;
    };

    const volumeCreditsFor = (aPerformance) => {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if (playFor(aPerformance).type === "comedy")
            result += Math.floor(aPerformance.audience / 5);

        return result;
    };

    const totalVolumeCredits = () => {
        let volumeCredits = 0;
        for (let pref of invoice.performances) {
            volumeCredits += volumeCreditsFor(pref);
        }
        return volumeCredits;
    };

    const totalAmount = () => {
        let result = 0;
        for (let pref of invoice.performances) {
            result += amountFor(pref);
        }
        return result;
    };

    for (let pref of invoice.performances) {
        // 청구 내역 출력
        result += `${playFor(pref).name}: ${format(amountFor(pref) / 100)}: ${pref.audience}석 \n`;
    }

    result += `총액 : ${format(totalAmount() / 100)}\n`;
    result += `적립 포인트 : ${totalVolumeCredits()}점\n`;

    return result;
}
