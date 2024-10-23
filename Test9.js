function add(a=1,b=2){
    console.log(a+b);
}

add(10,20);

let i= 0;
function m1(){
    console.log(i);
    i++;
    if(i<10){
        m1();
    }
}

m1();