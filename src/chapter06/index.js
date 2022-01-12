import { getDefaultOwner, setDefaultOwner } from "./defaultOwner.mjs";
import { printOwing } from "./printOwing.mjs";

const invoice = {
    customer: "Tei",
    dueDate: "2021-12-31",
    orders: [
        {
            amount: 55,
        },
        {
            amount: 35,
        },
        {
            amount: 40,
        },
    ],
};
printOwing(invoice);

// 2,3,4절은 당연하다고 생각되어, 코드는 생략.

const defaultOwner = getDefaultOwner();
console.log(defaultOwner);

// defaultOwner.lastName = "haha" //해당 라인은 set 이 없어 오류가 발생.
console.log(defaultOwner);

// 그런데 어떻게 해도, 자바스크립트는 객체 타입의 참조만 복사하기 때문에
// 깊이가 깊어지면 문제가 생기게 되어있음.
// depth가 생기는 객체들은 처음부터 깊은 복사로 데이터를 복사하던지 해야 유효.
