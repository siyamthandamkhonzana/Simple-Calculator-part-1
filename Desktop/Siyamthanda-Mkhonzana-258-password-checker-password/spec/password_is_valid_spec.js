const {passwordIsValid} = require("../src/password_checker")

 describe("validating password critiria", function(){
     it("should not exist erro will be thown", function(){
         expect(function() { passwordIsValid()}).toThrow(new Error("Password does not exist"))
     })
     it("should contain more than 8 characters ", function(){
        expect(function() { passwordIsValid("msuhs")}).toThrow(new Error("Password should be longer than 8 characters"))
     })
     it("should contain at least one small case ", function(){
        expect(function() { passwordIsValid("SHESHASGA")}).toThrow(new Error( "Password should have at least one lowercase letter"))
     })
     it("should contain at least one uppercase ", function(){
        expect(function() { passwordIsValid("dsdesg1ha")}).toThrow(new Error( "Password should have at least one uppercase letter"))
     })
     it("should contain at least one digit ", function(){
        expect(function() { passwordIsValid("SassTtssg")}).toThrow(new Error( "Password should have one digit"))
     })
     it("should contain at least one special  character ", function(){
        expect(function() { passwordIsValid("SassT1tssg")}).toThrow(new Error("Password should have at least one character"))
     })
 })
