let username = document.getElementById("username"),
password = document.getElementById("password"),
email = document.getElementById("email"),
form = document.getElementById("form"),

errormsg = document.getElementsByClassName("error"),
successIcon = document.getElementsByClassName("success-icon"),
failureIcon = document.getElementsByClassName("failure-icon");

form.addEventListener("submit", (event) =>{
   event.preventDefault();
    engine(username,0, "username cannot be blank");
    engine(password,1, "password cannot be blank");
    engine(email,2, "email cannot be blank");

});

let engine = (id, serial, message) => {
    console.log(id);
    if(id.value.trim()===""){
        errormsg[serial].innerHTML = message;
        id.style.border = "2px solid red"


        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{
        errormsg[serial].innerHTML = "";
        id.style.border = "2px solid green"


        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    }
}
