$(function(){
	$('#save_five').on('click',function(){
		let examination = $('#examination').val();
		let rubella = $('#rubella').val();
		let Hepatitis = $('#Hepatitis').val();
		let baby_vax = $('#baby_vax').val();
		let mothers_blood = $('#mothers_blood').val();
		let mother_antid = $('#mother_antid').val();
		let attached = $('#attached').val();
		let mothers_tto = $('#mothers_tto').val();
		let babies_tto = $('#babies_tto').val();
		let tto_color = $('#tto_color').val();
		let vit_k = $('#vit_k').val();
		let vit_oral = $('#vit_oral').val();
		let tetra = $('#tetra').val();
		let advice = $('#advice').val();
		let drug_chart = $('#drug_chart').val();
		let dis_details = $('#dis_details').val();
		let gp_check = $('#gp_check').val();
		let newborn_dis = $('#newborn_dis').val();
		let puerperium = $('#puerperium').val();
		let dis_sum = $('#dis_sum').val();
		let family_planning = $('#family_planning').val();
		let com_midwife = $('#com_midwife').val();
		let health_visitor = $('#health_visitor').val();
		let baby_birth = $('#baby_birth').val();
		let leaflets = $('#leaflets').val();
		let emergency = $('#emergency').val();
		let discharged = $('#discharged').val();
		$.ajax({
			url:"http://192.168.1.23/Ark/Insert/dischargeChecklist.php",
			type:"POST",
			data:{
				"dischargeChecklist":1,
				"id":page_id,
				"exam":examination,
				"Rubella":rubella,
				"HEP":Hepatitis,
				"Baby":baby_vax,
				"Mothers_blood":mothers_blood,
				"mothers_anti_d":mother_antid,
				"request_form":attached,
				"mother_TTO":mothers_tto,
				"baby_tto":babies_tto,
				"tto_form":tto_color,
				"Vitamin":vit_k,
				"Vitamin_k":vit_oral,
				"tetra":tetra,
				"advice_given":advice,
				"drug_chart":drug_chart,
				"discharge":dis_details,
				"gp_details":gp_check,
				"newborn_discharge":newborn_dis,
				"Puerperium":puerperium,
				"discharge_summary":dis_sum,
				"Family":family_planning,
				"Community_midwife":com_midwife,
				"Health_visitor":health_visitor,
				"reg_num":baby_birth,
				"discussed_discharge":leaflets,
				"mothers_advise":emergency,
				"out_area": discharged,
				"midwife":Username,
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