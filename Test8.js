
Student = {
    //properties
     id : 1,
     name: "Akshay",
     age: 17,
     city: "pune",

    //functions
     study : function(){
        console.log("Studying javascript");
     },

     play : function(){
         return "playing cricket";
     }

}


// Student.study();
// console.log(Student.play());


// //1. Type {}
// const Employee = {};

// Employee.id = 1;
// Employee.name="virat";
// Employee.city="mumbai";
// Employee.salary=90000;


// Employee.work= function(){
//     console.log("working");
// };


// console.log(Employee);
// Employee.work();


// //2 Type new Object()

// const Mobile = new Object();

// //adding properties
// Mobile.name="samsung";
// Mobile.ram=12;
// Mobile.storage=512;



// console.log(Mobile.name);
// console.log(Mobile['name']);


// const Account={
//     name : "salman",
//     accNo : 123456,
//     balance:99999999,
//     type : "savings",

//     deposit:function(amount){
//         this.balance += amount;
//         return "Your current balance is "+this.balance;
//     }

// }

// console.log(Account.deposit(1));


// let x = Account;
// console.log(x);

// x.name="sanket";

// console.log(x);

// delete x.name;

// console.log(x);

// const Bank= {
//     name:"sbi",
//     ifsc:"SBI000123",
//     city:"pune",

//     Employee:{
//         name:"akshay",
//         id:"SBI12",
//         age:27,
//         salary:55000
//     }
// }

// console.log(Bank);

// Bank.Employee.salary=60000;

// console.log(Bank.Employee);

let x =10;
if(x=20){
    console.log("hello");
}else{
    console.log("Hieee");
}

