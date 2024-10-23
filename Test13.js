// function add(){
//     let counter = 0;
//     function plus(){
//         counter+=1
//     };
//     plus();
//     return counter +=1;
// }

// add();
// add();
// add();

// console.log(add());

const add=(function(){
    let counter = 0;
    console.log("Hello");
    return function(){
        counter+=1;
        return counter
    };
})();

add();
add();
add();

console.log(add());