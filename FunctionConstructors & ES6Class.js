
//In JavaScript, we can create objects using object literals or using function constructors and ES6 classes.

const person = {
    name: 'Ahmad',
    age: 25,
    class: '12th',
    city: 'Karachi',
};



//Before ES6 we used to create classes using function constructors

function Person(name, age, clas, city ){
    this.name = name;
    this.age = age;
    this.class = clas;
    this.city = city;
    this.getname = function(){
        console.log(this.name);
    }
}


const person1 =new Person("Ahmad", 25, "12th", "Karachi");
const person2 =new Person("Ali", 30, "Graduate", "Lahore");

console.log(person1.name);
console.log(person2.name);

person1.getname();

//After ES6 we can create classes using class keyword

class PersonClass {
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

const person3 = new PersonClass("Ahmad", 25, "12th", "Karachi");
const person4 = new PersonClass("Ali", 30, "Graduate", "Lahore");

person3.getname();
person4.getname();