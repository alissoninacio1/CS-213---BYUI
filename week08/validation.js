
//show the cost using oninput event
function totalCost() {
    let camera = Number(document.getElementById('item_0').value);
    let iphone = Number(document.getElementById('item_1').value);
    let laptop = Number(document.getElementById('item_2').value);
    let tv = Number(document.getElementById('item_3').value);
    
    //in case that nothing is selected  
    //in case of inputing negative numbers or greater than the max allowed
    if (isNaN(camera) || camera < 0 || camera > 10) camera = 0;
    if (isNaN(iphone) || iphone < 0 || iphone > 10) iphone = 0;
    if (isNaN(laptop) || laptop < 0 || laptop > 10) laptop = 0;
    if (isNaN(tv) || tv < 0 || tv > 10) tv = 0;
    
    
    //Camera - $400   
    //Iphone - $500   
    //Laptop - $800     
    //TV - $1000
    let result = camera * 400 + iphone * 500 + laptop * 800 + tv * 1000;

    //show another message if the cost is zero
    if (result == 0) {
        document.getElementById('total').innerHTML = 'Select an item';
    }
    else {
        document.getElementById('total').innerHTML = `Cost $${result}`;
    }
   
}

//show focus when reset, using HTMLlement.focus()
//returning message in total field. 
function focusMethod() {
    document.getElementById('first_name').focus();
    document.getElementById('total').innerHTML = 'See total Cost';
}


function validate() {
    let phoneNumber = document.getElementById('phone').value;
    var phoneRegex = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    var phoneResult = phoneRegex.test(phoneNumber);

    document.getElementById('warning1').style.display = 'block';
    document.getElementById('warning1').innerHTML = 
    'message'; 

}

//sorry I couldn't complete the assignment I did my best for the time I had :), 