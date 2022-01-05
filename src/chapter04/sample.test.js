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
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });

    test("shortfall", () => {
        expect(asia.shortfall).toBe(5);
    });

    it('profit',function(){
        expect(asia.profit).toBe(230)
    })

    it('change production',function(){
        asia.producers[0].production = 20;
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292)
    })

    it("zero demand", () => {
        asia._demand = 0;
        expect(asia.shortfall).toBe(-25);
        expect(asia.profit).toBe(0);
    });

    it("negative demand", () => {
        asia._demand = -1;
        expect(asia.shortfall).toBe(-26);
        expect(asia.profit).toBe(-10);
    });

    it("empty string demand", () => {
        asia._demand = "";
        expect(asia.shortfall).toBe(NaN);
        expect(asia.profit).toBe(NaN);
    });
});


describe("no producers", () => {
    let noProducers;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20,
        };
        noProducers = new Province(data);
    });

    it("shortfall", () => {
        expect(noProducers.shortfall).toBe(30);
    });

    it("profit", () => {
        expect(noProducers.profit).toBe(0);
    });
});