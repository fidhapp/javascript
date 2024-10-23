
// ?=============var keyword==================
// & DEC
// var a ;
// & INT
// a = 100;
// console.log(a)//100

// ! DEC and INT into the same line possible
// var a = 100;
// console.log(a)//100


// ! R-DEC is possible
// var a;
// console.log(a)
// ! R-INT is possible
// a = "Hi how are you ?"
// console.log(a)

// ! R-DEC and R-INT into the same line possible or not
// var a = "CuteBoy👻👻"
// console.log(a)

// & ==========letkeyword=========================
// ! DEC in different line
// let a;
// ! INT
// a = 100;
// console.log(a)
// ! DEC and INT into same line possible
let a = 100;
console.log(a)
// ! R-INT is possible
// a = "HI"
// console.log(a)
// ! R-DEC is not possible
// let a//Cannot redeclare block-scoped variable 'a'////Uncaught SyntaxError: Identifier 'a' has already been declared

// ! R-DEC and R-INT into the same line not possible
// let a = 200;

//& ======== const keyword========

// ! DEC in diffenet line not possible
// const c;
// ! INT in different line is not possible
// c = 100;
// ! DEC and INt into the same line
// const c = 100;
// console.log(c)
// ! R-DEC is not possible
// const c;
// ! R-INt is
// c = 100;
// console.log(c)//TypeError: Assignment to constant variable.
// ! R-DEC and R-INT same line
// const c = 200;