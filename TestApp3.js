const arr = [1,2,3,4,5];

let s= "";

for(let i=0; i<arr.length;i++){
    s += arr[i]+" ";
}
console.log(s);


for(x in arr){ //index
    console.log(arr[x]);
}

console.log();

for(y of arr){ //data 
    console.log(y);
}