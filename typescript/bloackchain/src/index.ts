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
    public previous_hash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index: number,
        previous_has: string,
        timestamp: number,
        data: string
    ):string => CryptoJS.SHA256(index + previous_has + data + timestamp).toString();

    static validate = (aBlock:Block):boolean => 
       typeof aBlock.index === "number"
       && typeof aBlock.hash === "string"
       && typeof aBlock.previous_hash === "string"
       && typeof aBlock.data === "string"
       && typeof aBlock.timestamp === "number";

    constructor(
        index: number, 
        hash: string, 
        previous_has: string, 
        data: string, 
        timestamp: number
    ) {
        this.index = index;
        this.hash = hash;
        this.previous_hash = previous_has;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "6245152345", "", "first block", 234569);

let blockchain:[Block] = [genesisBlock];

//console.log(blockchain);

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimestamp = () : number => Math.round(new Date().getTime() / 1000);

const createBlock = (data:string):Block => {
    const previousBlock:Block = getLatestBlock();
    const newIndex:number = previousBlock.index + 1;
    const newTimestamp:number = getNewTimestamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data);
    
    const newBlcok:Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);

    addBlock(newBlcok);

    return newBlcok;
}

//console.log(createBlock("Hello"), createBlock("Bye Bye"));

const getHashBlock = (aBlock:Block):string => 
    Block.calculateBlockHash(aBlock.index, aBlock.previous_hash, aBlock.timestamp, aBlock.data);

const isValidBlock = (candidateBlock:Block, previousBlock:Block) : boolean => {

    if (!Block.validate(candidateBlock)) 
        return false;
    else if (candidateBlock.index !== previousBlock.index + 1)
        return false;
    else if (previousBlock.hash !== candidateBlock.previous_hash)
        return false;
    else if (getHashBlock(candidateBlock) !== candidateBlock.hash)
        return false;

    
    return true;
}

const addBlock = (candidateBlock:Block):void => {

    if (isValidBlock(candidateBlock, getLatestBlock()))
        blockchain.push(candidateBlock);
}


// test code
createBlock("second block");
createBlock("third block");
createBlock("fourth block");

console.log(blockchain);

export {};