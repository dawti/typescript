"use strict";
exports.__esModule = true;
var msg = "hello world";
console.log('test' + msg);
var sum, a, b;
sum = a + b;
var isBeginer = true;
var name = 'Prabu';
//  `    asjdnakjds   ` above tab
var sentence = "my name is " + name + " \nia am a beginer";
//  null type
var n = null;
var u = undefined;
var lis1 = [1, 2, 3];
console.log(lis1);
var lis2 = [1, 2, 3]; //same as above
var person1 = ['chriss', 18];
// enum values
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
console.log(color);
var c = color.red;
console.log(c);
///////
var colors;
(function (colors) {
    colors[colors["red"] = 3] = "red";
    colors[colors["green"] = 4] = "green";
    colors[colors["blue"] = 5] = "blue";
})(colors || (colors = {}));
;
console.log(color);
var e = colors.red;
console.log(e);
//any type
var randomvalue = 10;
randomvalue = 'blue';
randomvalue = true;
console.log(randomvalue); //not show any error because its any type
// randomvalue();
// randomvalue.toUpperCase();
// same as any called unknown
var myvariable = 10;
myvariable = 'blue';
myvariable = true;
console.log(myvariable); //not show any error because its any type
// (myvariable as string).toUpperCase();
// multitype
var multitype;
multitype = 12;
multitype = true;
// function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 6));
function adding(num1, num2) {
    return num1 + num2;
}
console.log(adding(5, 6));
function ad(num1, num2) {
    return num1 + num2;
}
console.log(ad(5));
// passing object in function
function fullname(person) {
    console.log(person.fname + " " + person.lname);
}
var p = {
    fname: 'bruce',
    lname: 'wayne'
};
fullname(p);
function names(person) {
    console.log(person.fname + " " + person.lname);
}
var p = {
    fname: 'bruce',
    lname: 'wayne'
};
fullname(p);
