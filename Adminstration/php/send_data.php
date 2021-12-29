<?php
$link = mysqli_connect('localhost','root','','login_attempt');
if(isset($_POST['response1'])){
	$user_backup = $_POST['user_backup'];
	$date_backup = $_POST['date_backup'];
$insert_query ="INSERT INTO inform_logout(user,LogoutTime)VALUES('$user_backup','$date_backup')";
   
    if(mysqli_query($link, $insert_query)){
    	echo "Saved";
    }else{
    	echo "ERROR could not execute query $insert_query.".mysqli_error($link); 
    }
    
}
?>