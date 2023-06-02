$(function(){
	$('#save_six').on('click', function(){
		let dis_date = $('#dis_date').val();
		let dis_time = $('#dis_time').val();
		let breast_cond = $('#breast_cond').val();
		let ute_cond = $('#ute_cond').val();
		let Perineum = $('#Perineum').val();
		let Micturition = $('#Micturition').val();
		let Legs = $('#Legs').val();
		let Bowels = $('#Bowels').val();
		let Lactation = $('#Lactation').val();
		let Haemoglobin = $('#Haemoglobin').val();
		let	medic = $('#medic').val();
		let temp = $('#temp').val();
		let bp = $('#bp').val();
		let pulse = $('#pulse').val();
		let mmr = $('#mmr').val();
		let med_date = $('#med_date').val();
		let med_sig = $('#med_sig').val();
		let antid = $('#antid').val();
		let anti_date = $('#anti_date').val();
		let anti_sig = $('#anti_sig').val();
		let fpc = $('#fpc').val();
		let smoking = $('#smoking').val();
		let nece = $('#nece').val();
		let notes = $('#notes').val();
		let bookedby = $('#bookedby').val();
		let booked_date = $('#booked_date').val();
		let booked_time = $('#booked_time').val();
		let sum_area = $('#sum_p').val();
		let dis_by = $('#dis_by').val();
		let dis_sig = $('#dis_sig').val();
		let dis_status = $('#dis_status').val();
		
		$.ajax({
			 url:"http://192.168.18.246/Ark/Insert/motherDischarge.php",
			 type:"POST",
			 data:{
			 	"motherDischarge":1,
			 	"id":page_id,
			 	"date_1":dis_date,
			 	"time_1":dis_time,
			 	"Breast":breast_cond,
			 	"Uterus":ute_cond,
			 	"Perineum":Perineum,
			 	"micturition":Micturition,
			 	"legs":Legs,
			 	"Bowels":Bowels,
			 	"lactation":Lactation,
			 	"haemoglobin":Haemoglobin,
			 	"medics":medic,
			 	"temperature":temp,
			 	"BP":bp,
			 	"pulse":pulse,
			 	"mmr":mmr,
			 	"mmr_date":med_date,
			 	"mmr_sig":med_sig,
			 	"anti_d":antid,
			 	"anti_date":anti_date,
			 	"anti_sig":anti_sig,
			 	"family_planning":fpc,
			 	"smoking":smoking,
			 	"postnatal_appointments":nece,
			 	"results":notes,
			 	"booked_with":bookedby,
			 	"booked_date":booked_date,
			 	"booked_time":booked_time,
			 	"post_risk":sum_area,
			 	"disch_name":dis_by,
			 	"sign":dis_sig,
			 	"status":dis_status	
			 },
			 success: function(response){
			 	if(response == 1){
			 		show_success();
			 	}else{
			 		show_error();
			 	}
			 }
		});

	});
});