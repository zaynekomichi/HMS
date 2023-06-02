
<div id="container">
  <script>
    try{
      var remove = clearInterval(clear);
    }
    catch(err){
      var remove;
    }

  </script>
  <br>
  <div align="center" id="change_appointment">
    <h1>Update Appointment Date</h1>
    <span id="Header">Patient Name</span>
    <br>
    <br>
    <span id="patient-title"></span>
    <div id="flex_appointment">
      <div class="appoint_cards">

        <span>Reason</span>
        <br>
        <input type="text" id="Reason" placeholder="Reason for Visitation" required>
      </div>
      <div class="appoint_cards">

        <span>Date</span>
        <br>
        <input type="date" id="start_date" required>
      </div>
      <div class="appoint_cards">
        <span>Time</span>
        <br>
        <select id="start_time" required>
        <option></option>
        <option class='start_time' value = "08:00">08:00 AM - 08:20 AM</option>
        <option class='start_time' value = "08:20">08:20 AM - 08:40 AM</option>
        <option class='start_time' value = "08:40">08:40 AM - 09:00 AM</option>
        <option class='start_time' value = "09:00">09:00 AM - 09:20 AM</option>
        <option class='start_time' value = "09:20">09:20 AM - 09:40 AM</option>
        <option class='start_time' value = "09:40">09:40 AM - 10:00 AM</option>
        <option class='start_time' value = "10:00">10:00 AM - 10:20 AM</option>
        <option class='start_time' value = "10:20">10:20 AM - 10:40 AM</option>
        <option class='start_time' value = "10:40">10:40 AM - 11:00 AM</option>
        <option class='start_time' value = "11:00">11:00 AM - 11:20 AM</option>
        <option class='start_time' value = "11:20">11:20 AM - 11:40 AM</option>
        <option class='start_time' value = "11:40">11:40 AM - 12:00 AM</option>
        <option class='start_time' value = "12:00">12:00 AM - 12:20 AM</option>
        <option class='start_time' value = "12:20">12:20 AM - 12:40 AM</option>
        <option class='start_time' value = "12:40">12:40 AM - 01:00 PM</option>
        <option class='start_time' value = "13:00">01:00 PM - 01:20 PM</option>
        <option class='start_time' value = "13:20">01:20 PM - 01:40 PM</option>
        <option class='start_time' value = "13:40">01:40 PM - 02:00 PM</option>
        <option class='start_time' value = "14:00">02:00 PM - 02:20 PM</option>
        <option class='start_time' value = "14:20">02:20 PM - 02:40 PM</option>
        <option class='start_time' value = "14:40">02:40 PM - 03:00 PM</option>
        <option class='start_time' value = "15:00">03:00 PM - 03:20 PM</option>
        <option class='start_time' value = "15:20">03:20 PM - 03:40 PM</option>
        <option class='start_time' value = "15:40">03:40 PM - 04:00 PM</option>
        <option class='start_time' value = "16:00">04:00 PM - 04:20 PM</option>
        <option class='start_time' value = "16:20">04:20 PM - 04:40 PM</option>
        <option class='start_time' value = "16:40">04:40 PM - 05:00 PM</option>
        <option class='start_time' value = "17:00">05:00 PM - 05:20 PM</option>
        <option class='start_time' value = "17:20">05:20 PM - 05:40 PM</option>
        <option class='start_time' value = "17:40">05:40 PM - 06:00 PM</option>
        <option class='start_time' value = "18:00">06:00 PM - 06:20 PM</option>-
        </select>
      </div>
      <div class="appoint_cards">
     <!-- <span>End Time</span>-->
        <br>
       <!-- <input type="time" id="end_time" required>-->
        <input type="hidden" id="id" value="<?php echo $fetch_row['id'] ?>">
      </div>
    </div>

<div align="center">
  <span id="message1"></span>

  <br>

  <button type="button" id="update_appointment">Update</button>
  <br>
  <p>NB:  Please Select Date First</p>
</div>

<div align="center" id="popup">
  <p id="popup_text"></p>
</div>
</div>
</div>
<script type="text/javascript">
  $(function(){
    $.ajax({
        url:"http://192.168.18.246/Ark/Lists/search_all_one.php",
      type:"POST",
      data:{
        "all_one":1,
        "page_id":page_id,
      },
      success: function(response){
        if(response){
          let p_result = JSON.parse(response)
          var rr = p_result[0];
          $('#patient-title').text(rr.First_Name);
        }
      }
    });
  });
$(document).ready(function(){
  $('#start_time').on('click', function(){
    let start_date = $('#start_date').val();

    if(start_date == ''){
      let result = document.getElementById('message1');
        result.style.color="red";
        result.innerHTML="Select Date First";
    }else{
    let start_time = $('#start_time').val();
    let id = $('#id').val();
    $.ajax({
      url:'http://192.168.18.246/Ark/Updates/update_appointment.php',
      type:'POST',
      data:{
        'approve':1,
        'start_time': start_time,
        'start_date': start_date,
      },
      success: function(response){
        if(response == 'yes'){
        let result = document.getElementById('message1');
        result.style.color="green";
        result.innerHTML="Time slot is available";
        }else if (response == 'no') {
          let result = document.getElementById('message1');
          result.style.color = "red";
          result.innerHTML="Time slot not available";
        }else if(response == 'empty'){
        let result = document.getElementById('message1');
        result.style.color="red";
        result.innerHTML="";
      }
      }
    });
  }
  });

  $('#update_appointment').on('click', function(){
    let id = $('#id').val();
    let Reason = $('#Reason').val();
    let start_date = $('#start_date').val();
    let start_time = $('#start_time').val();
   // let end_time = $('#end_time').val();
  $.ajax({
    url:'http://192.168.18.246/Ark/Updates/update_appointment.php',
    type:'POST',
    data:{
      'insert_update': 1,
      'id':page_id,
      'Reason':Reason,
      'start_date':start_date,
      'start_time':start_time,
     // 'end_time':end_time,
    },
    success: function(response){
      if(response == 'saved'){
        let result = document.getElementById('message1');
        result.style.color="green";
        result.innerHTML="Saved";
      }else if(response == 'failure'){
        let result = document.getElementById('message1');
        result.style.color="red";
        result.innerHTML="Failed to reschedule, try again";
      }else if(response == "booked"){
        let result = document.getElementById('message1');
        result.style.color="red";
        result.innerHTML="Date already booked";
      }else if (response == 'error') {
        let result = document.getElementById('message1');
        result.style.color="green";
        result.innerHTML="Patient is booked";
      }
    }
  });
 });
});
</script>
