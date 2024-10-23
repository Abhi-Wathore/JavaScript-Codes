// Higher Order Function

const area = function(r){
    return "Area of circle is "+r*r*3.14;
};

function circum(r){
    return "Circumference is "+2*3.14*r;
}

function calculate(r,logic){
    let a = logic(r);
    console.log(a);
}

calculate(5,area);
calculate(5,circum);