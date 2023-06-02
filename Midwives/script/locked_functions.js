function ViewLocked(){\
	let get_locked_details = "htpp://192.168.18.246/";
	
	$.ajax({
		url:get_locked_details+"Ark/Lists/get_lock_confirmation.php",
		type:"POST",
		data:{
			"view_locked":1,
			"id":page_id,
			"page_url":details_url,
		},
		success: function(response){
			$('#view_locked').css("display","block");
			let parsed = JSON.parse(response);
			$('#locked_name').text(parsed.user);		
		}
	})
}