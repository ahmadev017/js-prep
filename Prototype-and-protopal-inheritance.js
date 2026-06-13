// in javascript everything is an object, and every object has a prototype. 
// A prototype is an object that is associated with every function and object in JavaScript by default. 
// It allows you to add properties and methods to objects, which can be inherited by other objects.   

const p1 = {
    fname: "Ahmad",
    lname: "Ali",
    age: 25,
    city: "Karachi",
    
    getFullName(){
        return `${this.fname} ${this.lname}`;
   }
}

const p2 = Object.create(p1);

//console.log("p1 is", p1); // Output: Ahmad Ali

//console.log("p2 is", p2); // Output: {}

//you can also change the value of the properties of p1 from p2 __proto__ property

p2.__proto__.fname = "Ali";
p2.__proto__.lname = "Ahmad";

console.log("p1 is", p1); // Output: Ahmad Ali



let name = "Ahmad";

//name is an object of string class here we are using the prototype of string class to access the length property of the string object
console.log(name.length); // Output: 5


const x1 = {
    name: "Ahmad",
    __proto__: Object.prototype,//
}

const x2 = {

    class: "12th",
    __proto__: x1,
}

const x3 ={
    city: "Karachi",
    __proto__: x2,
}


class Student {
    constructor(name, age, clas, city){
        this.name = name;
        this.age = age;
        this.class = clas;
        this.city = city;
    }

    getname() {
        console.log(this.name);
    }
}

const student1 = new Student("Ahmad", 25, "12th", "Karachi");

console.log(student1.name);

//student1.__proto__==Student.prototype; // this is done by default when we create an object using class keyword or function constructor