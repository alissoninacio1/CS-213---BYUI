//functions to validate Start City
sCityValidate = () => {
    let startCity = document.getElementById("sCity").value;

    if(!isNaN(startCity)){
        document.getElementById("warning1").innerHTML = "Invalid City!";
        document.getElementById("warning1").style.display = "block";
    }  

    if(startCity === ""){
        document.getElementById("warning1").innerHTML = "Blank Field!";
        document.getElementById("warning1").style.display = "block";
    }  


}

sCityField = () => {
    document.getElementById("warning1").style.display = "none";
}




//functions to validate Start Stte
sStateValidate = () => {
    let startState = document.getElementById("sState").value;

    if(!isNaN(startState)){
        document.getElementById("warning2").innerHTML = "Invalid State!";
        document.getElementById("warning2").style.display = "block";
    }  

    if(startState === ""){
        document.getElementById("warning2").innerHTML = "Blank Field!";
        document.getElementById("warning2").style.display = "block";
    } 
}

sStateField = () => {
    document.getElementById("warning2").style.display = "none";
}



//functions to validate End City
eCityValidate = () => {
    let endCity = document.getElementById("eCity").value;

    if(!isNaN(endCity)){
        document.getElementById("warning3").innerHTML = "Invalid City!";
        document.getElementById("warning3").style.display = "block";
    }  

    if(endCity === ""){
        document.getElementById("warning3").innerHTML = "Blank Field!";
        document.getElementById("warning3").style.display = "block";
    } 
}

eCityField = () => {
    document.getElementById("warning3").style.display = "none";
}


//functions to validate Start Stte
eStateValidate = () => {
    let endState = document.getElementById("eState").value;

    if(!isNaN(endState)){
        document.getElementById("warning4").innerHTML = "Invalid State!";
        document.getElementById("warning4").style.display = "block";
    }  

    if(endState === ""){
        document.getElementById("warning4").innerHTML = "Blank Field!";
        document.getElementById("warning4").style.display = "block";
    } 
}

eStateField = () => {
    document.getElementById("warning4").style.display = "none";
}
