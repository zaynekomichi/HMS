<div id="container" align="center">
  <div id="search_details">
    <h1>Search for Patient</h1>
     <input type="text" id="search" required/ autocomplete="off" placeholder="Search Patient Name">
     <button id="close_search" style="display: none; text-align: center; margin-bottom: 5px;"  type="button">Close</button>
  </div>
   <div id="results"></div>
  <div id="initial_user">
    <p></p>
  </div>
  <div id="render_bookings">
    
  </div>
</div>
<script type="text/javascript" src="script/booking_functions.js"></script>
<script type="text/javascript">
  var insert_id;
  fetch_booking_info();
  $(function(){
    $(document).on('click','.data_list', function(){
      $('#close_search').click();
      let search_disable = document.getElementById("search_details");
      search_disable.style.display = "none";
       insert_id = $(this).data('id');
      $('#render_bookings').load('php/Booking/first_session.html');
      $.ajax({
        url:"http://192.168.18.246/Ark/Insert/midwives_booking.php",
        type:"POST",
        data:{
          "get_username": 1,
          "user_id":insert_id,
        },
        success: function(response){
          if(response){
            let user_being_booked = $('#user_being_booked').text("Booking for "+response);
          }
        }
      });
    });
  });
</script>