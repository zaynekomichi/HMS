$(function(){
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_dischargeChecklist.php",
			type:"POST",
			data:{
				"dischargeChecklist":1,
				"id":page_id,
			},
			success: function(response){
				let change = JSON.parse(response);
				let rr = change[0];
				let examination = $('#examination').val(rr.exam);
				let rubella = $('#rubella').val(rr.Rubella);
				let Hepatitis = $('#Hepatitis').val(rr.HEP);
				let baby_vax = $('#baby_vax').val(rr.Baby);
				let mothers_blood = $('#mothers_blood').val(rr.Mothers_blood);
				let mother_antid = $('#mother_antid').val(rr.mothers_anti_d);
				let attached = $('#attached').val(rr.request_form);
				let mothers_tto = $('#mothers_tto').val(rr.mother_TTO);
				let babies_tto = $('#babies_tto').val(rr.baby_tto);
				let tto_color = $('#tto_color').val(rr.tto_form);
				let vit_k = $('#vit_k').val(rr.Vitamin);
				let vit_oral = $('#vit_oral').val(rr.Vitamin_K);
				let tetra = $('#tetra').val(rr.tetra);
				let advice = $('#advice').val(rr.advice_given);
				let drug_chart = $('#drug_chart').val(rr.drug_chart);
				let dis_details = $('#dis_details').val(rr.discharge);
				let gp_check = $('#gp_check').val(rr.gp_details);
				let newborn_dis = $('#newborn_dis').val(rr.newborn_discharge);
				let puerperium = $('#puerperium').val(rr.Puerperium);
				let dis_sum = $('#dis_sum').val(rr.discharge_summary);
				let family_planning = $('#family_planning').val(rr.Family);
				let com_midwife = $('#com_midwife').val(rr.Community_midwife);
				let health_visitor = $('#health_visitor').val(rr.Health_visitor);
				let baby_birth = $('#baby_birth').val(rr.reg_num);
				let leaflets = $('#leaflets').val(rr.discussed_discharge);
				let emergency = $('#emergency').val(rr.mothers_advise);
				let discharged = $('#discharged').val(rr.out_area);
			}
		});
	}); 