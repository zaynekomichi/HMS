<?php
require('db.php');
$select_query = "SELECT * FROM inform_login ORDER BY id DESC";
$result = mysqli_query($db_connect, $select_query);
?>
<div id="container" align="center">
    <br>
    <h4>
        Login History
    </h4>
    <table id="attempts_table" cellspacing="0">
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Login Date and Time</th>
    </thead>
        <?php
        while($res = mysqli_fetch_assoc($result)){
            echo "<tr>";
            echo "<td>".$res['id']."</td>";
            echo "<td>".$res['user']."</td>";
            echo "<td>".$res['LoginTime']."</td>"; 
        }
        ?>
    </table>
</div>
<script type="text/javascript">
    
</script>