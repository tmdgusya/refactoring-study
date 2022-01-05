import { describe } from "@jest/globals";
import { Province } from "./Province.js";


function sampleProvinceData() {
    return {
        name: "Aisa",
        producers: [
            { name: "Byzantoum", cost: 10, production: 9 },
            { name: "Attalia", cost: 12, production: 10 },
            { name: "Sinope", cost: 10, production: 6 },
        ],
        demand: 30,
        price: 20,
    };
}

describe("province", () => {
    test("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).toBe(5);
    });
});