var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.calc = 3;
        this.interest = interest;
        this.rebate = rebate;
    }
    AgriLoan.prototype.dispCalc = function () {
        return this.calc;
    };
    return AgriLoan;
}());
var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
var isAgriLoan = obj instanceof AgriLoan;
console.log(" obj is an instance of AgriLoan " + isAgriLoan);
