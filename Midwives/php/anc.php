
<div id="second_container">
	<script>
	//console.clear();
	</script>
		  <div class="design">
    <!-- [SEARCH FORM] -->
     <!--<form onsubmit="return fetch_anc();">-->
      <h1 style="margin-bottom: 10px;">Appointments</h1>
      <input type="text" id="search" required/ autocomplete="off" placeholder="Search Patient Name">
    <!--  <input type="submit" id="submit" value="Search"/>-->
				<img onclick="window.open('php/print_appointments.html')" src="./css/img/printer.png" id="printer">
    <!--</form>-->
     <button id="close_search" style="display: none; text-align: center; margin-left: 400px; margin-bottom: 5px;"  type="button">Close</button>
    <div id="results"></div>

  </div>
	<div align="center">

	</div>






	<div class="flex-row">
		<table align="center"  cellspacing="0" id="f-table">
		<thead>

			<th>Time</th>
			<th>Name</th>
			<th>Reason</th>
			<th>Gestation</th>
			<th>Phone Number</th>
			<th>Current</th>
			<th>State</th>
			<th>Update</th>

		</thead>
		<tbody id="appointment_list">
		
</tbody>
	</table>

		</div>
	</div>
	</div>
	</div>
	<script type="text/javascript">


fetch_anc();
$(function(){
	$('#appointment_list').load('http://192.168.1.23/Ark/Tables/appointments_midwives.php');
});

$(document).on('click', '.get_appointment_id', function(){
	page_id = $(this).data('id');
	$('#render').load('php/patient_notes.php');
});

$(document).ready(function(){
$('.choices').on('blur', function(){
	let id = $(this).data('id');
	let choices = $(this).val();
	if(choices==""){
		console.log("empty");
	}else{
	$.ajax({
		url:'php/appointment_choices.php',
		type:'POST',
		data:{
			'choice':1,
			'id':id,
			'choices':choices,
		},
		success: function(response){
			if(response == 'True'){
				$('#render').load('php/anc.php');
			}
		}
	});
}
});
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
<!--Zackertech Synaptics ZayneKomichi Copyright @2020-->


<!--Zackertech Synaptics ZayneKomichi Copyright @2020-->
