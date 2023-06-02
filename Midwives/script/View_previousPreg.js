$(function(){
		$.ajax({
			url:"http://192.168.18.246/Ark/Lists/get_previousPreg.php",
			type:"POST",
			data:{
				"previousPreg":1,
				"id":page_id,
			
			},
			success: function(response){
				let change = JSON.parse(response);
				let rr = change[0];
				let date_of_birth = $('#date_a').val(rr.date_of_birth);
				let place_dil = $('#pod_a').val(rr.place_dil);
				let gest = $('#ges_a').val(rr.gest);
				let preg = $('#preg_a').val(rr.preg); 
				let labour = $('#lab_a').val(rr.labour);
				let type_deli = $('#tod_a').val(rr.type_deli);
				let sex = $('#sex_a').val(rr.sex);
				let name = $('#name_a').val(rr.name);
				let analgesia = $('#anal_a').val(rr.analgesia);
				let birth_weight = $('#birth_a').val(rr.birth_weight);
				let postna = $('#pp_a').val(rr.postna);
				let feeding = $('#fph_a').val(rr.feeding);

				let date_of_birth_1 = $('#date_b').val(rr.date_of_birth_1);
				let place_dil_1 = $('#pod_b').val(rr.place_dil_1);
				let gest_1 = $('#ges_b').val(rr.gest_1);
				let preg_1 = $('#preg_b').val(rr.preg_1); 
				let labour_1 = $('#lab_b').val(rr.labour_1);
				let type_deli_1 = $('#tod_b').val(rr.type_deli_1);
				let sex_1 = $('#sex_b').val(rr.sex_1);
				let name_1 = $('#name_b').val(rr.name_1);
				let analgesia_1 = $('#anal_b').val(rr.analgesia_1);
				let birth_weight_1 = $('#birth_b').val(rr.birth_weight_1);
				let postna_1 = $('#pp_b').val(rr.postna_1);
				let feeding_1 = $('#fph_b').val(rr.feeding_1);

				let date_of_birth_2 = $('#date_c').val(rr.date_of_birth_2);
				let place_dil_2 = $('#pod_c').val(rr.place_dil_2);
				let gest_2 = $('#ges_c').val(rr.gest_2);
				let preg_2 = $('#preg_c').val(rr.preg_2); 
				let labour_2 = $('#lab_c').val(rr.labour_2);
				let type_deli_2 = $('#tod_c').val(rr.type_deli_2);
				let sex_2 = $('#sex_c').val(rr.sex_2);
				let name_2 = $('#name_c').val(rr.name_2);
				let analgesia_2 = $('#anal_c').val(rr.analgesia_2);
				let birth_weight_2 = $('#birth_c').val(rr.birth_weight_2);
				let postna_2 = $('#pp_c').val(rr.postna_2);
				let feeding_2 = $('#fph_c').val(rr.feeding_2);

				let date_of_birth_3 = $('#date_d').val(rr.date_of_birth_3);
				let place_dil_3 = $('#pod_d').val(rr.place_dil_3);
				let gest_3 = $('#ges_d').val(rr.gest_3);
				let preg_3 = $('#preg_d').val(rr.preg_3); 
				let labour_3 = $('#lab_d').val(rr.labour_3);
				let type_deli_3 = $('#tod_d').val(rr.type_deli_3);
				let sex_3 = $('#sex_d').val(rr.sex_3);
				let name_3 = $('#name_d').val(rr.name_3);
				let analgesia_3 = $('#anal_d').val(rr.analgesia_3);
				let birth_weight_3 = $('#birth_d').val(rr.birth_weight_3);
				let postna_3 = $('#pp_d').val(rr.postna_3);
				let feeding_3 = $('#fph_d').val(rr.feeding_3);

				let date_of_birth_4 = $('#date_e').val(rr.date_of_birth_4);
				let place_dil_4 = $('#pod_e').val(rr.place_dil_4);
				let gest_4 = $('#ges_e').val(rr.gest_4);
				let preg_4 = $('#preg_e').val(rr.preg_4); 
				let labour_4 = $('#lab_e').val(rr.labour_4);
				let type_deli_4 = $('#tod_e').val(rr.type_deli_4);
				let sex_4 = $('#sex_e').val(rr.sex_4);
				let name_4 = $('#name_e').val(rr.name_4);
				let analgesia_4 = $('#anal_e').val(rr.analgesia_4);
				let birth_weight_4 = $('#birth_e').val(rr.birth_weight_4);
				let postna_4 = $('#pp_e').val(rr.postna_4);
				let feeding_4 = $('#fph_e').val(rr.feeding_4);

				let date_of_birth_5 = $('#date_f').val(rr.date_of_birth_5);
				let place_dil_5 = $('#pod_f').val(rr.place_dil_5);
				let gest_5 = $('#ges_f').val(rr.gest_5);
				let preg_5 = $('#preg_f').val(rr.preg_5); 
				let labour_5 = $('#lab_f').val(rr.labour_5);
				let type_deli_5 = $('#tod_f').val(rr.type_deli_5);
				let sex_5 = $('#sex_f').val(rr.sex_5);
				let name_5 = $('#name_f').val(rr.name_5);
				let analgesia_5 = $('#anal_f').val(rr.analgesia_5);
				let birth_weight_5 = $('#birth_f').val(rr.birth_weight_5);
				let postna_5 = $('#pp_f').val(rr.postna_5);
				let feeding_5 = $('#fph_f').val(rr.feeding_5);

				let date_of_birth_6 = $('#date_g').val(rr.date_of_birth_6);
				let place_dil_6 = $('#pod_g').val(rr.place_dil_6);
				let gest_6 = $('#ges_g').val(rr.gest_6);
				let preg_6 = $('#preg_g').val(rr.preg_6); 
				let labour_6 = $('#lab_g').val(rr.labour_6);
				let type_deli_6 = $('#tod_g').val(rr.type_deli_6);
				let sex_6 = $('#sex_g').val(rr.sex_6);
				let name_6 = $('#name_g').val(rr.name_6);
				let analgesia_6 = $('#anal_g').val(rr.analgesia_6);
				let birth_weight_6 = $('#birth_g').val(rr.birth_weight_6);
				let postna_6 = $('#pp_g').val(rr.postna_6);
				let feeding_6 = $('#fph_g').val(rr.feeding_6);

				let date_of_birth_7 = $('#date_h').val(rr.date_of_birth_7);
				let place_dil_7 = $('#pod_h').val(rr.place_dil_7);
				let gest_7 = $('#ges_h').val(rr.gest_7);
				let preg_7 = $('#preg_h').val(rr.preg_7); 
				let labour_7 = $('#lab_h').val(rr.labour_7);
				let type_deli_7 = $('#tod_h').val(rr.type_deli_7);
				let sex_7 = $('#sex_h').val(rr.sex_7);
				let name_7 = $('#name_h').val(rr.name_7);
				let analgesia_7 = $('#anal_h').val(rr.analgesia_7);
				let birth_weight_7 = $('#birth_h').val(rr.birth_weight_7);
				let postna_7 = $('#pp_h').val(rr.postna_7);
				let feeding_7 = $('#fph_h').val(rr.feeding_7);

				let date_of_birth_8 = $('#date_i').val(rr.date_of_birth_8);
				let place_dil_8 = $('#pod_i').val(rr.place_dil_8);
				let gest_8 = $('#ges_i').val(rr.gest_8);
				let preg_8 = $('#preg_i').val(rr.preg_8); 
				let labour_8 = $('#lab_i').val(rr.labour_8);
				let type_deli_8 = $('#tod_i').val(rr.type_deli_8);
				let sex_8 = $('#sex_i').val(rr.sex_8);
				let name_8 = $('#name_i').val(rr.name_8);
				let analgesia_8 = $('#anal_i').val(rr.analgesia_8);
				let birth_weight_8 = $('#birth_i').val(rr.birth_weight_8);
				let postna_8 = $('#pp_i').val(rr.postna_8);
				let feeding_8 = $('#fph_i').val(rr.feeding_8);

				let date_of_birth_9 = $('#date_j').val(rr.date_of_birth_9);
				let place_dil_9 = $('#pod_j').val(rr.place_dil_9);
				let gest_9 = $('#ges_j').val(rr.gest_9);
				let preg_9 = $('#preg_j').val(rr.preg_9); 
				let labour_9 = $('#lab_j').val(rr.labour_9);
				let type_deli_9 = $('#tod_j').val(rr.type_deli_9);
				let sex_9 = $('#sex_j').val(rr.sex_9);
				let name_9 = $('#name_j').val(rr.name_9);
				let analgesia_9 = $('#anal_j').val(rr.analgesia_9);
				let birth_weight_9 = $('#birth_j').val(rr.birth_weight_9);
				let postna_9 = $('#pp_j').val(rr.postna_9);
				let feeding_9 = $('#fph_j').val(rr.feeding_9);

				let date_of_birth_10 = $('#date_k').val(rr.date_of_birth_10);
				let place_dil_10 = $('#pod_k').val(rr.place_dil_10);
				let gest_10 = $('#ges_k').val(rr.gest_10);
				let preg_10 = $('#preg_k').val(rr.preg_10); 
				let labour_10 = $('#lab_k').val(rr.labour_10);
				let type_deli_10 = $('#tod_k').val(rr.type_deli_10);
				let sex_10 = $('#sex_k').val(rr.sex_10);
				let name_10 = $('#name_k').val(rr.name_10);
				let analgesia_10 = $('#anal_k').val(rr.analgesia_10);
				let birth_weight_10 = $('#birth_k').val(rr.birth_weight_10);
				let postna_10 = $('#pp_k').val(rr.postna_10);
				let feeding_10 = $('#fph_k').val(rr.feeding_10);

			}
		});
	});