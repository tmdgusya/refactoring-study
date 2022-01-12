import { describe } from "@jest/globals";
import { invoice } from ".";
import { printOwing } from "./printOwing";

global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
 }

describe("chapter06", () => { 

test("printOwing",()=> {
    expect(printOwing(invoice)).toEqual("고객명Customer\n"+ 
    "채무액54\n"+
    "마감일2022. 2. 11.\n")
}
)
}
)