$(function(){
		$.ajax({
			 url:"http://192.168.1.23/Ark/Lists/get_motherDischarge.php",
			 type:"POST",
			 data:{
			 	"motherDischarge":1,
			 	"id":page_id,
			 },
			 success: function(response){
			 	let change = JSON.parse(response);
				let rr = change[0];
				let dis_date = $('#dis_date').val(rr.date_1);
				let dis_time = $('#dis_time').val(rr.time_1);
				let breast_cond = $('#breast_cond').val(rr.Breast);
				let ute_cond = $('#ute_cond').val(rr.Uterus);
				let Perineum = $('#Perineum').val(rr.Perineum);
				let Micturition = $('#Micturition').val(rr.micturition);
				let Legs = $('#Legs').val(rr.legs);
				let Bowels = $('#Bowels').val(rr.Bowels);
				let Lactation = $('#Lactation').val(rr.lactation);
				let Haemoglobin = $('#Haemoglobin').val(rr.haemoglobin);
				let	medic = $('#medic').val(rr.medics);
				let temp = $('#temp').val(rr.temperature);
				let bp = $('#bp').val(rr.BP);
				let pulse = $('#pulse').val(rr.Pulse);
				let mmr = $('#mmr').val(rr.mmr);
				let med_date = $('#med_date').val(rr.mmr_date);
				let med_sig = $('#med_sig').val(rr.mmr_sig);
				let antid = $('#antid').val(rr.anti_d);
				let anti_date = $('#anti_date').val(rr.anti_date);
				let anti_sig = $('#anti_sig').val(rr.anti_sig);
				let fpc = $('#fpc').val(rr.family_planning);
				let smoking = $('#smoking').val(rr.smoking);
				let nece = $('#nece').val(rr.postnatal_appointments);
				let notes = $('#notes').val(rr.results);
				let bookedby = $('#bookedby').val(rr.booked_with);
				let booked_date = $('#booked_date').val(rr.booked_date);
				let booked_time = $('#booked_time').val(rr.booked_time);
				let sum_area = $('#sum_p').val(rr.post_risk);
				let dis_by = $('#dis_by').val(rr.disch_name);
				let dis_sig = $('#dis_sig').val(rr.sign);
				let dis_status = $('#dis_status').val(rr.status);
					 }
		});
	});