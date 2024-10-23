let count=0;
let countInterval;

function startCounter(){
    let message=document.querySelector(".message")
    countInterval=setInterval(()=>{
        count++;
        message.innerText=count;
    },1000);
}

function stopCounter(){
    clearInterval(countInterval);
}