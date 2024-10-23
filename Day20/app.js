// let colors=["red", "blue", "green"]
// console.log(colors);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

//! Array de-structuring

// let a=colors[0]
// let b=colors[1]
// let c=colors[2]

// console.log(a);
// console.log(b);
// console.log(c);

//! es6 introduced another feature for easy de-structuring

// let [a,b,c]=colors
// console.log(a,b,c);

//! De-structuring using rest pareameter

// let [a,...favcolors]=colors
// console.log(a,favcolors);

//! Object de-structuring

// let student={
//     name: "jhone",
//     age: 24,
//     mark:{
//         social:40,
//         english:20,
//         maths:50
//     },
//     gender: "Male",
//     dept: "cse"
// }
// console.log(student);

// let {name, age, gender, mark,dept}=student;
// console.log(name,age,gender,dept,mark);

// let {name, age, ...details}=student;
// console.log(name,age,details);

// let {age,mark:{maths,social,english}}=student;
// console.log(maths,social,english);

//! variable name changing 

// let {age,name:sname,gender:g}=student;
// console.log(g);
// console.log(sname);
// console.log(gender);

//! best practice with for of

// let students=[
//     {
//         name:"fidha",
//         age:22,
//         dept:"cse"
//     },
//     {
//         name:"miller",
//         age:24,
//         dept:"mech"
//     },
//     {
//         name:"jhone",
//         age:23,
//         dept:"IT"
//     }
// ]

// for(let{name, age} of students)
// {
//     console.log(name,age);
// }

//! using map method

// let res=students.map(({name})=>{
//     return name;
// })
// console.log(res);

//! using function

let student={
    name:"fidha",
    age: 22,
    dept:"cse"
}

function s({name,age,dept})
{
    console.log(name,age,dept);
}
s(student);

