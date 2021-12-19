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
        <h1>Electro Store</h1>
        <a href="assign11.html">Home Page</a>
    </header>

    <!--This div is to encapsulate and to style the form tag-->
    <div class="form">
        <?php 
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
            if (isset($_POST['confirm'])) {
                echo "<br> The purchase was confirmed!";
                echo "<br>Thank you, and come back soon! <br>";

            } elseif (isset($_POST['cancel'])) {
                echo "<br> Click on Get Help if you have problems!";
                echo "<br>Thanks for visiting us! <br>";    
            } else {
                return false;
            }
          } 
        ?>
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