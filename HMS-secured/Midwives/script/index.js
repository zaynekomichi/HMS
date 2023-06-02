
function dashboard(){
$(document).ready(function(){
	$("#render").load('php/dashboard.php');
		try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
		
		
});
}

function acc(){
	$(document).ready(function(){
		$('#render').load('php/acc.php');
		try{
			        try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
		}
		catch(err){
			var remove;
		}
		
	});
}

function anc(){
$(document).ready(function(){
	$("#render").load("php/anc.php");
	function refresh_table(){
	$.get('php/anc.php',function(data){
		$('#second_container').html(data);
		});
	}

	 clear = setInterval(refresh_table, 30000);
});
}

function appointment(){
$(document).ready(function(){
	$("#render").load("php/appointment.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function add_booking(){
$(document).ready(function(){
	//$("#render").load("php/add_booking.php");
	//CHANGE BACK TO THE FIRST WHEN DONE EDITING THE PAGES
	$('#render').load("php/Booking/second_session.html")
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function history(){
$(document).ready(function(){
	$("#render").load("php/history.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function view_bookings(){
$(document).ready(function(){
	$("#render").load("php/view_bookings.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function f_appointments(){
$(document).ready(function(){
	$("#render").load("php/f-appointments.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function settings(){
$(document).ready(function(){
	$("#render").load("php/Settings.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}
function help(){
$(document).ready(function(){
	$("#render").load("php/help.php");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}

function logout(){
$(document).ready(function(){
	window.location.replace("../index.html")
});
}

function redirect_gmail(){
	$(document).ready(function(){
	$("#render").load("https://mail.google.com");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}

function redirect_123reg(){
	$(document).ready(function(){
	$("#render").load("https://webmail.123-reg.co.uk/login");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}

function redirect_g_business(){
	$(document).ready(function(){
	$("#render").load("https://business.google.com");
	    try{
			var remove = clearInterval(clear);
		}
		catch(err){
			var remove;
		}
		
});
}

function fetch_anc() {
        // GET SEARCH TERM
				$(document).ready(function(){
					var sl = document.getElementById('search');
					if($('#search') == ''){
             console.log('empty');
					}else{
					$('#search').keyup(function(){
						 var close_btn = document.getElementById('close_search');
        var res_box = document.getElementById('results');
        res_box.style.display = 'block';
        close_btn.style.display = 'block';
        var data = new FormData();
        data.append('search', document.getElementById("search").value);
        data.append('ajax', 1);

        // AJAX SEARCH REQUEST
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://192.168.18.246/Ark/Search/anc_search.php", true);
        xhr.onload = function () {
          if (this.status==200) {
            var results = JSON.parse(this.response),
                wrapper = document.getElementById("results");
            wrapper.innerHTML = "";
            if (results.length > 0) {
              for(var res of results) {
              	 var line = document.createElement("table");
                line.innerHTML ="<tr class='get_appointment_id' data-id="+res['id']+"><td>"+res['First_Name'] + "</td><td>Appointment on</td><td>"+res['text_date']+"</td><td style='width:50px;'> at </td><td>"+res['start_time']+"</td><td>"+res['Reason']+"</td></tr>";
               
               wrapper.appendChild(line);
              }
            } else {
              wrapper.innerHTML = "<span style='width: 700px; padding: 10px; margin-left: 300px;margin-right:300px;'><td>No results found <a id='change_cursor' onclick='add_booking();'>New Booking</a><span>";
            }
          } else {
            alert("ERROR LOADING FILE!");
          }
        };
        xhr.send(data);
        return false;

			});
		}
		});
  }

			function fetch_bookings() {
				$('#search').keyup(function(){
						 var close_btn = document.getElementById('close_search');
        var res_box = document.getElementById('results');
        res_box.style.display = 'block';
        close_btn.style.display = 'block';
			        // GET SEARCH TERM
			       var data = new FormData();
			      //  data.append('search', document.getElementById("search").value);
			        //data.append('ajax', 1);*/
							data.append('search', document.getElementById("search").value);
				        data.append('ajax', 1);

			        // AJAX SEARCH REQUEST
			        var xhr = new XMLHttpRequest();
			        xhr.open('POST', "http://192.168.18.246/Ark/Search/search_bookings.php", true);
			        xhr.onload = function () {
			          if (this.status==200) {
			            var results = JSON.parse(this.response),
			                wrapper = document.getElementById("results");
			            wrapper.innerHTML = "";
			            if (results.length > 0 && results.length < 10) {
			              for(var res of results) {
			              	var line = document.createElement("table");
			                line.innerHTML = "<tr class='view_booking_btn' data-id="+res['id']+" ><td>"+ res['First_Name'] + " </td><td>  Email </td><td>"+res['Email']+"</td><td> Phone Number </td><td>"+res['Phone_Number']+"</td></tr>";
			                
			                /*var line = document.createElement("div");

			                line.innerHTML = "<span class='view_booking_btn' data-id="+res['id']+" >"+ res['First_Name'] + " Email "+res['Email']+" Phone Number "+res['Phone_Number']+"</br></span>";
			                */wrapper.appendChild(line);
			              }
			            } else {
			              wrapper.innerHTML = "<span style='width: 700px; padding: 10px; margin-left: 300px;margin-right:300px;'><td>No results found <a id='change_cursor' onclick='add_booking();'>New Booking</a><span>";
			            }
			          } else {
			            alert("ERROR LOADING FILE!");
			          }
			        };
			        xhr.send(data);
			        return false;
			    });
	  }

function send_backup_data(){
	$(document).ready(function(){
		let date_backup = new Date();
		let user_backup = Username;
		$.ajax({
			url:'http://192.168.18.246/Ark/Backup/send_data.php',
			type:'POST',
			data:{
				'response':1,
				'date_backup':date_backup,
				'user_backup':user_backup,
			},
			success: function(response){
				if(response == 'saved'){
					console.log('saved');
				}
			}
		});
	});
}



function redirect_gmail(){
	$(document).ready(function(){
	$("#render").load("https://mail.google.com");
	var remove = clearInterval(clear);
});
}

function redirect_123reg(){
	$(document).ready(function(){
	$("#render").load("https://webmail.123-reg.co.uk/login");
	var remove = clearInterval(clear);
});
}

function redirect_g_business(){
	$(document).ready(function(){
	$("#render").load("https://business.google.com");
	var remove = clearInterval(clear);
});
}