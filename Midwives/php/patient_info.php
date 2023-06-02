<div id="container">
	<div align="center" class="flex-options">
	    <img id="go_back" src="css/img/previous.png" class="icon-nav-one" style="right: 19%;">
		<h1>Patients Info</h1>
		<p></p>
	</div>
	
	<div align="center">
			<p id="p_name"></p>
		<div id="btn_flex">
			<button class="btn" id="session_one">General Info</button>
			<button class="btn" id="session_two">Medical History</button>
			<button class="btn" id="session_three">Genetic History</button>
		</div>
	</div>
	<div id="info_frame">
		
	</div>
</div>
<script type="text/javascript" src="script/view_settings.js"></script>
<script type="text/javascript">
	$(function(){

		$.ajax({
			url:"http://192.168.18.246/Ark/Insert/midwives_booking.php",
			type:"POST",
			data:{
				"get_username":1,
				"user_id":page_id
			},
			success: function(response){
				$('#p_name').text(response);
			}
		});


		$('#info_frame').load('php/general_info.php');

		$('#session_one').on('click', function(){
			$('#info_frame').load('php/general_info.php');
		});
		$('#session_two').on('click', function(){
			$('#info_frame').load('php/medical_info.php');
		});
		$('#session_three').on('click', function(){
			$('#info_frame').load('php/genetic_info.php');
		});
	});
</script>