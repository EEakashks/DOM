function registerValidation(){
    const fullname = document.forms["signup"]["fname"].value;
    if(fullname == ''){
        document.getElementById("fullNameError").innerHTML = "Please enter your fullname"
        return false
    }
}