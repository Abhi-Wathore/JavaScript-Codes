// Functions:

// Regular Function

function greet(name){
    let x=100;
    console.log("Good Morning " +name);
    console.log(`Good Morning ${name}`);
    console.log(this.x);
}
greet("Abhi");


// Arrow Function
const greet1 =(name)=>{
    console.log(`Good Morning ${name}`);
};

add = a => a;

const a1 = new greet("Akshay");
a1;

// const a2 = new greet1();
// a2;