
<div align="center" id="container">
	<h1> WELCOME</h1>
	<p id="user_call"></p>
	<img id="user-img">
	<div id="flex-row">
		<div class="card"  id="first_card">
			<p> Today's Appointments</p>
                   <p id="num_appointments"></p>
		    <button onclick="anc();" class="btn-btn"><img src="css/img/013-notification bell.png" class="dashboard-btn">Appointments</button>
		</div>
		<div class="card" id="second_card">
		    <p> View Bookings</p>
					<p id="num_bookings"></p>
			<button onclick="view_bookings();" class="btn-btn"><img src="css/img/036-return box.png" class="dashboard-btn">View Bookings</button>
		</div>
		
	</div>
</div>
<script type="text/javascript">
	var user_Call =  document.getElementById('user_call');
	var user_pic = document.getElementById('user-img');
	user_pic.src="css/img/040-user.png";
	$('#user_call').text(Username);
	$(function(){
		$.ajax({
			url:"http://192.168.18.246/Ark/Dashboard/GetTotalAnP.php",
			type:"POST",
			data:{
				"appointments":1,
			},
			success: function(response){
				$('#num_appointments').text(response);
			}
		});

		$.ajax({
			url:"http://192.168.18.246/Ark/Dashboard/GetTotalAnP.php",
			type:"POST",
			data:{
				"bookings":1,
			},
			success: function(response){
				$('#num_bookings').text(response);
			}
		});
	});
</script>