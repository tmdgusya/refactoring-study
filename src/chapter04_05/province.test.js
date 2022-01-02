import { describe } from "@jest/globals";
import { Province, sampleProvinceData } from "./Province.mjs";

describe("province", () => {
    test("shortfall", () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).toBe(5);
    });
});
