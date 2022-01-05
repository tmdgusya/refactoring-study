import readJson from "../common/reader/readjson";

const ABSOLUTE_PATH = './src/chapter01/'
const INVOICES_JSON_PATH = ABSOLUTE_PATH + 'invoices.json'
const PLAYS_JSON = ABSOLUTE_PATH + 'plays.json'

export interface StaticMovie {
    movieName: MovieInfo,
}

interface MovieInfo {
    name : string,
    type : string
}

export interface Screening {
    customer: string
    performances: ScreenInfo[]
}

interface ScreenInfo {
    playID: string,
    audience: number
}

export function statement(plays: StaticMovie, invoiceList: Screening) : string {
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `청구 내역 (고객명: ${invoiceList.customer}\n`

    for (let perf of invoiceList.performances) {
        volumeCredits += volumeCreditFor(perf);

        //청구 내역을 출력한다.
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} 석)\n`;
        totalAmount += amountFor(perf);
    }

    result += `총액: ${usd(totalAmount / 100)}\n`;
    result += `적립 포인트: ${volumeCredits}점\n`;
    return result;

    /**
     * 가격을 계산하는 함수 추출(Extract)
     * @param aPerformance
     * @param play
     */
    function amountFor(aPerformance: ScreenInfo): number {
        let thisAmount = 0;

        switch (playFor(aPerformance).type) {
            case "tragedy":
                thisAmount = 40000;
                if (aPerformance.audience > 30) {
                    thisAmount += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (aPerformance.audience > 20) {
                    thisAmount += 10000 + 500 * (aPerformance.audience - 20);
                }
                thisAmount += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
        }

        return thisAmount;
    }

    /**
     * playFor 를 aPerformance 에 따라 계산해주는 함수
     * @param aPerformance
     */
    function playFor(aPerformance: ScreenInfo) : MovieInfo {
        return (plays as any)[aPerformance.playID];
    }

    /**
     * Performance 에 따른 가격을 계산해주는 함수
     * @param aPerformance
     */
    function volumeCreditFor(aPerformance: ScreenInfo): number {
        let volumeCredits = 0;

        //포인트를 적립한다.
        volumeCredits += Math.max(aPerformance.audience - 30, 0);
        // 희극 관객 3명마다 추가 포인트를 제공한다.
        if ("comedy" === playFor(aPerformance).type) {
            volumeCredits += Math.floor(aPerformance.audience / 5);
        }

        return volumeCredits;
    }

    function usd(aNumber: number) {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
        }).format(aNumber);
    }
}


function execute() {
    const invoiceJsonFile = readJson<Screening[]>(INVOICES_JSON_PATH);
    const playJsonFile = readJson<StaticMovie>(PLAYS_JSON);

    const result = statement(playJsonFile, invoiceJsonFile[0]);
    console.log(result);
}

execute();