let res=document.getElementById("button");
console.log(res);
let but=document.getElementById("lb");
console.log(but);

function darklight(){
    if(res.className==="buttonLight"){
        res.className = "buttonDark";
        but.className="togglerDark";
        document.body.style.backgroundColor="black";
    }
    else{
        res.className = "buttonLight";
        but.className="togglerLight";
        document.body.style.backgroundColor="white";
    }
}


