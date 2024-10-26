// const arr = [33,5,22,78,12];

// for(let i =0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// // for in
// // for of

// for(let x in arr){ // using 'in' we get index return
//     console.log(arr[x]);
// }

// for(let y of arr){ //using 'of' we get elements return
//     console.log(arr[y]);
// }

// const names = ['Akshay','Salman'];

// let x =names.push('Shushant');

// console.log(names);
// console.log(x);

// let s1 = names.pop();
// console.log(names);
// console.log(s1);

// console.log();

// let s2 = names.shift();
// console.log(names);
// console.log(s2);

// names.unshift("Ajay");
// console.log(names);


// const num = [1,2,3,4,5];

// const x1 = num.slice(2);
// console.log(num);
// console.log(x1);

// console.log();

// const y1 = num.splice(0,3);
// console.log(y1);
// console.log(num);

// const arr1 = ['A','B','C','D','E','F'];

// const a = arr1.splice(2,3);
// console.log(a);
// console.log(arr1);

// const m = a.concat(arr1);
// m.sort();
// console.log(m);

// console.log(m.indexOf('D'));
// console.log(m.includes('Z'));

// const t = [1,2,3,4,5];

// const r = t.join(0);
// console.log(t.join(','));
// console.log(typeof r);

// console.log(t.reverse());


// let add5 = (x) => {
//     return x+5;
// }

// const arr2 = [1,2,3,4,5];
// console.log(arr2.map(add5));

// let k = arr2.map((k)=>{
//    return k*2
// });

// console.log(k);

// let k1 = arr2.map((k1)=>k1*2)
// console.log(k1);

// console.log();

const num2 = [1,2,3,4,5,6,7,8,9,10];
const p = num2.filter((l)=>l%2===0);

console.log("num array "+num2);
console.log("y array "+p);


function sum(acc,l){
    return acc+l;
}

let a2 = num2.reduce(sum,0);
console.log(a2);

let b = num2.reduce((acc,l)=>acc+l,15);
console.log(b);


const num3 = [22,55,44,33,77,55,12,32,89];

let c = num3.findIndex((x)=>x%4==0);
console.log(c);


const num = [10,20,30,40,50];

let x = num.every((a)=>a%2==1);
console.log(x);

let y = num.some((a)=>a===10);
console.log(y);

num.forEach((x)=>console.log(x));

const x1 = [1,2];
const y1 = [3,4];

const z1 = [x1,y1];
console.log(z1);
console.log(z1.flat());


