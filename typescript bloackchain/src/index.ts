// //console.log("hello");

// // declare a class
// class Human2 {
//     public name:string;
//     public age:number;
//     public gender:string;
//     constructor(name:string, age:number, gender:string){
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// };

// const Rebecca = new Human2("Rebecca", 18, "Female");

// // delcare a interface
// interface Human {
//     name:string;
//     age:number;
//     gender:string;
// }

// const name="Jay",
//     age=26,
//     gender="Male";

// const person={
//     name:"Jake",
//     age:14,
//     gender:"Female"
// };

// // setting a type
// // add ? backside of the argument makes it optional
// // return type: void
// const sayHi = (name:string, age:number, gender:string):string => {
//     return (`Hello ${name}, you are a ${gender} and ${age} years old!!!`);
// }

// const sayHiVersion2 = (person:Human):string => {
//     return (`Hello ${person.name}, you are a ${person.gender} and ${person.age} years old!!!`);
// }

// console.log(sayHi(name, age, gender));
// console.log(sayHiVersion2(person));
// console.log(sayHiVersion2(Rebecca));

import * as CryptoJS from "crypto-js";

// design block chain structure here
class Block{
    public index: number;
    public hash: string;
    public previous_has: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previous_has: string,
        data: string,
        timestamp: number
    ):string => CryptoJS.SHA256(index + previous_has + data + timestamp).toString();

    constructor(
        index: number, 
        hash: string, 
        previous_has: string, 
        data: string, 
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previous_has = previous_has;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "6245152345", "", "first block", 234569);

let blockchain:[Block] = [genesisBlock];

console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getTimestamp = () : number => Math.round(new Date().getTime() / 1000);

export {};