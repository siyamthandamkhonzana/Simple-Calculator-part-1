const {passwordIsOk} = require("../src/password_checker")

describe("checking for conditions", function(){
    it("should meet 3 or more conditions", function(){
        expect(passwordIsOk("Wosrts3#d")).toEqual(true)
    })
    it("should meet all conditions except one and two return false ", function(){
        expect(passwordIsOk("Wosts3#")).toEqual(false)
    })
})