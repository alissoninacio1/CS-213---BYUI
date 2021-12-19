<?php 

//performance
$perform = $_POST["performance"];

//this is for the student, in case of solo or concert
$fName = $_POST["first_name"];         
$lName = $_POST["last_name"];
$id = $_POST["student_id"];


//this is for the duet
$fName2 = $_POST["first_name_2"];
$lName2 = $_POST["last_name_2"];
$id2 = $_POST["student_id_2"];

//skill level
$skill_level = $_POST["skill"];
//instrument
$instrument_played = $_POST["instrument"];
//location
$place = $_POST["location"];
//room
$room_of = $_POST["room"];
//time
$registerTime = $_POST["time"];

//forming  the string that will be put on a file text.txt
$studentString = "performance: " . $perform . ". " . "Name: " . $fName . " " . $lName . ". " . "Student ID: " . $id . ". " 
. $fName2 . " " . $lName2 . ". " . "Student ID: " . $id2 . ". " . " Skill level: " . $skill_level . ". " . " Instrument: "
. $instrument_played . ". " . "Place: " . $place . ". " . "Room: " . $room_of . ". " . "Time Slot: " . $registerTime . ".\n";
?>



<?php
//open a file and write in it, without erases its content using 'a'
$myfile = fopen("text.txt", "a+");
file_put_contents($myfile, $studentString);
$fclose($myfile);

//print file content on client 
echo file_get_contents("text.txt");

?>

