// let z=20
function m1(){
    let z=100;
    console.log(this.z);
};
m1();

const Student={
    id:100,
    m1:function(){
        console.log(this.id);
    }
};

console.log(Student.m1());