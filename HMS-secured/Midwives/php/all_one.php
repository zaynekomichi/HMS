<script type="text/javascript">
    try{
      var remove = clearInterval(clear);
    }
    catch(err){
      var remove;
    }
  </script>
<div id="second_container">
	<div>
		<h1 id="head_text">Quick Search</h1>
	</div>
	<div id="flex_all">
		<div class="all_cards">
			<p class="panel_text">Patient Details</p>
			<p  class="all_text">
				<img class="all_icons" src="./css/img/005-id card.png">
				<span class="all_data" id="all_one_name"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/028-email.png">
				<span class="all_data" id="all_one_email"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/034-smartphone.png">
				<span class="all_data" id="all_one_phone"></span class="all_data">
			</p>
			<button class="btn_btn" id="f_all">More Details</button>
		</div>
		<div class="all_cards">
			<p class="panel_text">Accounting Details</p>
			<p>
				Package 
				<span class="all_data" id="all_one_package"></span class="all_data">
				</p>
			<p>
				Paid with 
				<span class="all_data" id="all_one_option"></span class="all_data">
				</p>
			<p>
				Deposit paid $ZW 
				<span class="all_data" id="all_one_zw"></span class="all_data">
				</p>
			<p>
				Deposit paid $USD 
				<span class="all_data" id="all_one_usd"></span class="all_data">
				</p>
			<button class="btn_btn" id="s_all">More Details</button>
		</div>
		<div class="all_cards">
			<p class="panel_text">Appointment Details</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/037-calendar.png">
				Appointment On 
				<span class="all_data" id="all_one_date"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/001-timer.png">
				Appointment Time 
				<span class="all_data" id="all_one_time"></span class="all_data">
			</p>
			<p class="all_text">
				<img class="all_icons" src="./css/img/011-file.png">
				Reason for vist 
				<span class="all_data" id="all_one_reason"></span class="all_data">
			</p>
			<button class="btn_btn" id="t_all">Reschedule</button>

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
					$('#all_one_name').text(rr.First_Name);
					$('#all_one_email').text(rr.Email);
					$('#all_one_phone').text(rr.Phone_Number);

					$('#all_one_package').text(rr.package);
					$('#all_one_option').text(rr.METHOD);
					$('#all_one_zw').text(rr.ZW);
					$('#all_one_usd').text(rr.USD);

					$('#all_one_date').text(rr.start_date);
					$('#all_one_time').text(rr.start_time);
					$('#all_one_reason').text(rr.Reason);

				}
			}
		});
	});
	    
		$('#f_all').on('click', function(){
			$('#render').load('php/edit_bookings.php');
		});
		$('#s_all').on('click', function(){
			$('#render').load('php/edit_bookings.php');
		});
		$('#t_all').on('click', function(){
			$('#render').load('php/change_appointment.php');
		});
</script>