// & Array Methods

// ! slice()

// let colors=["red","blue","green","pink","blue","orange","blue"];
// console.log(colors)
// console.log(colors.length);

// console.log("--------------------------------------------------------");


// console.log(colors.slice(2,5));
// console.log(colors.slice(4,5));
// console.log(colors.slice(4));


// ! include()

// console.log(colors.includes("blue"));
// console.log(colors.includes("red"));
// console.log(colors.includes("purple"));

// ! indexOf()

// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("red"));
// console.log(colors.indexOf("purple"));

// ! lastIndexOf()

// console.log(colors.lastIndexOf("blue"));
// console.log(colors.lastIndexOf("red"));
// console.log(colors.lastIndexOf("purple"));

// ! at()

// console.log(colors.at(2));
// console.log(colors.at(4));
// console.log(colors.at(6));

// ! concat()

// console.log(colors.concat("black"));
// console.log(colors.concat("black","pink","yellow"));
// console.log(colors.concat(["black","pink","yellow"]));

// ! reverse()

// console.log(colors.reverse());

// ! fill()

// console.log(colors.fill("black"));
// console.log(colors.fill("black",3,5));

// ! join()

// console.log(colors.join("-"));
// console.log(colors.join());




let colors=["red","blue","green","pink","white","orange","green"];
console.log(colors)
console.log(colors.length);


// ? write a programe to check whether the colors array is having orange color in it or not, if available print "yes the color is available" else "not available"


// for(i=0;i<colors.length-1;i++)
// {
//     if(colors[i]==="orange")
//     {
//         var a = 1
//     }
// }
// if(a === 1)
// {
//     console.log("yes, the color orange is available");
// }
// else{
//     console.log("no, the color is not available");
// }

// ? write a programe to check whether the color blue is available in the array or not, if available get the index position of blue else add blue at the end of the array

for(i=0;i<colors.length-1;i++)
{
    if(colors[i]==="blue")
    {
        var a = 1
    }
}
if(a === 1)
{
    console.log("yes, the color blue is available");
    console.log();
}
else{
    console.log(colors+"blue");
}


