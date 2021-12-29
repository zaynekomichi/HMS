 $(function(){
	
		
		$.ajax({
			url:"http://192.168.1.23/Ark/Lists/get_postCheckup.php",
			type:"POST",
			data:{
				"postCheckup":1,
				"id":page_id,
		    
			},
			success: function(response){
				let change = JSON.parse(response);
				let rr = change[0];
				//date values
				let date_a = $('#date_a').val(rr.date_1);
				let date_b = $('#date_b').val(rr.date_2);
				let date_c = $('#date_c').val(rr.date_3);
				let date_d = $('#date_d').val(rr.date_4);

				//temp values
				let temp_a = $('#temp_a').val(rr.temperature);
				let temp_b = $('#temp_b').val(rr.temperature1);
				let temp_c = $('#temp_c').val(rr.temperature2);
				let temp_d = $('#temp_d').val(rr.temperature3);

				//BP values
				let bp_a  = $('#bp_a').val(rr.BP);
				let bp_b = $('#bp_b').val(rr.BP1);
				let bp_c = $('#bp_c').val(rr.BP2);
				let bp_d = $('#bp_d').val(rr.BP3);

				//HB values
				let hb_a = $('#hb_a').val(rr.Hb);
				let hb_b = $('#hb_b').val(rr.Hb1);
				let hb_c = $('#hb_c').val(rr.Hb2);
				let hb_d = $('#hb_d').val(rr.Hb3);

				//Breast values
				let breast_a = $('#breast_a').val(rr.breast_feeding);
				let breast_b = $('#breast_b').val(rr.breast_feeding1);
				let breast_c = $('#breast_c').val(rr.breast_feeding2);
				let breast_d = $('#breast_d').val(rr.breast_feeding3);

				//milk
				let milk_a = $('#milk_a').val(rr.milk);
				let milk_b = $('#milk_b').val(rr.milk1);
				let milk_c = $('#milk_c').val(rr.milk2);
				let milk_d = $('#milk_d').val(rr.milk3);

				//crackled nipples
				let cn_a = $('#cn_a').val(rr.nipples);
				let cn_b = $('#cn_b').val(rr.nipples1);
				let cn_c = $('#cn_c').val(rr.nipples2);
				let cn_d = $('#cn_d').val(rr.nipples3);

				//breasts_engorged
				let bn_a = $('#bn_a').val(rr.breast_engorged);
				let bn_b = $('#bn_b').val(rr.breast_engorged1);
				let bn_c = $('#bn_c').val(rr.breast_engorged2);
				let bn_d = $('#bn_d').val(rr.breast_engorged3);

				//Breast abcess
				let abc_a = $('#abc_a').val(rr.breast_abscess);
				let abc_b = $('#abc_b').val(rr.breast_abscess1);
				let abc_c = $('#abc_c').val(rr.breast_abscess2);
				let abc_d = $('#abc_d').val(rr.breast_abscess3);

				//EBF
				let ebf_a = $('#ebf_a').val(rr.ebf);
				let ebf_b = $('#ebf_b').val(rr.ebf1);
				let ebf_c = $('#ebf_c').val(rr.ebf2);
				let ebf_d = $('#ebf_d').val(rr.ebf3);

				//Involution
				let invo_a = $('#invo_a').val(rr.involutio);
				let invo_b = $('#invo_b').val(rr.involutio1);
				let invo_c = $('#invo_c').val(rr.involutio2);
				let invo_d = $('#invo_d').val(rr.involutio3);

				//Tenderness
				let tend_a = $('#tend_a').val(rr.tenderness);
				let tend_b = $('#tend_b').val(rr.tenderness1);
				let tend_c = $('#tend_c').val(rr.tenderness2);
				let tend_d = $('#tend_d').val(rr.tenderness3);

				//Perineum
				let peri_a = $('#peri_a').val(rr.perineum);
				let peri_b = $('#peri_b').val(rr.perineum1);
				let peri_c = $('#peri_c').val(rr.perineum2);
				let peri_d = $('#peri_d').val(rr.perineum3);

				//Epi or Tear Healing
				let epi_a = $('#epi_a').val(rr.epi_tear);
				let epi_b = $('#epi_b').val(rr.epi_tear1);
				let epi_c = $('#epi_c').val(rr.epi_tear2);
				let epi_d = $('#epi_d').val(rr.epi_tear3);

				//Pus
				let pus_a = $('#pus_a').val(rr.pus);
				let pus_b = $('#pus_b').val(rr.pus1);
				let pus_c = $('#pus_c').val(rr.pus2);
				let pus_d = $('#pus_d').val(rr.pus3);

				//Wound Gap
				let gap_a = $('#gap_a').val(rr.wound_gaping);
				let gap_b = $('#gap_b').val(rr.wound_gaping1);
				let gap_c = $('#gap_c').val(rr.wound_gaping2);
				let gap_d = $('#gap_d').val(rr.wound_gaping3);

				//lochia
				let loch_a = $('#loch_a').val(rr.lochia);
				let loch_b = $('#loch_b').val(rr.lochia1);
				let loch_c = $('#loch_c').val(rr.lochia3);
				let loch_d = $('#loch_d').val(rr.lochia3);

				//Bleeding
				let bleed_a = $('#bleed_a').val(rr.bleed_a);
				let bleed_b = $('#bleed_b').val(rr.bleed_b);
				let bleed_c = $('#bleed_c').val(rr.bleed_c);
				let bleed_d = $('#bleed_d').val(rr.bleed_d);

				//Calf Pain
				let calf_a = $('#calf_a').val(rr.calf_pain);
				let calf_b = $('#calf_b').val(rr.calf_pain1);
				let calf_c = $('#calf_c').val(rr.calf_pain2);
				let calf_d = $('#calf_d').val(rr.calf_pain3);

				//Vericose Veins
				let vv_a = $('#vv_a').val(rr.varicose);
				let vv_b = $('#vv_b').val(rr.varicose1);
				let vv_c = $('#vv_c').val(rr.varicose2);
				let vv_d = $('#vv_d').val(rr.varicose2);

				//Mental state
				let mental_a = $('#mental_a').val(rr.mental_state);
				let mental_b = $('#mental_b').val(rr.mental_state1);
				let mental_c = $('#mental_c').val(rr.mental_state2);
				let mental_d = $('#mental_d').val(rr.mental_state3);

				//Danger signs (dpn)
				let dpn_a = $('#dpn_a').val(rr.signs_peurperium);
				let dpn_b = $('#dpn_b').val(rr.signs_peurperium1);
				let dpn_c = $('#dpn_c').val(rr.signs_peurperium2);
				let dpn_d = $('#dpn_d').val(rr.signs_peurperium3);

				//Family Panning counselling
				let fpc_a = $('#fpc_a').val(rr.Counselling);
				let fpc_b = $('#fpc_b').val(rr.Counselling1);
				let fpc_c = $('#fpc_c').val(rr.Counselling2);
				let fpc_d = $('#fpc_d').val(rr.Counselling3);

				//Contraceptives given
				let contra_a = $('#contra_a').val(rr.Contraceptives);
				let contra_b = $('#contra_b').val(rr.Contraceptives1);
				let contra_c = $('#contra_c').val(rr.Contraceptives2);
				let contra_d = $('#contra_d').val(rr.Contraceptives3);

				//Counselling on infant feeding
				let cif_a = $('#cif_a').val(rr.infant_feeding);
				let cif_b = $('#cif_b').val(rr.infant_feeding1);
				let cif_c = $('#cif_c').val(rr.infant_feeding2);
				let cif_d = $('#cif_d').val(rr.infant_feeding3);

				//Vitamin A given to mother
				let vam_a = $('#vam_a').val(rr.vitamin_A);
				let vam_b = $('#vam_b').val(rr.vitamin_A1);
				let vam_c = $('#vam_c').val(rr.vitamin_A2);
				let vam_d = $('#vam_d').val(rr.vitamin_A3);

				//Ferrous/Folic Acid
				let ffa_a = $('#ffa_a').val(rr.folic_acid);
				let ffa_b = $('#ffa_b').val(rr.folic_acid1);
				let ffa_c = $('#ffa_c').val(rr.folic_acid2);
				let ffa_d = $('#ffa_d').val(rr.folic_acid3);

				//Other Treatment
				let ot_a = $('#ot_a').val(rr.treatment);
				let ot_b = $('#ot_b').val(rr.treatment1);
				let ot_c = $('#ot_c').val(rr.treatment2);
				let ot_d = $('#ot_d').val(rr.treatment3);

				//weight
				let weight_a = $('#weight_a').val(rr.Weight);
				let weight_b = $('#weight_b').val(rr.Weight1);
				let weight_c = $('#weight_c').val(rr.Weight2);
				let weight_d = $('#weight_d').val(rr.Weight3);

				//Fever(temperature>38)
				let fever_a = $('#fever_a').val(rr.fever);
				let fever_b = $('#fever_b').val(rr.fever1);
				let fever_c = $('#fever_c').val(rr.fever2);
				let fever_d = $('#fever_d').val(rr.fever3);

				//Baby Sucking Well
				let suck_a = $('#suck_a').val(rr.baby_sucking);
				let suck_b = $('#suck_b').val(rr.baby_sucking1);
				let suck_c = $('#suck_c').val(rr.baby_sucking2);
				let suck_d = $('#suck_d').val(rr.baby_sucking3);

				//Breathing
				let breath_a = $('#breath_a').val(rr.breathing);
				let breath_b = $('#breath_b').val(rr.breathing1);
				let breath_c = $('#breath_c').val(rr.breathing2);
				let breath_d = $('#breath_d').val(rr.breathing3);

				//Umbilical cord
				let cord_a = $('#cord_a').val(rr.umbilical_cord);
				let cord_b = $('#cord_b').val(rr.umbilical_cord1);
				let cord_c = $('#cord_c').val(rr.umbilical_cord2);
				let cord_d = $('#cord_d').val(rr.umbilical_cord3);

				//Passing stool normally
				let psn_a = $('#psn_a').val(rr.stool);
				let psn_b = $('#psn_b').val(rr.stool1);
				let psn_c = $('#psn_c').val(rr.stool2);
				let psn_d = $('#psn_d').val(rr.stool3);

				//Passing Urine Normally
				let pun_a = $('#pun_a').val(rr.urine);
				let pun_b = $('#pun_b').val(rr.urine1);
				let pun_c = $('#pun_c').val(rr.urine2);
				let pun_d = $('#pun_d').val(rr.urine3);

				//Vaccinations BCG
				let bcg_a = $('#bcg_a').val(rr.vaccinations);
				let bcg_b = $('#bcg_b').val(rr.vaccinations1);
				let bcg_c = $('#bcg_c').val(rr.vaccinations2);
				let bcg_d = $('#bcg_d').val(rr.vaccinations3);

				//Cotrimoxazole Prophylaxis
				let cp_a = $('#cp_a').val(rr.Contrimoxazole_Prophylaxis);
				let cp_b = $('#cp_b').val(rr.Contrimoxazole_Prophylaxis1);
				let cp_c = $('#cp_c').val(rr.Contrimoxazole_Prophylaxis2);
				let cp_d = $('#cp_d').val(rr.Contrimoxazole_Prophylaxis3);

				//NVP/ART(specify)
				let nvp_a = $('#nvp_a').val(rr.NVP_ART);
				let nvp_b = $('#nvp_b').val(rr.NVP_ART1);
				let nvp_c = $('#nvp_c').val(rr.NVP_ART2);
				let nvp_d = $('#nvp_d').val(rr.NVP_ART3);

						
			}	
		});
	});