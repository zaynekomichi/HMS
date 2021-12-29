<div id="container">
  <div align="center">
    <h1>Appointment Notes</h1>
    <p id="pname"></p>
  </div>
  <div align="center" id="notes">
    <div id="flex-general">
      <div>
        <span>Gestation Weeks</span>
        <br>
        <input class="notes_input" type="text" id="gest">
      </div>
       <div>
        <span>Temperature °C</span>
        <br>
        <input class="notes_input" type="text" id="temp">
      </div>
       <div>
        <span>Weight Kgs</span>
        <br>
        <input class="notes_input" type="text" id="weight">
      </div>
    </div>
    <div id="flex-general">
      <div>
        <span>Blood Pressure Bpm</span>
        <br>
        <input class="notes_input" type="text" id="bp">
      </div>
       <div>
        <span>Prescription</span>
        <br>
        <input class="notes_input" type="text" id="pres">
      </div>
       <div>
        <span>Practioner</span>
        <br>
        <input class="notes_input" type="text" readonly id="practioner">
      </div>
    </div>
    <div id="flex-general">
      <div>
        <span>General Notes</span>
        <br>
        <textarea class="big_text" id="gnotes"></textarea>
      </div>
    </div>
    <input type="hidden" id="start_date">
    <input type="hidden" id="start_time">
    <input type="hidden" id="reason">
  </div>
  <div align="center">
    <button class="btn" id="save_once">Save</button>
  </div>
</div>
<script type="text/javascript">
  $(function(){


    //put in practioners name
    $('#practioner').attr('value',Username);

    //get patients name
    $.ajax({
      url:"http://192.168.1.23/Ark/Lists/get_notes.php",
      type:"POST",
      data:{
        "get_name":1,
        "id":page_id,
      },
      success: function(response){
        if(response){
          let parse_response = JSON.parse(response);
          $('#pname').text(parse_response.First_Name);
          $('#start_date').attr('value',parse_response.start_date);
          $('#start_time').attr('value',parse_response.start_time);
          $('#reason').attr('value',parse_response.Reason);
        }
      }
    });

    //send the data to databse
    
  });
  $('#save_once').on('click', function(){
      let gest = $('#gest').val();
      let weight = $('#weight').val();
      let temp = $('#temp').val();
      let practioner = $('#practioner').val();
      let bp = $('#bp').val();
      let notes = $('#gnotes').val();
      let name = $('#pname').text();
      let start_date = $('#start_date').val();
      let start_time = $('#start_time').val();
      let pres = $('#pres').val();
      let reason = $('#reason').val();
      $.ajax({
      url:"http://192.168.1.23/Ark/Insert/notes.php",
      type:"POST",
      data:{
        "notes":1,
        "id":page_id,
        "name":name,
        "gest":gest,
        "weight":weight,
        "temp":temp,
        "practioner":practioner,
        "bp":bp,
        "notes":notes,
        "start_date":start_date,
        "start_time":start_time,
        "pres":pres,
        "res":reason
      },
      success: function(response){
        if(response == 1){
          show_success();
        }else{
          show_error();
        }
      } 
    });
    });
</script>