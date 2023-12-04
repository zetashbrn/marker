function validasiForm(){
    var validated = true
    
    //textarea
    var text1 = document.getElementById("text1").value
    if(text1==""){
        alert("Description cannot be empty");
        validated = false;
    }

    //category
    var category1 = document.getElementById("category").value
    if(category1=="Select"){
        alert("Please choose a category");
        validated = false;
    }

    //budget
    var budget = document.getElementById("budget").value
    if(budget==""){
        alert("Budget cannot be zero");
        validated = false;
    }

    //date
    var date = document.getElementById("date").value
    if(date==""){
        alert("Please choose a date");
        validated = false;
    }
}

