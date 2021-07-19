//arithmetic
var m:number = 10;
var n:number = 5;

console.log(m+n);
console.log(m-n);
console.log(m*n);
console.log(m/n);
console.log(m%n);

//assignment
var num1:number = 10;
var num2:number = 2;
var num3:number = num2;

num3 += num1;

console.log(num3);

//comparison
var p:number = 40;
var q:number = 50;

console.log(p===30);
console.log(p!==30);
console.log(p<q);

//logical
console.log((10>20) && (20>5));
console.log((10>20) || (20>5));
console.log((10>20) || (4>5));
console.log(!((10>20) || (20>5)));

//ternary
var e:number = 8;
var d:number = 10;

console.log((e>d)?"X is greater than Y":"Y is greater than x");