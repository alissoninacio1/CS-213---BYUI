<?php 

//personal data variables
$first_name = $_POST["fName"];
$last_name = $_POST["lName"];
$address = $_POST["text_address"];
$phone = $_POST["phone_number"];

//items variables
$camera = $_POST["camera"];
$iphone = $_POST["iphone"];
$laptop = $_POST["laptop"];
$tv = $_POST["tv"];

//respective cost per items
$camera_total = $camera * 400;
$iphone_total = $iphone * 500;
$laptop_total = $laptop * 800;
$tv_total = $tv * 1000;

//calculating total cost here    
#inputs and their prices     
//Camera - $400   
//Iphone - $500   
//Laptop - $800     
//TV - $1000
$result = $camera_total + $iphone_total + $laptop_total + $tv_total;

//credit card field
$credit_option = $_POST["card_selected"];

//credit card variable
$expiration = $_POST["cardExpiration"];


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="keywords" content="Products, Technology, Seling, Electro Store, Products">
    <meta name="description" content="This online store is an amazing place to purchase technology and find new products. Buy your products here! The best place to be inside the technology world.">
    <meta name="author" content="Alisson Inacio">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electro Store</title>

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">

</head>
<body>

    <header  class="header">
        <h1>Electro Checkout</h1>
    </header>

    <!--This div is to encapsulate and to style the form tag-->
    <div class="form">
        <form action="assign11_a.php" method="POST">
                      
            <!--information Fields-->
            <div id="information"> 
                <!-- print personal info here-->
                <?php 
                printf("Name: %s %s ", $first_name, $last_name);
                printf("<br>Address: %s", $address);
                printf("<br>Phone: %u", $phone);

                //'.' - point it to concatenate
                echo "<br><br>" . "See the selected items:"; 
                
                //print Items 
                printf("<br>Camera: %u - $%u", $camera, $camera_total);
                printf("<br>Iphone: %u - $%u", $iphone, $iphone_total);
                printf("<br>Laptop: %u - $%u", $laptop, $laptop_total);
                printf("<br>TV: %u - $%u", $tv, $tv_total);

                ?>
                <output id="total">
                    <?php 
                    //total cost
                    printf("Total Cost: $%.u", $result);
                    ?>
                </output>

                <?php 
                if($credit_option === "visa") echo "<br> Credit Card: Visa";
                elseif($credit_option === "master") echo "<br> Credit Card: Master";
                elseif($credit_option === "american") echo "<br> Credit Card: American";
                else echo "<br> Credit Card Invalid or not selected!";
                //expiration
                echo "<br>" . "Credit Card Expiration: " . "$expiration"; 
                ?>

                <hr>
                <!--final buttons-->
                <button type="submit" name="cancel">Cancel</button>
                <button type="submit" name="confirm">Confirm</button>
            </div>

        </form>
    </div>
    

    <footer class="footer">
        <div>
            <h4>About this page</h4>
        </div>
        
        <div>
            <a href="https://alissoninacio1.github.io/stylized-cv/contact.html">Get Help</a>
            <p>This web site was developed for a school work.</p>
            <p id="copyright"> Copyright © 2021 New Forms. All rights reserved. </p>   
        </div>
    </footer>

    
</body>
</html> 