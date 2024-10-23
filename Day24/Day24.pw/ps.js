let password=document.getElementById("password");

function demo(e){
    if(password.type==="password")
    {
        password.type="text";
        e.target.innerText="hide";
    }
    else
    {
        password.type="password";
        e.target.innerText="show";
    }
}