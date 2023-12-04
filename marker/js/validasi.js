function ValidasiDataSignIn(){
    var validated = true

    //Email
    var email = document.getElementById("email").value
    if(email==""){
        alert("Email cannot be empty");
        validated = false;
    } 
    else if(!email.includes("@")){
        alert("Must contain '@'")
        validated = false
    } 
    else if(!(email.endsWith(".com") || email.endsWith(".co.id"))){
        alert("Must end with '.com' or '.co.id'")
        validated = false
    } 

    //password
    var password = document.getElementById("password").value
    if(password==""){
        alert("Password can not be empty");
        validated = false;
    }

    if(validated){
        alert("Login succesfully");
        window.location.href = "/Users/zetashabrina/Documents/FIVERR%20FINAL/html/home.html";
    }

}

function ValidasiDataSignUp(){
    var validated = true
    
    //Name
    var name1 = document.getElementById("name1").value
    if(name1==""){
        alert("Name can not be empty");
        validated = false;
    }

    //Email
    var email1 = document.getElementById("email1").value
    if(email1==""){
        alert("Email cannot be empty");
        validated = false;
    } 
    else if(!email1.includes("@")){
        alert("Must contain '@'")
        validated = false
    } 
    else if(!(email1.endsWith(".com") || email1.endsWith(".co.id"))){
        alert("Must end with '.com' or '.co.id'")
        validated = false
    } 

    //password
    var password1 = document.getElementById("password1").value
    if(password1==""){
        alert("Password can not be empty");
        validated = false;
    }

    //checkbox
    var Term = document.getElementById("term1");
    if(Term.checked == false){
        alert("Must accept TERMS & CONDITIONS");
        validated = false;
    }

    if(validated){
        alert("Login succesfully");
        window.location.href = "/Users/zetashabrina/Documents/FIVERR%20FINAL/html/home.html";
    }

}

