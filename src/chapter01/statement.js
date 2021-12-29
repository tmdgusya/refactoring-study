
export function statement(invoice, plays) {
    let result = `청구내역 (고객명 : ${invoice.customer}) \n`;
//반복문 쪼개기
    for (let pref of invoice.performances) {
        result += `${playFor(pref).name}: ${format(amountFor(pref) / 100)}: ${pref.audience}석 \n`;
    }

    result += `총액 : ${format(appleSauce() / 100)}\n`;
    result += `적립 포인트 : ${totalVolumeCredits()}점\n`;
    return result;


function appleSauce() {
    let totalAmount = 0; 
    for (let perf of invoice.performances) {
    totalAmount += amountFor(perf);
    }
    return totalAmount
}
    
    function totalVolumeCredits() {
        let volumeCredits = 0;
        for (let perf of invoice.performances) {
            volumeCredits += volumeCreditsFor(perf);
        }
        return volumeCredits
    }

    function format(aNumber){
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }).format(aNumber);
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }


    function volumeCreditsFor(pref){
        let volumeCredits = 0;
           // 포인트 적립해주고
           volumeCredits += Math.max(pref.audience - 30, 0);
                // 코미티 관객 5명마다 포인트 제공해주고
        if (playFor(pref).type === "comedy") volumeCredits += Math.floor(pref.audience / 5);
        return volumeCredits
    }

    function amountFor  (aPerformance) {
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


}