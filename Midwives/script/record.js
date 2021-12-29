$(function(){
	$('#three').val(Username);

	$('#save_two').on('click',function(){
			let datee  = $('#exDate').val();
			let timee = $('#exTime').val();
			let examined_by = $('#three').val();
			let admission = $('#hreason').val();
			let contractions = $('#hContractions').val();
			let cont_time = $('#hOnset').val();
			let cont_dur = $('#hDuration').val();
			let membraines_raptured = $('#hraptured').val();
			let membraines_time = $('#htimeRapture').val();
			let show_1 = $('#hshow').val();
			let com_lnmp = $('#hLNMP').val();
			let com_edd = $('#hEDD').val();
			let obstretic = $('#hhistory').val();
			let other_obstrectic = $('#hinformation').val();
			let other_medical = $('#hcondition').val();
			let hiv_testing = $('#htesting').val();
			let general_condition = $('#exCondition').val();
			let temp = $('#exTemp').val();
			let pulse = $('#exBP').val();
			let hb_temp = $('#exHB').val();
			let oedema = $('#exOdema').val();
			let gestation = $('#apweeks').val();
			let lie = $('#apLIE').val();
			let presentation = $('#apPresentation').val();
			let engagement = $('#apEngagement').val();
			let foetal = $('#apFetalHeart').val();
			let cont_strength = $('#cstrength').val();
			let cont_freq = $('#cfrequency').val();
			let cont_duration = $('#cduration').val();
			let cont_urinalysis = $('#curinal').val();
			let vulva_vagina = $('#vereason').val();
			let cervix_effacement = $('#cefface').val();
			let cervix_dilation = $('#cdilation').val();
			let cervix_application = $('#cpresenting').val();
			let membraines = $('#mmebrane').val();
			let liqour = $('#mliqour').val();
			let cord_felt = $('#mcord').val();
			let present_part = $('#pLpp').val();
			let moulding = $('#pdm').val();
			let position = $('#pposition').val();
			let pelvic = $('#passes').val();
			let diagnosis = $('#pmidorders').val();
			
			
			$.ajax({
				url:"http://192.168.1.23/Ark/Insert/record_labour.php",
				type:"POST",
				data:{
					"recordLabour":1,
					"id":page_id,
					"datee":datee,
					"timee":timee,
					"examined_by":examined_by,
					"admission":admission,
					"contractions":contractions,
					"cont_time":cont_time,
					"cont_dur":cont_dur,
					"membraines_raptured":membraines_raptured,
					"membraines_time":membraines_time,
					"show_1":show_1,
					"com_lnmp":com_lnmp,
					"com_edd":com_edd,
					"obstretic":obstretic,
					"other_obstrectic":other_obstrectic,
					"other_medical":other_medical,
					"hiv_testing":hiv_testing,
					"general_condition":general_condition,
					"temp":temp,
					"pulse":pulse,
					"hb_temp":hb_temp,
					"oedema":oedema,
					"gestation":gestation,
					"lie":lie,
					"presentation":presentation,
					"engagement":engagement,
					"foetal":foetal,
					"cont_strength":cont_strength,
					"cont_freq":cont_freq,
					"cont_duration":cont_duration,
					"cont_urinalysis":cont_urinalysis,
					"vulva_vagina":vulva_vagina,
					"cervix_effacement":cervix_effacement,
					"cervix_dilation":cervix_dilation,
					"cervix_application":cervix_application,
					"membraines":membraines,
					"liqour":liqour,
					"cord_felt":cord_felt,
					"present_part":present_part,
					"moulding":moulding,
					"position":position,
					"pelvic":pelvic,
					"diagnosis":diagnosis,
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