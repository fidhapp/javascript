// & Array Methods

let colors = ['red','green','blue']
// let colors = [];
console.log(colors);
console.log(colors.length);

// ! push()

// let newlength = colors.push('orange','yellow')
// console.log(colors);
// console.log(newlength);

// ^ unshift()

// let newlength = colors.unshift('violet','pink')
// console.log(colors);
// console.log(newlength);

// & pop()

// let delele = colors.pop();
// console.log(colors);
// console.log(delele);

// * shift()

// let delele = colors.shift();
// console.log(colors);
// console.log(delele);

// ? splice()

// let demo = colors.splice(0); // All deleted
// let demo = colors.splice(1,0,'pink')
let demo = colors.splice(1) // from index 1 elements should be deleted
console.log(colors);
console.log(demo);