$(function(){
		$.ajax({
			url:"http://192.168.18.246/Ark/Lists/get_recordLabour.php",
			type:"POST",
			data:{
				"recordLabour":1,
				"id":page_id,
			},
			success: function(response){
				let change = JSON.parse(response);
				let rr = change[0];
				let datee  = $('#exDate').val(rr.datee);
				let timee = $('#exTime').val(rr.timee);
				let examined_by = $('#three').val(rr.examined_by);
				let admission = $('#hreason').val(rr.admission);
				let contractions = $('#hContractions').val(rr.contractions);
				let cont_time = $('#hOnset').val(rr.cont_time);
				let cont_dur = $('#hDuration').val(rr.cont_dur);
				let membraines_raptured = $('#hraptured').val(rr.membraines_raptured);
				let membraines_time = $('#htimeRapture').val(rr.membraines_time);
				let show_1 = $('#hshow').val(rr.show_1);
				let com_lnmp = $('#hLNMP').val(rr.com_lnmp);
				let com_edd = $('#hEDD').val(rr.com_edd);
				let obstretic = $('#hhistory').val(rr.obstretic);
				let other_obstrectic = $('#hinformation').val(rr.other_obstrectic);
				let other_medical = $('#hcondition').val(rr.other_medical);
				let hiv_testing = $('#htesting').val(rr.hiv_testing);
				let general_condition = $('#exCondition').val(rr.general_condition);
				let temp = $('#exTemp').val(rr.temp);
				let pulse = $('#exBP').val(rr.pulse);
				let hb_temp = $('#exHB').val(rr.hb_temp);
				let oedema = $('#exOdema').val(rr.oedema);
				let gestation = $('#apweeks').val(rr.gestation);
				let lie = $('#apLIE').val(rr.lie);
				let presentation = $('#apPresentation').val(rr.presentation);
				let engagement = $('#apEngagement').val(rr.engagement);
				let foetal = $('#apFetalHeart').val(rr.foetal);
				let cont_strength = $('#cstrength').val(rr.cont_strength);
				let cont_freq = $('#cfrequency').val(rr.cont_freq);
				let cont_duration = $('#cduration').val(rr.cont_duration);
				let cont_urinalysis = $('#curinal').val(rr.cont_urinalysis);
				let vulva_vagina = $('#vereason').val(rr.vulva_vagina);
				let cervix_effacement = $('#cefface').val(rr.cervix_effacement);
				let cervix_dilation = $('#cdilation').val(rr.cervix_dilation);
				let cervix_application = $('#cpresenting').val(rr.cervix_application);
				let membraines = $('#mmebrane').val(rr.membraines);
				let liqour = $('#mliqour').val(rr.liqour);
				let cord_felt = $('#mcord').val(rr.cord_felt);
				let present_part = $('#pLpp').val(rr.present_part);
				let moulding = $('#pdm').val(rr.moulding);
				let position = $('#pposition').val(rr.position);
				let pelvic = $('#passes').val(rr.pelvic);
				let diagnosis = $('#pmidorders').val(rr.diagnosis);
				
			}
		});
	});