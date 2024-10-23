//1. if-else

let x = 9;
if(x >10){
   console.log("x is greater than 10");
}
else if(x==9){
    console.log("x is equal to 9");
}
else{
    console.log("x is less than 10");
}

//2. Ternary

   let z = 100;

     let a = (z > 99)? 500 : 200;
 
     console.log(a);
     
  //   let a1 = (z > 99)?  (z > 99)? 500 : 200 : (z > 99)? 500 : 200;


  //3. Switch case

  let m = 50;
  switch(m){
    case 10:console.log(10);
        break;
    case 20:console.log(20);
        break;
    case 30:console.log(30);
        break;
        default:console.log("default case");
  }
