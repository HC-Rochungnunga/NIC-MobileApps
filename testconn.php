<?php 
$conn_string = "host=localhost port=5432 dbname=postgres user=postgres password=postgres";
$dbconn4 = pg_connect($conn_string);  
   
if ($dbconn4) {   
    echo 'Connection attempt succeeded.';   
} else {   
    echo 'Connection attempt failed.';   
}   
pg_close($dbconn4);   
?>