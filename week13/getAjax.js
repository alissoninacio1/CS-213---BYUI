//get ajax to show content without reloading
getAjax = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = () => {
        document.querySelector('#display_area').style.display = 'block';
        document.querySelector('#display_area').innerHTML = xhttp.responseText;
    }

    xhttp.open('post', 'assign13.php')
    xhttp.send();
}