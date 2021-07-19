//variables
var n1:number = 10;
console.log(n1);

var s1:string = "you are the creator of your destiny";
var s2:string = `all the power is with in you ,you can do anything and everything`;
console.log(s1);
console.log(s2);
var s3:string = s1;
console.log(s3);

var b1:boolean = true;
var b2:boolean = false;

console.log(b1);
console.log(b2);

var a1:any={
    productId:1,
    productName:"Iphone",
    productPrice:1000

};

//console.log(a1);

var array1:Array<string> = ["AngularJS","ReactJS","NodeJS"];//This is a course array
console.log(array1);
console.log(array1[0]);
console.log(array1.length);

var array2:Array<any> = [123,"AngularJS",true];
console.log(array2);

//enum
enum Gender{
    Male,
    Female
}

console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);

enum WeekEnds{
    Saturday=6,
    Sunday=7
}

console.log(WeekEnds[6]);
console.log(WeekEnds[7]);

//popup
console.log("Hello");
alert("Hello");
confirm("Do you really want to do this?");
var data = prompt("Please enter you name");
console.log(data);
