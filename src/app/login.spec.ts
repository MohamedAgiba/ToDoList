import { login } from "./login";

describe('login function', ()=>{

    it('it can return true', ()=>{
        expect(login('ahmed', 888)).toBeTrue();
    })

    it('it can return false', ()=>{
        expect(login('ahmed', undefined)).toBeFalse ();
    })



})