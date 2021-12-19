function monthlyPayment() {

    //declaring variables
    let annualPercentageRate = Number(document.getElementById('apr').value);
    let years = Number(document.getElementById('term').value);
    let loanAmount = Number(document.getElementById('amount').value);

    //declaring the conditions in order to calculate
    if (annualPercentageRate == " " || annualPercentageRate == NaN || annualPercentageRate <= 0 
    || annualPercentageRate >= 25 ) {

        document.getElementById('warning1').style.display = 'block';
        document.getElementById('warning1').innerHTML = 
        'APR invalid! Press Clean.';      
    }

    if (years == " " || years == NaN || years < 0 || years >= 40 ) {

        document.getElementById('warning2').style.display = 'block';
        document.getElementById('warning2').innerHTML = 
        'Year invalid! Press Clean.';      
    }

   if (loanAmount == " " || years == NaN || loanAmount < 0 ) {

        document.getElementById('warning3').style.display = 'block';
        document.getElementById('warning3').innerHTML = 
        'Amount is invalid! Press Clean.';      
    }

    //else {
    // calculus
    // 100 - this is the percentage
    // 12 - this is the number of months in a year
    // let term = (annualPercentageRate / 100) / 12;   
    // let numerator =  loanAmount * term;
    // let exponent = - ( 12 * years);
    // let denominator = (1 - Math.pow((1 + term), exponent));
    // let monthlyResult = numerator / denominator; 

    //document.getElementById('payment').style.display = 'block';
    //document.getElementById('payment').innerHTML = "Loading PHP file";

    //}

    
} 


function changeStyle () {
    document.getElementById('payment').style.display = 'none';

    document.getElementById('warning1').style.display = 'none';
    document.getElementById('warning2').style.display = 'none';
    document.getElementById('warning3').style.display = 'none';
}