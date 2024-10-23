
function submitForm(e) {

    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let mob = document.getElementById("mob").value;
    let email = document.getElementById("email").value;
    let pswd = document.getElementById("pswd").value;
    let cpswd = document.getElementById("cpswd").value;
    // let formErrorr = document.getElementById("formErrorr");


    if (fname === "" ||
        lname === "" || 
        mob === "" || 
        email === "" || 
        pswd === "" || 
        cpswd === "") 
        {
        document.getElementById("formErrorr").innerText = "All fields are mandatory.";
        return false;
    }
    // if(mob.length !==10){
    //     formErrorr.innerText="must have length 10";
    //     return false;
    // }
    // if(pwds.length<6 || pswd.length>10){
    //     formErrorr.innerText="must have length of 6 to 10 characters"
    //     return false;
    // }

    if (pswd !== cpswd) {
        document.getElementById("formErrorr").innerText = "Passwords do not match.";
        return false;
    }

    let user = {
        fname: fname,
        lname: lname,
        mob: mob,
        email: email,
        cpswd: cpswd
    };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some((u) => u.email === email || u.mob === mob);

    if (userExists) {
        document.getElementById("formErrorr").innerText = "User with this email or mobile number already exists.";
        return false;
    }
    else {
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("formErrorr").innerText = "Registration successful!";
        return true;
    }
}


function loginForm(e) {
    e.preventDefault();

    let emaill = document.getElementById("emaill").value;
    let cpswdd = document.getElementById("cpswdd").value;

    let formErrorr = document.getElementById("formErrorr");
    formErrorr.className = "errorr";  // Reset any existing class

    if (emaill === "" || cpswdd === "") {
        formErrorr.innerText = "All fields are mandatory.";
        return false;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];


    let user = users.find((u) => u.email === emaill && u.cpswd === cpswdd);

    if (!user) {
        formErrorr.innerText = "Invalid email or password.";
        return false;
    } else {

        localStorage.setItem("loggedInUser", JSON.stringify(user));


        let otp = Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("otp", otp);


        window.location.href = "otp.html";
        return true;
    }
}



function validateOtp(e) {
    e.preventDefault();

    let generatedOtp = localStorage.getItem("otp");
    let enteredOtp = document.getElementById("enteredOtp").value;

    if (enteredOtp === generatedOtp) {
        // Clear OTP from localStorage
        localStorage.removeItem("otp");


        window.location.href = "details.html";
    } else {
        document.getElementById("otpError").innerText = "Invalid OTP. Please try again.";
    }
}


function displayUserDetails() {
    let userDetails = document.getElementById("userDetails")
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let table = document.createElement("table");
    let thead = document.createElement("thead");

    let headtr = document.createElement("tr");
    let slth = document.createElement("th");
    slth.innerText = "SL NO.";

    let fnameth = document.createElement("th");
    fnameth.innerText = "First Name";

    let lnameth = document.createElement("th");
    lnameth.innerText = "Last Name";

    let emailth = document.createElement("th");
    emailth.innerText = "Email";

    let mobileth = document.createElement("th");
    mobileth.innerText = "Mobile No.";

    headtr.append(slth, fnameth, lnameth, emailth, mobileth);
    let tbody = document.createElement("tbody");

    userDetails.prepend(table);
    table.append(thead);
    thead.append(headtr);
    table.append(tbody);
    users.map(({ fname,lname, email, mob }, slno) => {
        let bodytr = document.createElement("tr");
        let sltd = document.createElement("td");
        let fnametd = document.createElement("td");
        let lnametd = document.createElement("td");
        let emailtd = document.createElement("td");
        let mobiletd = document.createElement("td");
        sltd.innerText = slno + 1;
        fnametd.innerText = fname;
        lnametd.innerText = lname;
        emailtd.innerText = email;
        mobiletd.innerText = mob;
        bodytr.append(sltd, fnametd, lnametd, emailtd, mobiletd);
        tbody.append(bodytr);
    });
}