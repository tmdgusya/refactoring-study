
export function statement(invoice, plays) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구내역 = ${invoice.customer} \n`;

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }


    const amountFor = (aPerformance) => {
        //  명확한 변수로 변경하기
        // 역활이 뚜렷하지 않을때는 a/ an 을 붙인다
        let result = 0;
      // 더 명확한 변수로 변경하기
      // 리턴값에는 result 명명한다.
      
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
                throw new Error(`알 수 없는 장르 ${play.type}`);
        }
        return result
}

    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    }).format;

    for (let pref of invoice.performances) {

        
       let thisAmount = amountFor(pref) // 변수 인라인하기

        // 포인트 적립해주고
        volumeCredits += Math.max(pref.audience - 30, 0);

        // 코미티 관객 5명마다 포인트 제공해주고
        if (playFor(pref).type === "comedy") volumeCredits += Math.floor(pref.audience / 5);

        // 청구 내역 출력
        result += `${playFor(pref).name}: ${format(thisAmount / 100)}: ${pref.audience}석 \n`;
        totalAmount += thisAmount;
    }

    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;

    return result;
}