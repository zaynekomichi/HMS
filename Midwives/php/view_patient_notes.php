<div id="container">
  <div align="center" class="flex-options">
      <img id="go_back" src="css/img/previous.png" class="icon-nav-one" style="right: 15%;">
    <h1>Appointment Notes</h1>
    <p></p>
  </div>
  <p id="pname" align="center"></p>
  <div align="center" id="notes">
    <div id="flex-general">
      <div>
        <span>Gestation Weeks</span>
        <br>
        <input readonly class="notes_input" type="text" id="gest">
      </div>
       <div>
        <span>Temperature °C</span>
        <br>
        <input readonly class="notes_input" type="text" id="temp">
      </div>
       <div>
        <span>Weight Kgs</span>
        <br>
        <input readonly class="notes_input" type="text" id="weight">
      </div>
    </div>
    <div id="flex-general">
      <div>
        <span>Blood Pressure Bpm</span>
        <br>
        <input readonly class="notes_input" type="text" id="bp">
      </div>
       <div>
        <span>Prescription</span>
        <br>
        <input readonly class="notes_input" type="text" id="pres">
      </div>
       <div>
        <span>Practioner</span>
        <br>
        <input readonly  class="notes_input" type="text" id="practioner">
      </div>
    </div>
    <div id="flex-general">
      <div>
        <span>General Notes</span>
        <br>
        <p class="big_text" id="user_notes"></p>
      </div>
    </div>
  </div>
</div>

<script type="text/javascript">
  $(function(){
      $.ajax({
      url:"http://192.168.18.246/Ark/Lists/get_notes.php",
      type:"POST",
      data:{
        "notes":1,
        "id":page_id,
      },
      success: function(response){
        let parsed = JSON.parse(response);
        let gest = $('#gest').val(parsed.Gestation);
        let weight = $('#weight').val(parsed.Weight);
        let temp = $('#temp').val(parsed.Temperature);
        let practioner = $('#practioner').val(parsed.Practioner);
        let bp = $('#bp').val(parsed.Blood_Pressure);
        $('#user_notes').text(parsed.Medical_Details);
        let name = $('#pname').text(parsed.First_Name);
        let pres = $('#pres').val(parsed.Prescription);
        page_id = parsed.user_id;
      } 
    });
});
</script>
<script type="text/javascript" src="script/view_settings.js"></script>