/*
1.for loop
2.while loop
3.do while loop

*/

//1.for loop

for(let i=10; i<=50;i++){
    console.log(i)
}

console.log();

for(let i=50; i>=10;i--){
    console.log(i);
}

console.log();

// 2.while loop

let i=0;

while(i<=20){
    if(i%2==0){
        console.log(i);
    }
    i++
}

console.log();

let j=20;
while(j>=0){
    if(j%2==1){
        console.log(j)
    }
    j--
}

console.log();

// 3.do while

let m=10;
do{
    console.log(m)
    m++;
}while(m<=50);

console.log();

let n =5;
for(let i=0;i<n;i++){
    let s="";
    for(let j=0;j<n;j++){
        if(i==0 || j==0 || i==n-1 || j==n-1){
            s+="*";
        }
        else{
            s+=" ";
        }
    }
    console.log(s);
}