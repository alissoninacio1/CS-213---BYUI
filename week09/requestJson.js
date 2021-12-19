//request JSON

function requestJSON() {

    let jsonFile = String(document.getElementById('jsonInput').value);

    //json.txt
    if(jsonFile == 'json' || jsonFile == 'JSON' || jsonFile == 'Json') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {

             const myJSON = JSON.parse(this.responseText);

             document.getElementById('displayContent2').style.display = 'block';
            //problem with the use of for loop 
             
             document.getElementById('displayContent2').innerHTML = myJSON;                 
            }

        xhttp.open("GET", "json.txt");
        xhttp.send();
        }


    //json1.txt
    else if(jsonFile == 'json1' || jsonFile == 'JSON1' || jsonFile == 'Json1') {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {

            const obj = this.responseText;
            const myJSON = JSON.parse(obj);
            
            document.getElementById('displayContent2').style.display = 'block';
            document.getElementById('displayContent2').innerHTML = myJSON;
            
            
        }
        xhttp.open("GET", "json1.txt");
        xhttp.send();
        }

    else {
        document.getElementById('displayContent2').style.display = 'block';
        document.getElementById('displayContent2').innerHTML = 
        'The file does not exist!';
    }
  }