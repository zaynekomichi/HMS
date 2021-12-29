function show_error(){
	let container = $('#showError');
	container.css("display","block");
}

function show_success(){
	let container = $('#showSuccess');
	container.css("display","block");
}

$(function(){
	$('#clearError').on('click', function(){
		let container = $('#showError');
		container.css("display","none");
	});

	$('#clearSuccess').on('click', function(){
		let container = $('#showSuccess');
		container.css("display","none");
		$('#render').load('php/all_one.php');
	});
});