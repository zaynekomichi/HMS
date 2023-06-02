<div id="second_container">
	<div id="acc_flex">
		<div class="acc_cards">
			<p id="acc_name"></p>
			<img  id="acc_picture" />
		</div>
		<div class="acc_cards">
			<span>Old Password</span>
			<br>
			<input type="password" id="old_password" autocomplete="off">
			<br>
			<button class="btn_btn" id="check_equal" onclick="check_original();">Verify</button>
			<div id="show_rest">
				<span>New Password</span>
				<br>
				<input type="password" id="new_password" autocomplete="off">
				<br>
				<span>Reapeat Password</span>
				<br>
				<input type="password" id="repeat_password" autocomplete="off">
				<br>
				<button class="btn_btn" id="submit_change" style="display:none;position: relative; bottom:23px; left: 90px;">Change</button>
			</div>
		</div>
	</div>
</div>
<div id="show_booking_proccess_response" style="font-family:Rubik; position: relative;bottom: 200px; left: 300px;">
  <p id="p-text"></p>
<button type="button" onclick="disappear_message();" id="warn_btn">Got It!</button>
</div>
<script type="text/javascript">
var acc_name = $('#acc_name');
var acc_picture = document.getElementById('acc_picture');
acc_picture.src = "css/img/"+Username+".jpg";
acc_name.text(Username);



		var new_pass = document.getElementById('new_password');
		var repeat_pass = document.getElementById('repeat_password');
		new_pass.style.display="none";
		repeat_pass.style.display="none";
	function check_original(){
		$(document).ready(function(){
		let old_password = $('#old_password').val();
		
		if(old_password == ""){
			console.clear();
		}else{
			$.ajax({
				url:'http://192.168.18.246/Ark/Accounts/acc_process.php',
				type:'POST',
				data:{
					'accept':1,
					'username':Username,
					'old_password':old_password,
				},
				success: function(response){
					if(response == 1){
						let show = document.getElementById('show_rest');
						show.style.opacity="1";
						let old_password = document.getElementById('old_password');
						let new_pass = document.getElementById('new_password');
						let repeat_pass = document.getElementById('repeat_password');
						old_password.style.border="1px solid green";
						new_pass.style.display="block";
						repeat_password.style.display="block";
					}else{
						let new_pass = document.getElementById('new_password');
						let repeat_pass = document.getElementById('repeat_password');
				        let old_password = document.getElementById('old_password');
				        old_password.style.border="1px solid red";	
				        let show = document.getElementById('show_rest');
						show.style.opacity="0.4";				
					}
				}
			});
		}
		});
	}

	function equalPasswords(){
		// function checks if new password is the same as the new password
		$('#repeat_password').on('keyup', function(){
			let new_password = $('#new_password').val();
			let repeat_password = $('#repeat_password').val();
			if(new_password === repeat_password){
				var confirm = true;
				let show_btn = document.getElementById('submit_change');
				show_btn.style.display="block";
				$('#submit_change').on('click', function(){
					$.ajax({
						url:'http://192.168.18.246/Ark/Accounts/acc_process.php',
						type:"POST",
						data:{
							'changed':1,
							'username':Username,
							'new_password':new_password,
							'repeat_password':repeat_password,
						},
						success: function(response){
							if(response == 1){
								  let good_news = document.getElementById('p-text');
         						  let view_modal = document.getElementById('show_booking_proccess_response');
          						  view_modal.style.display = "block";
          						  good_news.style.color = "green";
        						  $('#p-text').text("Password Changed!");
							}else{
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
			}else{
				var confirm = false;
				let show_btn = document.getElementById('submit_change');
				show_btn.style.display="none";
			}
		});
	}
	equalPasswords();
function disappear_message(){
   	let modal = document.getElementById('show_booking_proccess_response');
  	modal.style.display="none";
  	$('#render').load('php/dashboard.php');
}

</script>