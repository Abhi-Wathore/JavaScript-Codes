function m1(x){
    console.log(x);
}

let arr = [1,2,3,4,5];
m1(arr);

function names(...arr){
    console.log(arr);
}

names("Virat","Rohit","Hardik");


function add(...num){
    let sum = 0;
    for(x of num){
        sum += x;
    }
    console.log(sum);
}

add(3,6,2,7,1);

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

let arr3 = [...arr1,...arr2]
console.log(arr3);


const student = {
    id:1,
    name:"Akshay"
}

const school={...student}

console.log(school);