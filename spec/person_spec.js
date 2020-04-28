const { Person, person, greetings} = require("../src/person")

describe("Person object",function(){
    it("should have an empty templet to hold values in", function(){
        expect(person).toBeDefined();
    });
    it("should have an empty templet to hold values in", function(){
        expect(typeof Person).toBeDefined("object");
    });
    it("should output the persons name",function(){
        expect(person.name).toBe('Ryan')
    });
    it("should output the persons age",function(){
        expect(person.age).toBe(30)
    });
    it("should output the persons gender",function(){
        expect(person.gender).toBe('male')
    });
    it("should output the persons intrest",function(){
        expect(person.interest).toEqual(['being a hardarse',' agile', 'ssd hard drives'])
    });
    it("should desplay the disired gretting", function(){
        expect(greetings).toBe("Hello,my name is Ryan and I am 30 years old. My intrest are being a hardarse, agile and ssd hard drives.")
    })
})
