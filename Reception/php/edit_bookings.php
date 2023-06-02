<div id="container">
	<br>
	<div id="color_first">
	<div class="capture_span" align="center">
		<!--<span style='font-weight:normal; font-size: 20px; margin-top: 10px;'>Patient Details</span>-->
		<p style="font-size: 19px">Patient Details</p>
	</div>
	<div align="center" class="edit_bookings_flex">
			<div class="bookings_cards">
			<p id="all_one_name"></p>
		</div>

		<div class="bookings_cards">
			<p><a id="all_one_dob"></a><a id="all_one_email"></a><a id="all_one_phone"></a></p>
		</div>
	</div>
</div>

	<div id="color_second">
	<div class="capture_span" align="center">

		<span>Next Of Kin</span>
	</div>
	<div align="center" class="edit_bookings_flex">
		<div class="bookings_cards">
			<p id="all_one_kname"></p>
		</div>
		<div class="bookings_cards">
			<p><a id="all_one_kdob"></a><a id="all_one_kemail"></a><a id="all_one_kpn"></a></p>
		</div>
		<div class="bookings_cards">
			<span>Booking Date</span>
			<p><a id="all_one_booking_date"></a></p>
		</div>
		<div class="bookings_cards">
			<span>Address</span>
			<p><a id="all_one_address"></a></p>
		</div>
	</div>
	</div>

<div id="color_third">
	<div class="capture_span" align="center">
		<span>Accounting Details</span>
	</div>
	<div align="center" class="edit_bookings_flex">
		<div class="bookings_cards">
			<p><a id="all_one_package"></a><a id="all_one_method"></a></p>
		</div>
		<div class="bookings_cards">
			<p><a id="all_one_zw"></a><a id="all_one_usd"></a></p>
		</div>


<div align="center" id="edit_bookings_form">
	<form>
		<input id="id" type="hidden">
		<p style="font-size: 15px;">Payment History</p>
		<textarea class="flex-form" id="all_one_payment_details" readonly></textarea>
		<p style="font-size: 15px;">Update Payment History</p>
		<textarea   id="Payment_Details" class="flex-form" id="all_one_payment_details">
		</textarea>
		<br>
		<button type="button" id="edit_bookings_update_btn">Update</button>
	</form>
</div>
<div id="edit_bookings_confirmation">
	<p id="edit_bookings_p_confirmation"></p>
	<button id="disappear_btn">Got It</button>
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
					console.log(p_result);
					$('#all_one_name').text(rr.First_Name);
					$('#all_one_email').text(rr.Email);
					$('#all_one_dob').text(rr.DoB);
					$('#all_one_phone').text(rr.Phone_Number);
					$('#all_one_payment_details').text(rr.Payment_Details);
					$('#all_one_package').text(rr.Package);
					$('#all_one_method').text(rr.METHOD);
					$('#all_one_zw').text("$ZW "+rr.ZW);
					$('#all_one_usd').text("$USD "+rr.USD);
					$('#all_one_kdob').text(rr.KDoB);
					$('#all_one_date').text(rr.start_date);
					$('#all_one_time').text(rr.start_time);
					$('#all_one_reason').text(rr.Reason);
					$('#all_one_kemail').text(rr.KEMAIL);
					$('#all_one_kpn').text(rr.KPN);
					$('#all_one_booking_date').text(rr.Booking_Date);
					$('#all_one_address').text(rr.Address);
					$('#all_one_payment_details').text(rr.Payment_Details);
				
				}
			}
		});
});

$(document).ready(function(){
	$('#edit_bookings_update_btn').on('click', function(){
		let id = $('#id').val();
		let P1 = $('#Payment_Details').val();
		let P2 = $('#all_one_payment_details').val();
		let Payment_Details = P1+"\n"+P2;
		$.ajax({
			url : 'http://192.168.18.246/Ark/Updates/update_payment_history.php',
			type: 'POST',
			data:{
				'data_updated': 1,
				'id':page_id,
				'Payment_Details':Payment_Details,
			},
			success: function(response){
				if(response == 'saved'){
         	let modal_window = document.getElementById('edit_bookings_confirmation');
					modal_window.style.display = "block";
				 $('#edit_bookings_p_confirmation').text('Saved !');
				}else if (response == 'failure') {
					let modal_window = document.getElementById('edit_bookings_confirmation');
					let font_warn_color = document.getElementById('edit_bookings_p_confirmation');
					let warning_btn = document.getElementById('disappear_btn');

					warn_btn.style.color = "white";
					warning_btn.style.backgroundColor = "red";
					modal_window.style.display = "block";
					font_warn_color.style.color = "red";

	       $('#edit_bookings_p_confirmation').text('Failed to save payment history');

				}
			}
		});
	});
});


$('#disappear_btn').on('click', function(){
	let hide_window = document.getElementById('edit_bookings_confirmation');
	hide_window.style.display = "none";
});

</script>
