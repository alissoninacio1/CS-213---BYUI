
//show focus when reset, using HTMLlement.focus()
//returning message in total field. 
function focusMethod() {
    document.getElementById('first_name').focus();
    document.getElementById('total').innerHTML = 'See total Cost';

    //display none all warning fields after reset
    document.getElementById("warning1").style.display = "none";
    document.getElementById("warning2").style.display = "none";
    document.getElementById("warning3").style.display = "none";
    document.getElementById("warning4").style.display = "none";
}



//--------------------------------------------------------------------------------------------
//functions to validate Name
function validateName() {
    let uname = document.getElementById("first_name").value;

    if(!isNaN(uname) || uname === ""){
        document.getElementById("warning1").innerHTML = "Invalid Name!";
        document.getElementById("warning1").style.display = "block";
    }  
}

function  nameField(){
    document.getElementById("warning1").style.display = "none";
}



//--------------------------------------------------------------------------------------------------
//functions to validate last_name
function validateLast() {
    let lname = document.getElementById("last_name").value;

    if(!isNaN(lname) || lname === ""){
        document.getElementById("warning2").innerHTML = "Invalid Last Name!";
        document.getElementById("warning2").style.display = "block";
    }  
}

function  lastField(){
    document.getElementById("warning2").style.display = "none";
}



//--------------------------------------------------------------------------------------------------
//functions to validate phone
function validatePhone() {
    let phone = document.getElementById("phone").value;

    if(isNaN(phone) || phone === ""){
        document.getElementById("warning3").innerHTML = "Invalid Phone Number!";
        document.getElementById("warning3").style.display = "block";
    }  
}

function  phoneField(){
    document.getElementById("warning3").style.display = "none";
}



//--------------------------------------------------------------------------------------------------
//functions to validate card
function validateCard() {
    let card = document.getElementById("credit_card").value;

    if(isNaN(card) || card === ""){
        document.getElementById("warning4").innerHTML = "Invalid Card Number!";
        document.getElementById("warning4").style.display = "block";
    }  
}

function  cardField(){
    document.getElementById("warning4").style.display = "none";
}
