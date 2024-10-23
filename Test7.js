// Functions:

function add(x,y){
    console.log(x+y);
}
add(10,20)

function sub(x,y){
    console.log(x-y);
}
sub(20,10)

function mul(x,y){
    return x*y;
}
console.log(mul(10,5));

function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit-32);
}

let n = toCelsius(100);
console.log(n)


function myFunction(){
    let num = 100;
    console.log(num);
}