<?php
include_once("prospect_palms_database.php");

$result = mysqli_query($connect_database, "SELECT * FROM Patients ORDER BY id DESC LIMIT 10");
?>
<div id="container">

  <div class="design">
<!-- [SEARCH FORM] -->
 <!--<form onsubmit="return fetch_bookings();">-->
  <h1>Bookings</h1>
  <input type="text" id="search" required autocomplete="off" />
  <!--<input type="submit" id="submit" value="Search"/>
</form>--> 
 <button id="close_search" style="display: none; text-align: center; margin-left: 400px; margin-bottom: 5px;"  type="button">Close</button>
<div id="results"></div>

</div>
<div class="table">
 <table align="center" cellspacing="0">
   <thead>
   <th>Name</th>
   <th>Email</th>
   <th>Phone Number</th>
   <th>Medical Aid</th>
   <th>Update</th>
   </thead>

   <tbody id="view_bookings">

</tbody>
 </table>
</div>

</div>
<script type="text/javascript">

fetch_bookings();
$('#view_bookings').load('http://192.168.1.23/Ark/Tables/view_bookings.php');

$(document).on('click', '.view_booking_btn', function(){
    let page_id = $(this).data('id');
$('#render').load('php/edit_bookings.php');
    });
$(document).ready(function(){
  $('#close_search').on('click',function(){
     var x = document.getElementById('close_search');
     var r = document.getElementById('results');
     x.style.display = 'none';
     r.style.display = 'none';
  });
});
</script>
