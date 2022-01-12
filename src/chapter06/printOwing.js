export function printOwing(invoice) {
    printBanner()
    let outstanding = calculateOutstanding(invoice)
    recordDueDate(invoice)
    let text = printDetails(invoice, outstanding);


    function printDetails(invoice, outstanding) {
        text += "고객명" + invoice.customer + "\n"
        text += "채무액" + outstanding + "\n"
        text += "마감일" + invoice.dueDate.toLocaleDateString() + "\n"
        
        console.log(text)
        return text
    }
    return text
    
    function printBanner () {
        console.log("****************");
        console.log("******채무*******");
        console.log("****************");
    }

    function calculateOutstanding(invoice){
        /* 미해결 채무 계산한다 */
        for (const o of invoice.orders) {
            outstanding += o.amount;
        }
        return outstanding
    }


    function recordDueDate(invoice){
        /* 마감일 기록을 기록한다 */
        const today = new Date(); // 원본에서는 Clock.today
        invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
        /* 세부사항을 출력한다 */
    }    
}