class Person{
    constructor(name, age,gender, interest) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }
 hello() {
               return `Hello,my name is ${this.name} and I am ${this.age} years old. My intrest are ${this.interest[0]},${this.interest[1]} and ${this.interest[2]}.`;
    }
        
   } 
let person = new Person('Ryan',30,'male',['being a hardarse',' agile', 'ssd hard drives'] )
let greetings = person.hello();
console.log(greetings)
module.exports = {Person, person, greetings};


