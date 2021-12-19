/*
para passar a iformação do JSON file para a tela faça o seguinte.
pega a info/ JSON file
converte para um objeto JS
passa um for loop dentro do objeto in order to display the content
*/ 

//code to check only one checkbox and display only one text

function mainCanada() {

  //variables
  let divCanada = document.getElementById('displayCanada');
  let divMex = document.getElementById('displayMex');
  let divRussia = document.getElementById('displayRussia');
  let divUsa = document.getElementById('displayUsa');

  document.getElementById('mexico').checked = false; 
  document.getElementById('russia').checked = false; 
  document.getElementById('usa').checked = false; 

  //set a text in a div and display
  //display the others when this is selected
  divCanada.style.display = 'block';
  divMex.style.display = 'none';
  divRussia.style.display = 'none';
  divUsa.style.display = 'none';

}


function mainMex() {

  let divCanada = document.getElementById('displayCanada');
  let divMex = document.getElementById('displayMex');
  let divRussia = document.getElementById('displayRussia');
  let divUsa = document.getElementById('displayUsa');
  
  document.getElementById('canada').checked = false; 
  document.getElementById('russia').checked = false; 
  document.getElementById('usa').checked = false; 
      
  divMex.style.display = 'block';
  divCanada.style.display = 'none';
  divRussia.style.display = 'none';
  divUsa.style.display = 'none';

}

function mainRussia() {

  let divCanada = document.getElementById('displayCanada');
  let divMex = document.getElementById('displayMex');
  let divRussia = document.getElementById('displayRussia');
  let divUsa = document.getElementById('displayUsa');

  document.getElementById('canada').checked = false; 
  document.getElementById('mexico').checked = false; 
  document.getElementById('usa').checked = false; 
 
  divRussia.style.display = 'block';
  divCanada.style.display = 'none';
  divMex.style.display = 'none';
  divUsa.style.display = 'none';
}

function mainUsa() {

  let divCanada = document.getElementById('displayCanada');
  let divMex = document.getElementById('displayMex');
  let divRussia = document.getElementById('displayRussia');
  let divUsa = document.getElementById('displayUsa');

  document.getElementById('canada').checked = false; 
  document.getElementById('mexico').checked = false; 
  document.getElementById('russia').checked = false; 

  divUsa.style.display = 'block';
  divCanada.style.display = 'none';
  divMex.style.display = 'none';
  divRussia.style.display = 'none';

}



// functions to request JSON
//this word refers to object, like xhttp.responseText or this.responseText

function canadaCities () {

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("displayCanada").innerHTML = this.responseText;
  }
  xhttp.open("GET", "canada.txt");
  xhttp.send();
}


function mexCities() {

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
  document.getElementById("displayMex").innerHTML = this.responseText;
  }
  xhttp.open("GET", "mexico.txt");
  xhttp.send();
}

function russiaCities() {
  
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    document.getElementById("displayRussia").innerHTML = this.responseText;
    }
    xhttp.open("GET", "russia.txt");
    xhttp.send();
}

function usaCities() {
  
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    document.getElementById("displayUsa").innerHTML = this.responseText;
    }
    xhttp.open("GET", "usa.txt");
    xhttp.send();
}



