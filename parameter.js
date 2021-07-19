"use strict";
//optional parameters
//A parameter cannot be declared optional and default at the same time.
exports.__esModule = true;
exports.addNumbers = exports.disp = void 0;
function disp(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
exports.disp = disp;
//Rest parameters
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
exports.addNumbers = addNumbers;
