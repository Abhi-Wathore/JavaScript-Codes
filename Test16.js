// Closuers Function

function add(){
    let firstName= "Akshay";
    console.log(firstName);

    return function sub(){
        console.log(firstName);
    }
}

let x = add();
console.log(x());


function add1(x){
    return function m1(y){
        return x+y;
    }
}

let num = add1(10);
console.log(num(30));
console.log(add1(11)(22));