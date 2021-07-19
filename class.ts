interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    private calc:number=3;
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 

    dispCalc():number{
       return this.calc;
    }
 } 
 
 var obj = new AgriLoan(10,1) 
 console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )

 var isAgriLoan = obj instanceof AgriLoan;
console.log(" obj is an instance of AgriLoan " + isAgriLoan);