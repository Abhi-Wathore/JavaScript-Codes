let num = [10,20,30,40];

console.log(num);
console.log(num[2]);

num[1]=99;
console.log(num);

let name1= ["Hardik"];
name1.push("Virat","Rohit","Dhoni");// Add in array
console.log(name1);

const arr =[1,2,3,4,5];
arr.push(6,7);
console.log(arr);

arr.pop();//Remove last index
console.log(arr);
console.log(arr.length);

let arr2 = arr.slice(3);//copy array from original array

console.log(arr2);
console.log(arr);

let arr3 = arr.splice(3);// cut array from original array
console.log(arr3);
console.log(arr);

let arr4 = [10,20,30,40,50,60];
arr4.pop();
console.log(arr4);

arr4.sort();
console.log(arr4);

const arr5 = [];
arr5[0] = 10;
arr5[1] = 20;
arr5[2] = 30;
arr5[3] = 40;
arr5[4] = 50;
console.log(arr5);

const arr6 = new Array(2,3,4,5);
console.log(arr6);

console.log(typeof arr6[2]);

let x = arr6[2].toString();
console.log(typeof x);


function add(){
    console.log("Hello");
}

function sub(){

}

let arr7 = [add(),sub()];
arr7[0];

