$(function(){		
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_summaryLabour.php",
			type:"POST",
			data:{
				"summaryLabour":1,
				"id":page_id,
			},
			success: function(response){
				let change = JSON.parse(response);
				let rr = change[0];
				let name = $('#antenatal_diagnosis').val(rr.name);
				let Grav = $('#Gravida').val(rr.Grav);
				let para = $('#para').val(rr.para);
				let booked = $('#booked').val(rr.booked);
				let lab_spot = $('#induced').val(rr.lab_spot);
				let first = $('#first_stage').val(rr.first);
				let second = $('#second_stage').val(rr.second);
				let third = $('#third_stage').val(rr.third);
				let date1 = $('#first_date').val(rr.date1);
				let date2 = $('#second_date').val(rr.date2);
				let date3 = $('#third_date').val(rr.date3);
				let time1 = $('#first_time').val(rr.time1);
				let time2 = $('#second_time').val(rr.time2);
				let time3 = $('#third_time').val(rr.time3);
				let totaltime = $('#total_time').val(rr.totaltime);
				let hours1 = $('#first_hours').val(rr.hours1);
				let hours2 = $('#second_hours').val(rr.hours2);
				let hours3 = $('#third_hours').val(rr.hours3);
				let totalhours = $('#total_hours').val(rr.totalhours);
				let mins1 = $('#first_minutes').val(rr.mins1);
				let mins2 = $('#second_minutes').val(rr.mins2);
				let mins3 = $('#third_minutes').val(rr.mins3);
				let totalmins = $('#total_min').val(rr.totalmins);
				let art_date = $('#as_date').val(rr.art_date);
				let art_time = $('#as_time').val(rr.art_time);
				let arm_hours = $('#as_hours').val(rr.arm_hours);
				let arm_mins = $('#as_min').val(rr.arm_mins);
				let deliveredby = $('#del_by').val(rr.deliveredby);
				let supervisedby = $('#sup_by').val(rr.supervisedby);
				let episiotomy = $('#eld').val(rr.episiotomy);
				let repairedby = $('#rep_by').val(rr.repairedby);
				let sutures = $('#sultures').val(rr.sutures);
				let removedby = $('#rem_by').val(rr.removedby);
				let rdate = $('#rem_date').val(rr.rdate);
				let oxytocis = $('#ospm').val(rr.oxytocis);
				let if_repeated = $('#repeated').val(rr.if_repeated);
				let bloodloss = $('#ebl').val(rr.bloodloss);
				let blood_transfusion = $('#transfuse').val(rr.blood_transfusion);
				let origin = $('#origin').val(rr.origin);
				let sex = $('#sex').val(rr.sex);
				let weight = $('#weight').val(rr.weight);
				let length = $('#length').val(rr.length);
				let alive = $('#lfsb').val(rr.alive);
				let min_apgar = $('#apgar').val(rr.min_apgar);
				let head_circum = $('#head_cir').val(rr.head_circum);
				let cdn_birth = $('#cond_birth').val(rr.cdn_birth);
				let method_delivery = $('#meth_delivery').val(rr.method_delivery);
				let modweight = $('#weight_two').val(rr.modweight);
				let placenta = $('#placenta').val(rr.placenta);
				let membraines = $('#membrane').val(rr.membraines);
				let umblical_cord = $('#cord').val(rr.umblical_cord);
				let measured_blood = $('#mbl').val(rr.measured_blood);
				let condition_delivery = $('#cad').val(rr.condition_delivery);
				let BP_uterus = $('#uterus').val(rr.BP_uterus);
				let description = $('#treatment').val(rr.description);

			}

		});	
	});