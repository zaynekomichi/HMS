 $(function(){
	$('#save_four').on('click',function(){
		//date values
		let date_a = $('#date_a').val();
		let date_b = $('#date_b').val();
		let date_c = $('#date_c').val();
		let date_d = $('#date_d').val();

		//temp values
		let temp_a = $('#temp_a').val();
		let temp_b = $('#temp_b').val();
		let temp_c = $('#temp_c').val();
		let temp_d = $('#temp_d').val();

		//BP values
		let bp_a  = $('#bp_a').val();
		let bp_b = $('#bp_b').val();
		let bp_c = $('#bp_c').val();
		let bp_d = $('#bp_d').val();

		//HB values
		let hb_a = $('#hb_a').val();
		let hb_b = $('#hb_b').val();
		let hb_c = $('#hb_c').val();
		let hb_d = $('#hb_d').val();

		//Breast values
		let breast_a = $('#breast_a').val();
		let breast_b = $('#breast_b').val();
		let breast_c = $('#breast_c').val();
		let breast_d = $('#breast_d').val();

		//milk
		let milk_a = $('#milk_a').val();
		let milk_b = $('#milk_b').val();
		let milk_c = $('#milk_c').val();
		let milk_d = $('#milk_d').val();

		//crackled nipples
		let cn_a = $('#cn_a').val();
		let cn_b = $('#cn_b').val();
		let cn_c = $('#cn_c').val();
		let cn_d = $('#cn_d').val();

		//breasts_engorged
		let bn_a = $('#bn_a').val();
		let bn_b = $('#bn_b').val();
		let bn_c = $('#bn_c').val();
		let bn_d = $('#bn_d').val();

		//Breast abcess
		let abc_a = $('#abc_a').val();
		let abc_b = $('#abc_b').val();
		let abc_c = $('#abc_c').val();
		let abc_d = $('#abc_d').val();

		//EBF
		let ebf_a = $('#ebf_a').val();
		let ebf_b = $('#ebf_b').val();
		let ebf_c = $('#ebf_c').val();
		let ebf_d = $('#ebf_d').val();

		//Involution
		let invo_a = $('#invo_a').val();
		let invo_b = $('#invo_b').val();
		let invo_c = $('#invo_c').val();
		let invo_d = $('#invo_d').val();

		//Tenderness
		let tend_a = $('#tend_a').val();
		let tend_b = $('#tend_b').val();
		let tend_c = $('#tend_c').val();
		let tend_d = $('#tend_d').val();

		//Perineum
		let peri_a = $('#peri_a').val();
		let peri_b = $('#peri_b').val();
		let peri_c = $('#peri_c').val();
		let peri_d = $('#peri_d').val();

		//Epi or Tear Healing
		let epi_a = $('#epi_a').val();
		let epi_b = $('#epi_b').val();
		let epi_c = $('#epi_c').val();
		let epi_d = $('#epi_d').val();

		//Pus
		let pus_a = $('#pus_a').val();
		let pus_b = $('#pus_b').val();
		let pus_c = $('#pus_c').val();
		let pus_d = $('#pus_d').val();

		//Wound Gap
		let gap_a = $('#gap_a').val();
		let gap_b = $('#gap_b').val();
		let gap_c = $('#gap_c').val();
		let gap_d = $('#gap_d').val();

		//lochia
		let loch_a = $('#loch_a').val();
		let loch_b = $('#loch_b').val();
		let loch_c = $('#loch_c').val();
		let loch_d = $('#loch_d').val();

		//Bleeding
		let bleed_a = $('#bleed_a').val();
		let bleed_b = $('#bleed_b').val();
		let bleed_c = $('#bleed_c').val();
		let bleed_d = $('#bleed_d').val();

		//Calf Pain
		let calf_a = $('#calf_a').val();
		let calf_b = $('#calf_b').val();
		let calf_c = $('#calf_c').val();
		let calf_d = $('#calf_d').val();

		//Vericose Veins
		let vv_a = $('#vv_a').val();
		let vv_b = $('#vv_b').val();
		let vv_c = $('#vv_c').val();
		let vv_d = $('#vv_d').val();

		//Mental state
		let mental_a = $('#mental_a').val();
		let mental_b = $('#mental_b').val();
		let mental_c = $('#mental_c').val();
		let mental_d = $('#mental_d').val();

		//Danger signs (dpn)
		let dpn_a = $('#dpn_a').val();
		let dpn_b = $('#dpn_b').val();
		let dpn_c = $('#dpn_c').val();
		let dpn_d = $('#dpn_d').val();

		//Family Panning counselling
		let fpc_a = $('#fpc_a').val();
		let fpc_b = $('#fpc_b').val();
		let fpc_c = $('#fpc_c').val();
		let fpc_d = $('#fpc_d').val();

		//Contraceptives given
		let contra_a = $('#contra_a').val();
		let contra_b = $('#contra_b').val();
		let contra_c = $('#contra_c').val();
		let contra_d = $('#contra_d').val();

		//Counselling on infant feeding
		let cif_a = $('#cif_a').val();
		let cif_b = $('#cif_b').val();
		let cif_c = $('#cif_c').val();
		let cif_d = $('#cif_d').val();

		//Vitamin A given to mother
		let vam_a = $('#vam_a').val();
		let vam_b = $('#vam_b').val();
		let vam_c = $('#vam_c').val();
		let vam_d = $('#vam_d').val();

		//Ferrous/Folic Acid
		let ffa_a = $('#ffa_a').val();
		let ffa_b = $('#ffa_b').val();
		let ffa_c = $('#ffa_c').val();
		let ffa_d = $('#ffa_d').val();

		//Other Treatment
		let ot_a = $('#ot_a').val();
		let ot_b = $('#ot_b').val();
		let ot_c = $('#ot_c').val();
		let ot_d = $('#ot_d').val();

		//weight
		let weight_a = $('#weight_a').val();
		let weight_b = $('#weight_b').val();
		let weight_c = $('#weight_c').val();
		let weight_d = $('#weight_d').val();

		//Fever(temperature>38)
		let fever_a = $('#fever_a').val();
		let fever_b = $('#fever_b').val();
		let fever_c = $('#fever_c').val();
		let fever_d = $('#fever_d').val();

		//Baby Sucking Well
		let suck_a = $('#suck_a').val();
		let suck_b = $('#suck_b').val();
		let suck_c = $('#suck_c').val();
		let suck_d = $('#suck_d').val();

		//Breathing
		let breath_a = $('#breath_a').val();
		let breath_b = $('#breath_b').val();
		let breath_c = $('#breath_c').val();
		let breath_d = $('#breath_d').val();

		//Umbilical cord
		let cord_a = $('#cord_a').val();
		let cord_b = $('#cord_b').val();
		let cord_c = $('#cord_c').val();
		let cord_d = $('#cord_d').val();

		//Passing stool normally
		let psn_a = $('#psn_a').val();
		let psn_b = $('#psn_b').val();
		let psn_c = $('#psn_c').val();
		let psn_d = $('#psn_d').val();

		//Passing Urine Normally
		let pun_a = $('#pun_a').val();
		let pun_b = $('#pun_b').val();
		let pun_c = $('#pun_c').val();
		let pun_d = $('#pun_d').val();

		//Vaccinations BCG
		let bcg_a = $('#bcg_a').val();
		let bcg_b = $('#bcg_b').val();
		let bcg_c = $('#bcg_c').val();
		let bcg_d = $('#bcg_d').val();

		//Cotrimoxazole Prophylaxis
		let cp_a = $('#cp_a').val();
		let cp_b = $('#cp_b').val();
		let cp_c = $('#cp_c').val();
		let cp_d = $('#cp_d').val();

		//NVP/ART(specify)
		let nvp_a = $('#nvp_a').val();
		let nvp_b = $('#nvp_b').val();
		let nvp_c = $('#nvp_c').val();
		let nvp_d = $('#nvp_d').val();

		$.ajax({
			url:"http://192.168.1.23/Ark/Insert/postCheckup.php",
			type:"POST",
			data:{
				"postCheckup":1,
				"id":page_id,
		        "date_1":date_a,
				"date_2":date_b,
				"date_3":date_c,
		        "date_4":date_d,
		        "temperature":temp_a,
				"temperature1":temp_b,
		        "temperature2":temp_c,
		        "temperature3":temp_d,
				"BP":bp_a,
		        "BP1":bp_b,
		        "BP2":bp_c,
				"BP3":bp_d,
		        "Hb":hb_a,
		        "Hb1":hb_b,
				"Hb2":hb_c,
		        "Hb3":hb_d,
		        "breast_feeding":breast_a,
				"breast_feeding1":breast_b,
		        "breast_feeding2":breast_c,
		        "breast_feeding3":breast_d,
				"milk":milk_a,
		        "milk1":milk_b,
		        "milk2":milk_c,
				"milk3":milk_d,
		        "nipples":cn_a,
		        "nipples1":cn_b,
				"nipples2":cn_c,
		        "nipples3":cn_d,
		        "breast_engorged":bn_a,
				"breast_engorged1":bn_b,
		        "breast_engorged2":bn_c,
		        "breast_engorged3":bn_d,
				"breast_abscess":abc_a,
		        "breast_abscess1":abc_b,
		        "breast_abscess2":abc_c,
				"breast_abscess3":abc_d,
		        "ebf":ebf_a,
		        "ebf1":ebf_b,
				"ebf2":ebf_c,
		        "ebf3":ebf_d,
		        "involutio":invo_a,
				"involutio1":invo_b,
		        "involutio2":invo_c,
		        "involutio3":invo_d,
				"tenderness":tend_a,
		        "tenderness1":tend_b,
		        "tenderness2":tend_c,
				"tenderness3":tend_d,
		        "perineum":peri_a,
		        "perineum1":peri_b,
				"perineum2":peri_c,
		        "perineum3":peri_d,
		        "epi_tear":epi_a,
				"epi_tear1":epi_b,
		        "epi_tear2":epi_c,
		        "epi_tear3":epi_d,
				"pus":pus_a,
		        "pus1":pus_b,
		        "pus2":pus_c,
				"pus3":pus_d,
		        "wound_gaping":gap_a,
		        "wound_gaping1":gap_b,
				"wound_gaping2":gap_c,
		        "wound_gaping3":gap_d,
		        "lochia":loch_a,
				"lochia1":loch_b,
		        "lochia2":loch_c,
		        "lochia3":loch_d,
				"calf_pain":calf_a,
		        "calf_pain1":calf_b,
		        "calf_pain2":calf_c,
				"calf_pain3":calf_d,
		        "varicose":vv_a,
		        "varicose1":vv_b,
				"varicose2":vv_c,
		        "varicose3":vv_d,
		        "mental_state":mental_a,
				"mental_state1":mental_b,
		        "mental_state2":mental_c,
		        "mental_state3":mental_d,
				"signs_peurperium":dpn_a,
		        "signs_peurperium1":dpn_b,
		        "signs_peurperium2":dpn_c,
				"signs_peurperium3":dpn_d,
		        "Counselling":fpc_a,
		        "Counselling1":fpc_b,
				"Counselling2":fpc_c,
		        "Counselling3":fpc_d,
		        "Contraceptives":contra_a,
				"Contraceptives1":contra_b,
		        "Contraceptives2":contra_c,
		        "Contraceptives3":contra_d,
				"infant_feeding":cif_a,
		        "infant_feeding1":cif_b,
		        "infant_feeding2":cif_c,
				"infant_feeding3":cif_d,
		        "vitamin_A":vam_a,
		        "vitamin_A1":vam_b,
				"vitamin_A2":vam_c,
		        "vitamin_A3":vam_d,
		        "folic_acid":ffa_a,
				"folic_acid1":ffa_b,
		        "folic_acid2":ffa_c,
		        "folic_acid3":ffa_d,
				"treatment":ot_a,
		        "treatment1":ot_b,
		        "treatment2":ot_c,
				"treatment3":ot_d,
		        "Weight":weight_a,
		        "Weight1":weight_b,
				"Weight2":weight_c,
		        "Weight3":weight_d,
		        "fever":fever_a,
				"fever1":fever_b,
		        "fever2":fever_c,
		        "fever3":fever_d,
				"baby_sucking":suck_a,
		        "baby_sucking1":suck_b,
		        "baby_sucking2":suck_c,
				"baby_sucking3":suck_d,
		        "breathing":breath_a,
		        "breathing1":breath_b,
				"breathing2":breath_c,
		        "breathing3":breath_d,
		        "umbilical_cord":cord_a,
				"umbilical_cord1":cord_b,
		        "umbilical_cord2":cord_c,
		        "umbilical_cord3":cord_d,
				"stool":psn_a,
		        "stool1":psn_b,
		        "stool2":psn_c,
				"stool3":psn_d,
		        "urine":pun_a,
		        "urine1":pun_b,
				"urine2":pun_c,
		        "urine3":pun_d,
		        "vaccinations":bcg_a,
				"vaccinations1":bcg_b,
		        "vaccinations2":bcg_c,
		        "vaccinations3":bcg_d,
				"Contrimoxazole_Prophylaxis":cp_a,
		        "Contrimoxazole_Prophylaxis1":cp_b,
		        "Contrimoxazole_Prophylaxis2":cp_c,
				"Contrimoxazole_Prophylaxis3":cp_d,
		        "NVP_ART":nvp_a,
		        "NVP_ART1":nvp_b,
				"NVP_ART2":nvp_c,
		        "NVP_ART3":nvp_d,
		        "bleed_a":bleed_a,
		        "bleed_b":bleed_b,
		        "bleed_c":bleed_c,
		        "bleed_d":bleed_d
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