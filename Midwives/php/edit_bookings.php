<div id="container">
	<div align="center">
		<h1>Patient General Details</h1>
		<span id="all_one_name"></span>
	</div>
	<div id="gen_info_flex">
		<div class="gen_info_cards">
			<div>
				<span>Date of Birth</span><br>
				<input type="text" readonly class="edit_input" id="all_one_dob">
			</div>
			<div>
				<span>Gestation</span><br>
				<input type="text" readonly class="edit_input" id="all_one_Gestation">
			</div>
			<div>
				<span>Phone Number</span><br>
				<input type="text" readonly class="edit_input" id="all_one_phone">
			</div>
		</div>
		<br>
		<h3 align="center">Next Appointment</h3>
		<div class="gen_info_cards">
			<div>
				<span>Date</span><br>
				<input type="text" readonly class="edit_input" id="all_one_date">
			</div>
			<div>
				<span>Start Time</span><br>
				<input type="text" readonly class="edit_input" id="all_one_time">
			</div>
			<div>
				<span>Reason for visit</span><br>
				<input type="text" readonly class="edit_input" id="all_one_reason">
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
$(function(){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/search_all_one.php",
			type:"POST",
			data:{
				"all_one":1,
				"page_id":page_id,
			},
			success: function(response){
				if(response){
					let p_result = JSON.parse(response)
					let rr = p_result[0];
					console.log(p_result);
					$('#all_one_name').text(rr.First_Name);
					$('#all_one_dob').attr("value",rr.DoB);
					$('#all_one_Gestation').attr("value",rr.Gestation);
					$('#all_one_phone').attr("value",rr.Phone_Number);
					$('#all_one_date').attr("value",rr.start_date);
					$('#all_one_time').attr("value",rr.start_time);
					$('#all_one_reason').attr("value",rr.Reason);
				}
			}
		});
});

</script>
