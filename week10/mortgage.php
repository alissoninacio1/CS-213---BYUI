<?php 

$apr = $_GET['apr']; 
$years = $_GET['years'];
$amount = $_GET['loanAmount'];

//calculus
// 100 - this is the percentage
//12 - this is the number of months in a year
$term = ($apr / 100) / 12;   
$numerator =  $amount * $term;
$exponent = - ( 12 * $years);
$denominator = (1 - pow((1 + $term), $exponent));
$monthlyResult = $numerator / $denominator; 

//number well formatted. 
//$format_number = number_format($monthlyResult, 2);
//echo $format_number;
//$number = sprintf('%.2f', $monthlyResult);


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="APR, Mortage Calculator, Loan Term, Years,  Loan Mount, Monthly Payment">
    <meta name="description" content="This is the correct place to calculate your mortgage monhtly payment, come and try to use our online mortgage calculator. It is simple and fast">
    <meta name="author" content="Alisson Inacio">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Mortgage PHP</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="style.css">

</head>
<body>
    
    <header class="header">
        <div>
            <h1>PHP Mortgage Calculator</h1>
        </div>
    </header>


    <!--This will be the main content of my page where I will put all the things-->
    <main class="main">
      <?php
         print "APR: $apr<br />";
         print "Term: $years<br />";
         print "Amount: $amount<br />";

         printf("<br>Monthly Amount is $%.2f", $monthlyResult);

        ?>     

    </main>

    <footer class="footer">
        <div>
            <h4>About this page</h4>
        </div>
        
        <div>
            <a href="https://alissoninacio1.github.io/stylized-cv/contact.html">Get Help</a>
            <p>This web site was developed for a school work.</p>
            <p id="copyright"> Copyright © 2021 Mortgage Calculator. All rights reserved. </p>   
        </div>
            
    </footer>
</body>
</html>