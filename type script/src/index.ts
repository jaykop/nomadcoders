//console.log("hello");

// declare a class
class Human2 {
    public name:string;
    public age:number;
    public gender:string;
    constructor(name:string, age:number, gender:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
};

const Rebecca = new Human2("Rebecca", 18, "Female");

// delcare a interface
interface Human {
    name:string;
    age:number;
    gender:string;
}

const name="Jay",
    age=26,
    gender="Male";

const person={
    name:"Jake",
    age:14,
    gender:"Female"
};

// setting a type
// add ? backside of the argument makes it optional
// return type: void
const sayHi = (name:string, age:number, gender:string):string => {
    return (`Hello ${name}, you are a ${gender} and ${age} years old!!!`);
}

const sayHiVersion2 = (person:Human):string => {
    return (`Hello ${person.name}, you are a ${person.gender} and ${person.age} years old!!!`);
}

console.log(sayHi(name, age, gender));
console.log(sayHiVersion2(person));
console.log(sayHiVersion2(Rebecca));

export {};