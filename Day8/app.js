//?  variable and function called using let and const keyword have block scope


// var a=100;
// let b=200;
// const c=300;
// {
//     console.log(a);   
//     console.log(b);
//     console.log(c);
//     var d=400;
//     let e=500;
//     const f=600;
//     a=200;
// }
// console.log(d);   
// console.log(e);
// console.log(f);


//? Local scope : any variable that is declared inside the function is called Local scope

var a=100;
let b=200;
const c=300;
function demo(){
    console.log(a);   
    console.log(b);
    console.log(c);
    var d=400;
    let e=500;
    const f=600;
}
demo()
console.log(d);   
console.log(e);
console.log(f);

