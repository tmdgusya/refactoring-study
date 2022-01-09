export function printOwing(invoice) {
    printBanner();
    const outstanding = calculateOutstanding(invoice);
    recordDueDate(invoice);
    printDetails(invoice, outstanding);
}

const printBanner = () => {
    console.log("****************");
    console.log("******채무*******");
    console.log("****************");
};

const printDetails = (invoice, outstanding) => {
    /* 세부사항 출력 */
    console.log("고객명" + invoice.customer);
    console.log("채무액" + outstanding);
    console.log("마감일" + invoice.dueDate.toLocaleDateString());
};

const recordDueDate = (invoice) => {
    /* 마감일 기록*/
    const today = new Date(); // 원본에서는 Clock.today
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
};

const calculateOutstanding = (invoice) => {
    /* 미해결 채무 계산 */
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
};
