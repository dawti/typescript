
export {}
var msg : string = "hello world";
console.log('test' + msg);

let sum,a,b : number;

sum = a+b;
let isBeginer : boolean = true;
let name : string = 'Prabu';

//  `    asjdnakjds   ` above tab
let sentence : string = `my name is ${name} 
ia am a beginer`;

//  null type

let n : null = null;
let u : undefined = undefined;

let lis1 : number[] = [1,2,3];
console.log(lis1)
let lis2 : Array<number> = [1,2,3];//same as above

let person1: [string, number] = ['chriss',18]

// enum values

enum color {red,green,blue};
console.log(color);

let c: color = color.red;
console.log(c);

///////
enum colors {red=3,green,blue};
console.log(color);

let e: colors = colors.red;
console.log(e);

//any type

let randomvalue: any= 10;
randomvalue = 'blue';
randomvalue = true;


console.log(randomvalue);//not show any error because its any type
// randomvalue();
// randomvalue.toUpperCase();



// same as any called unknown

let myvariable: unknown= 10;
myvariable = 'blue';
myvariable = true;


console.log(myvariable);//not show any error because its any type
// (myvariable as string).toUpperCase();


// multitype

let multitype: number | boolean;
multitype = 12;
multitype = true;

// function

function add (num1 , num2){
    return num1+num2;
}

console.log( add(5,6))

function adding (num1 : number, num2 : number){
    return num1+num2;
}

console.log( adding(5,6))

function ad (num1 : number, num2? : number){//function want to be optional
    return num1+num2;
}

console.log( ad(5))

// passing object in function

function fullname (person:{fname : string, lname : string}){
    console.log(`${person.fname} ${person.lname}`);

}
let p = {
    fname : 'bruce',
    lname : 'wayne'
};

fullname(p);

// passing object in function
interface prs{
    fname:string;
    lname:string;
}
function names (person:prs){
    console.log(`${person.fname} ${person.lname}`);

}
let p = {
    fname : 'bruce',
    lname : 'wayne'
};

fullname(p);