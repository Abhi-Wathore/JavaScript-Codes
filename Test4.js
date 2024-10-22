
//Arithmetic Operators

let x = 10;
let y = 20;

let sum = x+y;
let sub = x-y;
let mul = x*y;
let div = x/y;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

// let c = 15%2;
// console.log(c);

let z3 = 2**3; //expontential
console.log(z);

let s =  12;

console.log(s++);

let d = 11;
console.log(--d);


//Assigngment Operator

let x5 = 100;

x = x+1;
x +=1 ;
x-= 1;
x*=1;
x/=1;
x%=2;
x **=2; 


//comperison Operator
let x4 = 100;
let y4 = 200;
 
let z2 = x < y;

console.log(z);

let a2 = 12>=12;
console.log(a);

let m1 = "10";
let n1 = 10;

console.log(m !== n);


//Logical Oprator

let x3 = true;
let y3 = false;

let z1 = x || y;
console.log(z);

let b1 = 10;
let c = 11;
let a1 = (++b >= c) && (c >= b++);

console.log(a);
console.log(b);
console.log(c);

let m = 5;// 5
let n = 4; //5
let p1 = (m-- == n) || (m++ == n++);
      //5 == 4  ||  4 ==4
console.log(p);
console.log(m);
console.log(n);

let g = !(12 >= 10);
console.log(g);


//BitWise Operator
 /*
   & And
   | Or
   ~ not
   ^ XOR
   << left shift
   >> right shift
 */


   let x2 = 10;
   let y2 = 12;
  // let z = (x < y) | (x++ > y++);

  let z = (x++ > y) & (++x == y);
   console.log(z);
   console.log(x);
   console.log(y);

     
let k = false^false;
console.log(k);

let x1 = 5;

let y1 = x<<2;// 5*2^2

console.log(y);

let a = 50;

let b = a>>2;
console.log(b);

let o = +"123";
console.log(typeof o);


let p = -5;
console.log(typeof p);
