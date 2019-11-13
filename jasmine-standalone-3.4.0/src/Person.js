class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }
    hello(){
        let lastIntest= this.interests.pop();
        
       return `Hello, my name is ${this.name} and I am ${this.age} years old. My interests are being a ${this.interests} and `+ lastIntest;
    }
}

let person = new Person('lwandile', 12, 'male', ['being a hardarse','agile', 'ssd hard drives'])
let me = person.hello();
// console.log(me);


