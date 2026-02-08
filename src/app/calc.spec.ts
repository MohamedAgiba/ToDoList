import { calc } from "./calc";

describe("calc function with two operators", ()=> {
    it('has + operator', ()=>{
        expect(calc(3,2,"+")).toBe(5); 
    })
    xit('has - operator', ()=>{
        expect(calc(3,2,"-")).toBe(1); 
    })
    it("has * operator", ()=>{
        expect(calc(3,2,"*")).toBe(6);
    })
    fit("has default case", ()=>{
        expect(calc(3,2,"^")).toBe(0);
    })

})