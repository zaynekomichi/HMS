<?php
require('db.php');
$select_query = "SELECT * FROM alert ORDER BY id DESC";
$result = mysqli_query($db_connect, $select_query);
?>
<div id="container" align="center">
    <br>
    <h2>
        Login Attempts
    </h2>
    <table id="attempts_table" cellspacing="0">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Date of Attempt</th>
    </thead>
        <?php
        while($res = mysqli_fetch_assoc($result)){
            echo "<tr>";
            echo "<td>".$res['id']."</td>";
            echo "<td>".$res['user']."</td>";
            echo "<td>".$res['time_of_alert']."</td>"; 
        }
        ?>
    </table>
</div>