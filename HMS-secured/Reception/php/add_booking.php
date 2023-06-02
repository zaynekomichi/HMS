<div id="container">
<form >
<div class="flex-form" align="center">
  <h3>Patient Details</h3>
  <input type="text" id="First_Name" placeholder=" Full Name" required="required">
</div>

<div class="flex-form" align="center">
  <input type="text" id="DoB" placeholder="Date of Birth" required >
  <input type="number" id="Phone_Number" placeholder="Phone Number" required>
  <input type="email" id="Email" placeholder="Email" required>
</div>
<div class="flex-form" align="center">
  <input type="text" id="Address" placeholder="Address" required>
</div>

<div class="flex-form" align="center">
  <h3>Next Of Kin Details</h3>
  <input type="text" id="FN" placeholder=" Next of kin full name" required>
  <!--<input type="text" id="MN" placeholder="Middle Name" >
  <input type="text" id="LN" placeholder="Last Name" required>-->
</div>

<div class="flex-form" align="center">
  <input type="text" id="KDoB" placeholder="Date of Birth" required>
  <input type="number" id="KPN" placeholder="Phone Number" required>
  <input type="email" id="KEMAIL" placeholder="Email" required>
</div>
<div class="flex-form" align="center">
  <h3>Accounting Package</h3>
  <span>Package</span>
  <br>
  <select placeholder="Package" id="Package" required>
  </select>
</div>
  <div class="flex-form" align="center">
  <input type="number" id="ZW" placeholder="Deposit paid in $ZW" required>
  <input type="number" id="USD" placeholder="Deposit paid in $USD" required>
</div>
<div class="flex-form" align="center">
  <span>Payment Options</span>
  <br>
  <select id="METHOD" required>
  
  </select>
</div>
<div class="flex-form" align="center">
  <textarea placeholder="Payment History" id="Payment_Details" required></textarea>
</div>
<div class="flex-form" align="center">
  <br>
<a id="add_booking_btn">Send</a>
</div>
<div id="show_booking_proccess_response">
  <p id="p-text"></p>
<button type="button" onclick="disappear_message();" id="warn_btn">Got It!</button>
</div>
</form>
</div>
<script type="text/javascript">
$(document).ready(function(){
  $(document).on('click', '#add_booking_btn', function(){
   var Booking_Date = new Date();
    var First_Name = $('#First_Name').val();
  //  var Middle_Name = $('#Middle_Name').val();
  //  var Last_Name= $('#Last_Name').val();
    var Email= $('#Email').val();
    var DoB = $('#DoB').val();
    var Phone_Number = $('#Phone_Number').val();
    var FN = $('#FN').val();
    var MN = $('#MN').val();
    var LN= $('#LN').val();
    var KEMAIL = $('#KEMAIL').val();
    var KPN = $('#KPN').val();
    var KDoB= $('#KDoB').val();
    var Address= $('#Address').val();
    var ZW = $('#ZW').val();
    var USD = $('#USD').val();
    var METHOD = $('#METHOD').val();
    var Payment_Details = $('#Payment_Details').val();
    var Package = $('#Package').val();
    $.ajax({
      url: 'http://192.168.18.246/Ark/Insert/new_booking.php',
      type: 'POST',
      data:{
        'save_booking_data': 1,
       'Booking_Date':Booking_Date,
        'First_Name':First_Name,
      //  'Middle_Name':Middle_Name,
      //  'Last_Name':Last_Name,
        'Email':Email,
        'DoB':DoB,
        'Phone_Number':Phone_Number,
        'FN':FN,
        //'MN':MN,
        //'LN':LN,
        'KEMAIL':KEMAIL,
        'KPN':KPN,
        'KDoB':KDoB,
        'Address':Address,
        'ZW':ZW,
        'USD':USD,
        'METHOD':METHOD,
        'Payment_Details':Payment_Details,
        'Package':Package,
      },
      success: function(response){
        if (response == 'saved') {
          let good_news = document.getElementById('p-text');
          let view_modal = document.getElementById('show_booking_proccess_response');
          view_modal.style.display = "block";
          good_news.style.color = "green";
        $('#p-text').text("Succesful Booking");
       // var Booking_Date = ;
        var First_Name = $('#First_Name').val('');
      //  var Middle_Name = $('#Middle_Name').val('');
      //  var Last_Name= $('#Last_Name').val('');
        var Email= $('#Email').val('');
        var DoB = $('#DoB').val('');
        var Phone_Number = $('#Phone_Number').val('');
        var FN = $('#FN').val('');
        //var MN = $('#MN').val('');
        //var LN= $('#LN').val('');
        var KEMAIL = $('#KEMAIL').val('');
        var KPN = $('#KPN').val('');
        var KDoB= $('#KDoB').val('');
        var Address= $('#Address').val('');
        var ZW = $('#ZW').val('');
        var USD = $('#USD').val('');
        var METHOD = $('#METHOD').val('');
        var Payment_Details = $('#Payment_Details').val('');
        var Package = $('#Package').val('');
      }else if(response == 'failure'){
        let warn_button = document.getElementById('warn_btn');
        let view_modal = document.getElementById('show_booking_proccess_response');
        view_modal.style.display = "block";
        warn_button.style.background = "green";
        warn_button.style.color = "white";
        warn_btn.style.borderColor = "green";
        $('#p-text').text("Saved")
      }else if(response == 'failed'){
        let warn_button = document.getElementById('warn_btn');
        let view_modal = document.getElementById('show_booking_proccess_response');
        view_modal.style.display = "block";
        warn_button.style.background = "red";
        warn_button.style.color = "white";
        warn_btn.style.borderColor = "red";
        $('#p-text').text("Failed");
      }
      }
    });
  });
});

function disappear_message(){
   let modal = document.getElementById('show_booking_proccess_response');
  modal.style.display="none";
}

 function elt(type, ...children) {
          let  node  =  document.createElement(type);
          for  (let  child  of  children)  {
          if  (typeof  child  !=  "string")
            node.appendChild(child)
          else node.appendChild(document.createTextNode(child));
          }
          return  node;
  }
$(function(){
  $.ajax({
    url:"http://192.168.18.246/Ark/Lists/get_acc_list.php",
    type:"POST",
    data:{
      "package":1,
    },
    success: function(response){
      var results = JSON.parse(response);
      let list_select = document.getElementById('Package');
      if(results.length > 0){
         for(var res of results) {
                list_select.appendChild(elt("option",
                  res['package']));
              }
      }else{
        console.log("Failed");
      }
    }
  });

 $.ajax({
    url:"http://192.168.18.246/Ark/Lists/get_acc_list.php",
    type:"POST",
    data:{
      "medical":1,
    },
    success: function(response){
      var med_results = JSON.parse(response);
      let med_select = document.getElementById('METHOD');
      if(med_results.length > 0){
         for(var med of med_results) {
                med_select.appendChild(elt("option",
                  med['medical']));
              }
      }else{
        console.log("Failed");
      }
    }
  });

});



</script>
