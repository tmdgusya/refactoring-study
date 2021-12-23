
    export const amountFor = (pref, play) => {
        // 값이 변하지 않는 변수는 매개변수로 전달 perf / play
        let thisAmount = 0;

        switch (play.type) {
            case "tragedy":
                thisAmount = 40000;
                if (pref.audience > 30) {
                    thisAmount += 1000 * (pref.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (pref.audience > 20) {
                    thisAmount += 10000 + 500 * (pref.audience - 20);
                }
                thisAmount += 300 * pref.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 ${play.type}`);
        }
        return thisAmount
}