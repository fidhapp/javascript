// ? Higher Order Methods

// let numbers = [3,6,1,7,4,19,2,9];
// console.log(numbers);

// let colors =["red", "blue", "green", "yellow", "pink", "red", "green", "blue"]


//! foreach()

// let newNumber = []
// let res = numbers.forEach((ele,ind,arr)=>
// {
//     newNumber.push(ele+3);
//     return "hello"
// })
// console.log(newNumber);

//! map()

// let res = numbers.map((ele)=>
// {
//     return ele+3;
// })
// console.log(res);

//! filter()

// let res = numbers.filter((ele)=>
//     {
//         return ele>4;
//     })
// console.log(res);

//! find()


// let res = numbers.find((ele)=>
//     {
//         return ele>4;
//     })
// console.log(res);

//! findIndex()

// let res = numbers.findIndex((ele)=>
//     {
//         return ele>4;
//     })
// console.log(res);

//! some()

// let res = numbers.some((numbers)=>
// {
//     console.log("hello");
//     return numbers < 6;
// })
// console.log(res);

//! every()

// let res = numbers.every((numbers)=>
//     {
//         console.log("hello");
//         return numbers < 2;
//     })
//     console.log(res);

//! sort()

// let res = colors.sort()
// console.log(res);

// let sortedNumbers = numbers.sort((a,b)=>
// {
//     return a-b;
// })
// console.log(sortedNumbers);

//! Reduce()

// let res = numbers.reduce((a,b,c)=>
// {
    // console.log("A:",a "B:" , b, "C:",c);
//     return a+b;
// },4)
// console.log(res);

//? trails

//! print odd position elemets

// let res = numbers.filter((ele,ind)=>
//     {
//         return ind % 2!=0;
//     })
// console.log(res);

// let res=[]
// for(let i=0;i<numbers.length;i++)
// {
//     if(i%2!==0){
//         res.push(numbers[i])
//     }
// }
// console.log(res);

//! sum of all elements


// let res = numbers.reduce((a,b,c)=>
// {
    // console.log("A:",a "B:" , b, "C:",c);
//     return a+b;
// })
// console.log(res);


//? without inbuild function

// let result=0
// for(let i=0;i<numbers.length;i++)
// {
//     result+=numbers[i];
// }
// console.log(result);


//! product of all elemets

// let res = numbers.reduce((a,b,c)=>
//     {
        // console.log("A:",a "B:" , b, "C:",c);
//         return a*b;
//     })
// console.log(res);

//! increment each element by 2 and take the even element and find the sum
//? with inbuild

// let res = numbers.map((ele)=>
// {
//     return ele+2;
// })
// console.log(res);

// let a = res.filter((ele,ind)=>{
//     return ele%2==0;
// })
// console.log(a);

// let finalres = numbers.reduce((a,b,c)=>
// {
//     return a+b;
// })
// console.log(finalres);

//? without inbuild


// for(let i=0;i<numbers.length;i++)
// {
//     numbers[i]=numbers[i]+2;
//     if(numbers%2==0){
//         let sum=sum+numbers[i]
//     }
// }
// console.log(sum);


//! find the sum of salary in the given array of objects

// let arr=[
//     {
//         name:"A",
//         salary:100
//     },
//     {
//         name:"B",
//         salary:1000
//     },
//     {
//         name:"C",
//         salary:10000
//     }
// ]
// for(let b of arr)
// {
//     console.log(b.salary);
// }
// let a=arr.reduce((a,b)=>
// {
//     return a+b.salary;
// },0)
// console.log(a);

//! replace even elemets with even and odd elements with odd

//? using map ()

let arr=[2,4,5,2,6,1,9]
// let res= arr.map((ele)=>
// {
//     if(ele%2==0)
//     {
//         x="even"
//     }
//     else
//     {
//         x="odd"
//     }
//     return x;
// }) 
// console.log(res);

//? using foreach ()

// arr.forEach((ele,ind,arr)=>
// {
//     if(ele%2==0)
//     {
//         arr[ind]="even";
//     }
//     else
//     {
//         arr[ind]="odd";
//     }
// });
// console.log(arr);


//! what will be the output

// res= arr.map((ele)=>{return ele%2==0})
// console.log(res);

//! swap the elemets 

// let a=10;
// let b=20;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b);

//! check if the string is palindrome or not

function ispalidrome(p)
{
    p.toLowerCase()
    p=Array.from(p)
    let rev=p.reverse()
    if(p===rev)
    {
        console.log("palindrome");
    }
    else
    {
        console.log("not palindrome");
    }
}
ispalidrome("Malayalam")












