<script type="text/javascript">
    try{
      var remove = clearInterval(clear);
    }
    catch(err){
      var remove;
    }
  </script>
<div id="second_container">
	<div align="center">
		<h1 id="head_text">Quick Search</h1>
		<button id="bookPatient" class="btn" type="button"></button>
	</div>
	<div id="flex_all">
		<div class="all_cards">
			<p class="panel_text">Patient Details</p>
			<p  class="all_text">
				<img class="all_icons" src="./css/img/005-id card.png">
				<span class="all_data" id="all_one_name"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/008-calendar.png">
				<span class="all_data" id="all_one_email"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/034-smartphone.png">
				<span class="all_data" id="all_one_phone"></span class="all_data">
			</p>
		</div>
		<div class="all_cards">
			<p class="panel_text">Allergies</p>
			<p>
				Latex/Rubber
				<span class="all_data" id="all_one_lr"></span class="all_data">
				</p>
			<p>
				Hyper Sensitivity 
				<span class="all_data" id="all_one_hs"></span class="all_data">
				</p>
			<p>
				Adverse Reaction 
				<span class="all_data" id="all_one_ar"></span class="all_data">
				</p>
		</div>
		<div class="all_cards">
			<p class="panel_text">Appointment Details</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/037-calendar.png">
				Date
				<span class="all_data" id="all_one_date"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/001-timer.png">
				Time 
				<span class="all_data" id="all_one_time"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/011-file.png">
				Reason 
				<span class="all_data" id="all_one_reason"></span class="all_data">
			</p>
		</div>
		<div class="all_cards">
			<button class="btn_info" data-id="1" id="pp">Previous Pregnancies</button>
			<br>
			<button class="btn_info" data-id="2" id="rl">Record of Labour</button>
			<br>
			<button class="btn_info" data-id="3" id="sl">Summary of Labour</button>
			<br>
			<button class="btn_info" data-id="4" id="pc">Postnatal Checkup</button>
			<br>
			<button class="btn_info" data-id="5" id="dc">Discharge Checklist</button>
			<br>
			<button class="btn_info" data-id="6" id="md">Mother Discharge</button>
		</div>
	</div>
	<div align="center">
		<button type="button" class="btn" id="all_info">Patient Info</button>
		<button type="button" class="btn" id="stats"> Statistics</button>
	</div>
		<div id="History" align="center">
			<h3>View Appointment History</h3>
			<div id="render_history">
				
			</div>
		</div>
	</div>
</div>

<div id="options" align="center">
	<div align="right">
		<img src="css/img/crossed.png" id="close_options" class="icon-nav">
	</div>
	<div class="flex-options">
		<div>
			<img src="css/img/eye.png" id="view" class="icon-nav-one">
			<br>
			<p id="view_text">View</p>
		</div>
		<div>
			<img src="css/img/edit.png" id="edit" class="icon-nav-one">
			<br>
			<p id="edit_text">Edit</p>
		</div>
		<div>
			<img src="css/img/lock.png" id="lock" class="icon-nav-one">
			<br>
			<p id="lock_text"></p>
		</div>
	</div>
</div>
<script type="text/javascript">	
	history_render();



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
					let rr = p_result[0];
					$('#all_one_name').text(rr.First_Name);
					
					if(rr.Gestation == ""){
						$('#all_one_email').text("Gestation not set");
					}else{
						$('#all_one_email').text(rr.Gestation);
					}
					$('#all_one_phone').text(rr.Phone_Number);

					$('#all_one_date').text(rr.start_date);
					$('#all_one_time').text(rr.start_time);
					$('#all_one_reason').text(rr.Reason);

				}
			}
		});

		$.ajax({
			url:"http://192.168.18.246/Ark/Lists/search_all_one.php",
			type:"POST",
			data:{
				"all_three":1,
				"id":page_id
			},
			success: function(response){
				if(response != 0){
					let allergies = JSON.parse(response);
					let rr = allergies[0];
					$('#all_one_lr').text(rr.plr);
					$('#all_one_hs').text(rr.ph);
					$('#all_one_ar').text(rr.par);
				}else{
						$('#all_one_lr').text("Not set");
					$('#all_one_hs').text("Not set");
					$('#all_one_ar').text("Not set");
				}
			}
		});
	});
	  
		$(function(){
			$.ajax({
				url:"http://192.168.18.246/Ark/Lists/confirm_id.php",
				type:"POST",
				data:{
					"all_two":1,
					"page_id":page_id
				},
				success: function(response){
					let btn_booking = $('#bookPatient');
					if(response == 1){
						btn_booking.css("display","block");
						btn_booking.html("Start Booking");
						btn_booking.on('click', function(){
							$('#render').load('php/Booking/first_session.html');
						});
					}else if(response == 2){
						btn_booking.css("display","block");
						btn_booking.html("Finish Booking");
						btn_booking.on('click', function(){
							$('#render').load('php/Booking/second_session.html');
						});
					}else if(response == 3){
						btn_booking.css("display","block");
						btn_booking.html("Final Booking");
						btn_booking.on('click', function(){
							$('#render').load('php/Booking/third_session.html');
						});
					}
				}
			});
		});

		$(function(){
			$.ajax({
				url:"http://192.168.18.246/Ark/Lists/confirm_id.php",
				type:"POST",
				data:{
					"all_three":1,
					"page_id":page_id
				},
				success: function(response){
					if(response !=  1){
						$('#all_info').css("display","none");
					}
				}
			})
		});

		$('#close_options').on('click', function(){
			$('#options').css('display','none');
			$('#flex_all').css('opacity','initial');
		});
		$('#all_info').on('click', function(){
			 	$('#render').load('php/patient_info.php');
		});

	$(document).on('click', '.his_special', function(){
		page_id = $(this).data('id');
	$('#render').load('php/view_patient_notes.php');
});
	$('#stats').on('click', function(){
		$('#render').load('php/Stats/general_stats.php');
	});
</script>