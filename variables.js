//variables
var n1 = 10;
console.log(n1);
var s1 = "you are the creator of your destiny";
var s2 = "all the power is with in you ,you can do anything and everything";
console.log(s1);
console.log(s2);
var s3 = s1;
console.log(s3);
var b1 = true;
var b2 = false;
console.log(b1);
console.log(b2);
var a1 = {
    productId: 1,
    productName: "Iphone",
    productPrice: 1000
};
//console.log(a1);
var array1 = ["AngularJS", "ReactJS", "NodeJS"]; //This is a course array
console.log(array1);
console.log(array1[0]);
console.log(array1.length);
var array2 = [123, "AngularJS", true];
console.log(array2);
//enum
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[6]);
console.log(WeekEnds[7]);
//popup
console.log("Hello");
alert("Hello");
confirm("Do you really want to do this?");
var data = prompt("Please enter you name");
console.log(data);
