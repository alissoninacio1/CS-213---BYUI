<?php
     // create a PHP object with the filename,filetype, and cwd properties.
     class fileN
     {
        public $fileName;
        public $fileType;
        public $cwd;
     }

     $cwd = getcwd();     // get path to the current working directory
     $folder = ".";       // Set the folder variable to specify the "current" directory    
     
     // create an array of filenames of files from the current directory
     $files = scandir($folder);
     $directory = Array();     // create a array object to store a list of objects.


     /*******************************************************************************
     *  Start your PHP code here!
     *
     * Add code to populate the "$directory" array with a list of "fileN" objects.
     * Use "new fileN()" to create a fileN object.    $directory[$i] = new fileN();
     * Set each fileN object property to the appropriate values.
     * You can get each file name from the "$files" array.
     * You can get each file type by calling the php function "filetype()" passing it the filename.
     * The "filetype()" function returns the file type. The returned file type is either "file" or "dir".  
     * The current working directory has been stored in $cwd.
     * To get the size of an array in php use the sizeof function:  $len = sizeof($files);
     *****************************************************************/


   //  [{“fileName” : “assign02.html”, “fileType” : ”file”, “cwd” : “/home/Joh0801/public_html/”},
   //     {“fileName” : “assign03.html”, “fileType” : ”file”, “cwd” : “/home/Joh0801/public_html/”},
   //    {“fileName” : “me.jpg”, “fileType” : ”file”, “cwd” : “/home/Joh0801/public_html/”},
   //    {“fileName” : “images”, “fileType” : ”dir”, “cwd” : “/home/Joh0801/public_html/”}
   //    ]

     $directory ( 
      array("fileName" => “assign02.html”, “fileType” => ”file”, “cwd” => “/home/Joh0801/public_html/”),
      array(“fileName” => “assign03.html”, “fileType” => ”file”, “cwd” => “/home/Joh0801/public_html/”),
      array(“fileName” => “me.jpg”, “fileType” => ”file”, “cwd” => “/home/Joh0801/public_html/”),
      array(“fileName” => “images”, “fileType” => ”dir”, “cwd” => “/home/Joh0801/public_html/”),
     )
     

     $len = sizeof($directory);

     //Here I'll put the table
     echo
     "
     <table>
        <tr>
            <th>Filename</th> 
            <th>Type</th>
            <th>CWD</th>
            <th>Action</th>
        </tr>
    
    </table>
     
     "
     
     /*******************End of your Code *******************************************/

     // convert the PHP array of objects to a JSON string
     $str = json_encode($directory);
     print "\n $str \n";   //output the json string - The string is sent to the browser.      
 ?>

