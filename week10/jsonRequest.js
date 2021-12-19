//requesting a php file

function requestAJAX() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("options").innerHTML = myObj.name;
    }

xmlhttp.open("GET", "assign10.php");
xmlhttp.send();
}

