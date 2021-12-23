
    export const amountFor = (aPerformance, play) => {
        //  명확한 변수로 변경하기
        // 역활이 뚜렷하지 않을때는 a/ an 을 붙인다
        let result = 0;
      // 더 명확한 변수로 변경하기
      // 리턴값에는 result 명명한다.
      
        switch (play.type) {
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