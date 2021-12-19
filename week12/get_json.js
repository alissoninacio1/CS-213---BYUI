//requesting JSON test
//I've failed to set a query string and use an URL API to add URLSearchParams 
//and URLSearchParams.append()
// I don't know how to do it bbut I have one idea, so sorry, and I Know that 
//I need to pass that string  by that URL inn xhttp.open()


function requestJSON() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {     

        const myJSON = JSON.parse(xhttp.responseText);

        //The Object.entries() method returns an array of a given object's own enumerable 
        //string-keyed property [key, value] pairs

        for (const [key, value] of Object.entries(myJSON)) {
           
          document.getElementById('displayMileage').style.display = 'block';  
          document.getElementById('displayMileage').innerHTML = (
              `<br> Start City: ${value.startcity} <br>
              Start State: ${value.startstate} <br>
              End City: ${value.endcity} <br>
              End State: ${value.endstate} <br> 
              Miles: ${value.miles} `
              );
           }
    }
    
    //after the query string be add to /cgi-bin/cs213/mileageAjaxJSON.
    //change the URL below
    //the path below test_json is a file to only test the display on screen. 
    xhttp.open("GET", "test_json.json");
    xhttp.send();  
    
}

//arrow function syntax
//function to set focus in the first field
//function to display none when reset
styleProcess = () => {
    document.getElementById('displayMileage').style.display = 'none';  
    document.getElementById('sCity').focus();

     //display none all warning fields after reset
     document.getElementById("warning1").style.display = "none";
     document.getElementById("warning2").style.display = "none";
     document.getElementById("warning3").style.display = "none";
     document.getElementById("warning4").style.display = "none";
 
}