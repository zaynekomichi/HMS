$(function(){
	$(document).on('click','.btn_info',function(){
		var details_url = $(this).data("id");


		//Check if file is locked if file is locked change text to locked
		checkLocked(details_url);

		//Check if patient was edited
		checkEdit(details_url);

		//display options dialog box
		$('#flex_all').css('opacity',0.5);
		$('#options').css({
			'display':'block',
			'opacity':1,
		});

		// do this when one of the options is clicked
		$('#edit').on('click', function(){
			if($('#lock_text').text() == "Lock" && $('#edit_text').text() == "Edit"){
				options(details_url);
			}


		});
		$('#view').on('click', function(){
			if($('#lock_text').text() == "Lock"){
				options_sec(details_url);
			}
		});
		$('#lock').on('click', function(){
			if($('#lock_text').text() == "Lock"){
				lockFile(details_url);
			}
		});

	});
	
});

function options(number){
	if(number == "1"){
		$('#render').load('php/Booking/PreviousPreg.html');
	}else if(number == "2"){
		$('#render').load('php/Booking/recordLabour.html');
	}else if(number == "3"){
		$('#render').load('php/Booking/summaryLabour.html');
	}else if(number == "4"){
		$('#render').load('php/Booking/postCheckup.html');
	}else if(number == "5"){
		$('#render').load('php/Booking/Discharge_Checklist.html');
	}else if(number == "6"){
		$('#render').load('php/Booking/motherDischarge.html');
	}
}

function options_sec(number){
	if(number == "1"){
		$('#render').load('php/view_bookings/PreviousPreg.html');
	}else if(number == "2"){
		$('#render').load('php/view_bookings/recordLabour.html');
	}else if(number == "3"){
		$('#render').load('php/view_bookings/summaryLabour.html');
	}else if(number == "4"){
		$('#render').load('php/view_bookings/postCheckup.html');
	}else if(number == "5"){
		$('#render').load('php/view_bookings/Discharge_Checklist.html');
	}else if(number == "6"){
		$('#render').load('php/view_bookings/motherDischarge.html');
	}
}

function options_third(number){
	if(number == "1"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number,
			},
			 success: function(response){
			if(response==1){
				console.log(response);
			}else{
				show_lock_error();
			}
		}});
	}else if(number == "2"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number
			}, 
			success: function(response){
			if(response==1){
				show_locked();
			}else{
				show_lock_error();
			}
		}});
	}else if(number == "3"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number
			}, 
			success: function(response){
			if(response==1){
				show_locked();
			}else{
				show_lock_error();
			}
		}});
	}else if(number == "4"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number
			}, 
			success: function(response){
			if(response==1){
				show_locked();
			}else{
				show_lock_error();
			}
		}});
	}else if(number == "5"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number
			}, 
			success: function(response){
			if(response==1){
				show_locked();
			}else{
				show_lock_error();
			}
		}});
	}else if(number == "6"){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation",
			type:"POST",
			data:{
				"lock":1,
				"id":page_id,
				"lock_file":number
			}, 
			success: function(response){
			if(response==1){
				show_locked();
			}else{
				show_lock_error();
			}
		}});
	}
}

function checkLocked(details_url){
	$.ajax({
				url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation.php",
				type:"POST",
				data:{
					"lock_sec":1,
					"id":page_id,
					"lock_file":details_url,
				},
				success: function(response){
					if(response == 1){
						$('#lock_text').text("Locked");
						$('#view_text').text("Seen");
					}else if(response == 2){
						$('#lock_text').text("Lock");
						$('#view_text').text("View");
					}else{
						if(response == 3){

						}
					}
				}
			});
}

function checkEdit(details_url){
	$.ajax({
				url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation.php",
				type:"POST",
				data:{
					"edit_check":1,
					"id":page_id,
					"lock_file":details_url,
				},
				success: function(response){
					if(response == 1){
						$('#edit_text').text("Edited");
					}else if(response == 2){
						$('#edit_text').text("Edit");
						$('#lock_text').text("Lock");
					}else{
						if(response == 3){

						}
					}
				}
			});
}

function lockFile(details_url){
	$.ajax({
		url:"http://192.168.1.23/Ark/Lists/get_lock_confirmation.php",
				type:"POST",
				data:{
					"lock":1,
					"id":page_id,
					"lock_file":details_url,
				},
				success: function(response){
					if(response == 1){
						$('#lock_text').text("Locked");
					}else if(response == 2){
						//TO ADD ERROR FUNCTION
					}
				}
	});
}

