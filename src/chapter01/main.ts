import readJson from "../common/reader/readjson";

const ABSOLUTE_PATH = './src/chapter01/'
const INVOICES_JSON_PATH = ABSOLUTE_PATH + 'invoices.json'
const PLAYS_JSON = ABSOLUTE_PATH + 'plays.json'

interface StaticMovie {
    movieName: MovieInfo,
}

interface MovieInfo {
    name : string,
    type : string
}

interface Screening {
    customer: string
    performances: ScreenInfo[]
}

interface ScreenInfo {
    playID: string,
    audience: number
}

function statement(plays: StaticMovie, invoiceList: Screening) {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoiceList.customer}\n`

    const format = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    }).format;

    for (let perf of invoiceList.performances) {
        const play = (plays as any)[perf.playID];
        let thisAmount = 0;

        switch (play.type) {
            case "tragedy":
                thisAmount = 40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${play.type}`);
        }

        //포인트를 적립한다.
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 3명마다 추가 포인트를 제공한다.
        if ("comedy" === play.type) {
            volumeCredits += Math.floor(perf.audience / 5);
        }

        //청구 내역을 출력한다.
        result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience} 석)\n`;
        totalAmount += thisAmount;
    }

    result += `총액: ${format(totalAmount / 100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;
}


function excute() {
    const invoiceJsonFile = readJson<Screening[]>(INVOICES_JSON_PATH);
    const playJsonFile = readJson<StaticMovie>(PLAYS_JSON);

    const result = statement(playJsonFile, invoiceJsonFile[0]);
    console.log(result);
}

excute()