 <div id="first_session_div">

	<!--language details are here -->
	<!--######################### -->

	<div id="language_container">
		<h1 class="center_span">Language</h1>
		<div id="Language-Flex">
			<div class="language_cards">
				<span>Speak English</span>
				<input readonly id="lang_one" class="select_booking"> 
			</div>
			<div class="language_cards">
				<span>Understand English</span>
				<input readonly id="lang_two" class="select_booking">
			</div>
			<div class="language_cards">
				<span>Other Languages</span>
				<input readonly id="lang_three" class="select_booking">
			</div>
		</div>
		<br>
		<div id="tick_div" align="center">
			<img class="tick" id="approval_tick" src="css/img/approve.png" alt="">
		</div>
	</div>

	<!--#########################-->
	<!--language details end here-->

	<br>

	<!--Interpreter details are here -->
	<!--############################ -->
	<div id="Interpreter_Container" >
		<h1 class="center_span">Interpreter</h1>
		<div id="Interpreter-Flex">
			<div class="inter_cards">
				<input readonly type="text" placeholder="Full Name" id="InterName" class="input_booking">
				<input readonly type="text" placeholder="Address" id="InterAddress" class="input_booking">
			</div>
			<br>
			<div class="inter_cards">
				<input readonly type="text" placeholder="Tel No" id="InterNo" class="input_booking">
				<input readonly type="text" placeholder="Interpreting Service No" id="InterService" class="input_booking">
			</div>
			<br>
			<div class="inter_cards">
				<span>Special Needs</span>
				<br>
				<input readonly id="inter_one" class="select_booking">
			</div>
		</div>
		<br>
		<div class="tick_div" align="center">
			<img class="tick" id="inter_tick" src="css/img/approve.png" alt="">
		</div>
		<br>
	</div>

	<!--############################-->
	<!--Interpreter details end here-->

	<br>

	<!-- SPEECH, SIGHT, DIET BEGINS HERE -->
	<!--####################-->
	<div id="Speech_Container">
		<h1 class="center_span">Speech Sight & Diet</h1>
		<div id="Speech_Flex">
			<div class="speach_card ">
				<span>Speech</span>
				<br>
				<input readonly id="speech_one" class="select_booking">
			</div>
			<div class="speech_card">
				<span>Sight</span>
				<br>
				<input readonly id="sight_one" class="select_booking">
			</div>
			<div class="speach_card">
				<span>Diet</span>
				<br>
				<input readonly id="diet_one" class="select_booking">
			</div>
		</div>
		<br>
		<div class="tick_div" align="center">
			<img class="tick" id="ssd_tick" src="css/img/approve.png" alt="">
		</div>
	</div>

	<!--################-->
	<!--SPEECH ENDS HERE-->

	<br>

	<!--HEARING BEGINS HERE -->
	<!--################### -->
	<div id="Hearing_Container">
		<h1 class="center_span">Auditory</h1>
		<div id="Hearing_Flex">
			<div class="hearing_card">
				<span>Normal Lip Read</span>
				<br>
				<input readonly id="deaf_one" class="select_booking">
			</div>
			<div class="hearing_card">
				<span>Impaired Sign</span>
				<br>
				<input readonly id="deaf_two" class="select_booking">
			</div>
			<div class="hearing_card">
				<span>Deaf</span>
				<br>
				<input readonly id="deaf_three" class="select_booking">
			</div>
		</div>
		<br>
		<div class="tick_div" align="center">
			<img class="tick" id="hear_tick" src="css/img/approve.png" alt="">
		</div>
	</div>

	<!--##################-->
	<!--HEARINGS ENDS HERE-->

	<br>

	<!--Cervical screening starts here -->
	<!--###############################-->
	<div id="Cervical_Container">
		<h1 class="center_span">Cervix Screening</h1>
		<div id="Cervical_Flex">
			<div class="cs_card">
				<span>Last Cervical Smear</span>
				<br>
				<input readonly type="text" id="cs_date" class="input_booking">
				<br>
				<span>Results</span>
				<br>
				<textarea readonly  id="cs_results" class="textarea_booking"></textarea>
			</div>
			<div class="cs_card">
				<span>VIAC</span>
				<br>
				<input readonly type="text" id="cs_date_two" class="input_booking">
				<br>
				<span>Results</span>
				<br>
				<textarea readonly  id="cs_results_two" class="textarea_booking"></textarea>
			</div>
		</div>
		<br>
		<div class="tick_div" align="center">
			<img class="tick" id="cerv_tick" src="css/img/approve.png" alt="">
		</div>
	</div>

	<!--############################-->
	<!--CERVICAL SCREENING ENDS HERE-->
</div>
<script type="text/javascript">

	$(function(){
			$.ajax({
				url:"http://192.168.1.23/Ark/Lists/get_general.php",
				type:"POST",
				data:{
					"get_general": 1,
					"user_id":page_id,
				},
				success: function(response){
					if(response){
					 	let parse = JSON.parse(response);
					 	let rr = parse[0];
					 	$('#lang_one').attr("value",rr.lang_one);
					 	$('#lang_two').attr("value",rr.lang_two);
					 	$('#lang_three').attr("value",rr.lang_three);
					 	$('#InterName').attr("value",rr.InterName);
					 	$('#InterService').attr("value",rr.InterService)
					 	$('#InterAddress').attr("value",rr.InterAddress);
					 	$('#InterNo').attr("value",rr.InterNo);
					 	$('#inter_one').attr("value",rr.inter_one);
					 	$('#speech_one').attr("value",rr.speech_one);
						$('#deaf_one').attr("value",rr.deaf_one);
						$('#deaf_two').attr("value",rr.deaf_two);
						$('#deaf_three').attr("value",rr.deaf_three);
						$('#sight_one').attr("value",rr.sight_one);
						$('#diet_one').attr("value",rr.diet_one);
						$('#cs_date').attr("value",rr.cs_date);
						$('#cs_date_two').attr("value",rr.cs_date_two);
						$('#cs_results').val(rr.cs_result);
						$('#cs_results_two').val(rr.cs_result_two);
					}
				}
			});
		});

</script>