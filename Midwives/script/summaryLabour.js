$(function(){
	$('#save_three').on('click', function(){
		let name = $('#antenatal_diagnosis').val();
		let Grav = $('#Gravida').val();
		let para = $('#para').val();
		let booked = $('#booked').val();
		let lab_spot = $('#induced').val();
		let first = $('#first_stage').val();
		let second = $('#second_stage').val();
		let third = $('#third_stage').val();
		let date1 = $('#first_date').val();
		let date2 = $('#second_date').val();
		let date3 = $('#third_date').val();
		let time1 = $('#first_time').val();
		let time2 = $('#second_time').val();
		let time3 = $('#third_time').val();
		let totaltime = $('#total_time').val();
		let hours1 = $('#first_hours').val();
		let hours2 = $('#second_hours').val();
		let hours3 = $('#third_hours').val();
		let totalhours = $('#total_hours').val();
		let mins1 = $('#first_minutes').val();
		let mins2 = $('#second_minutes').val();
		let mins3 = $('#third_minutes').val();
		let totalmins = $('#total_min').val();
		let art_date = $('#as_date').val();
		let art_time = $('#as_time').val();
		let arm_hours = $('#as_hours').val();
		let arm_mins = $('#as_min').val();
		let deliveredby = $('#del_by').val();
		let supervisedby = $('#sup_by').val();
		let episiotomy = $('#eld').val();
		let repairedby = $('#rep_by').val();
		let sutures = $('#sultures').val();
		let removedby = $('#rem_by').val();
		let rdate = $('#rem_date').val();
		let oxytocis = $('#ospm').val();
		let if_repeated = $('#repeated').val();
		let bloodloss = $('#ebl').val();
		let blood_transfusion = $('#transfuse').val();
		let origin = $('#origin').val();
		let sex = $('#sex').val();
		let weight = $('#weight').val();
		let length = $('#length').val();
		let alive = $('#lfsb').val();
		let min_apgar = $('#apgar').val();
		let head_circum = $('#head_cir').val();
		let cdn_birth = $('#cond_birth').val();
		let method_delivery = $('#meth_delivery').val();
		let modweight = $('#weight_two').val();
		let placenta = $('#placenta').val();
		let membraines = $('#membrane').val();
		let umblical_cord = $('#cord').val();
		let measured_blood = $('#mbl').val();
		let condition_delivery = $('#cad').val();
		let BP_uterus = $('#uterus').val();
		let description = $('#treatment').val();

		$.ajax({
			url:"http://192.168.18.246/Ark/Insert/summaryLabour.php",
			type:"POST",
			data:{
				"summaryLabour":1,
				"id":page_id,
				"name":name,
				"Grav":Grav,
				"para":para,
				"booked":booked,
				"lab_spot":lab_spot,
				"first":first,
				"second":second,
				"third":third,
				"date1":date1,
				"date2":date2,
				"date3":date3,
				"time1":time1,
				"time2":time2,
				"time3":time3,
				"totaltime":totaltime,
				"hours1":hours1,
				"hours2":hours2,
				"hours3":hours3,
				"totalhours":totalhours,
				"mins1":mins1,
				"mins2":mins2,
				"mins3":mins3,
				"totalmins":totalmins,
				"art_date":art_date,
				"art_time":art_time,
				"arm_hours":arm_hours,
				"arm_mins":arm_mins,
				"deliveredby":deliveredby,
				"supervisedby":supervisedby,
				"episiotomy":episiotomy,
				"repairedby":repairedby,
				"sutures":sutures,
				"removedby":removedby,
				"rdate":rdate,
				"oxytocis":oxytocis,
				"if_repeated":if_repeated,
				"bloodloss":bloodloss,
				"blood_transfusion":blood_transfusion,
				"origin":origin,
				"sex":sex,
				"weight":weight,
				"length":length,
				"alive":alive,
				"min_apgar":min_apgar,
				"head_circum":head_circum,
				"cdn_birth":cdn_birth,
				"method_delivery":method_delivery,
				"modweight":modweight,
				"placenta":placenta,
				"membraines":membraines,
				"umblical_cord":umblical_cord,
				"measured_blood":measured_blood,
				"condition_delivery":condition_delivery,
				"BP_uterus":BP_uterus,
				"description":description
			},
			success: function(response){
				if(response == 1){
					show_success();
				}else{
					show_error();
				}
			}

		})	;	
	});
});