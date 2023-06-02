<div id="container">
	<div id="third_session">
		<div id="gen_history">
			<div class="gen_cards">
				<span>Is there anyone in the family with learning difficulties</span>
				<input type="text" readonly class="third_select" id="learn_dis">
			</div>
			<div class="gen_cards">
				<span>Is there a family of muscular dystrophy</span>
				<input type="text" readonly class="third_select" id="mus_distrophy">
			</div>
			<div class="gen_cards">
				<span>Is there a family History of cystic fibrosis</span>
				<input type="text" readonly class="third_select" id="fibroids">
			</div>
			<div class="gen_cards">
				<span>Medical condition which may affect baby from both the parents families</span>
				<input type="text" readonly class="third_select" id="inherit">
			</div>
			<div class="gen_cards">
				<span>Are you related to your partner:</span>
				<input type="text" readonly class="third_select" id="related">
			</div>
			<div class="gen_cards">
				<span>family History of infant death,still birth or neonatal death or recurrent miscarriages(3 or more)</span>
				<input type="text" readonly class="third_select" id="miscarriage">
			</div>
			<div id="tick_div" align="center">
				<img class="tick" id="approval_tick" src="css/img/approve.png" alt="">
			</div>
		</div>
		<div id="button_div" align="center">
			<button id="save_info">Save</button>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(function(){
		$.ajax({
			url:"http:192.168.18.246/Ark/Lists/get_genetic.php",
			type:"POST",
			data:{
				"get_genetic":1,
				"user_id":page_id
			},
			success: function(response){
				let parse = JSON.parse(response);
				let rr= parse[0];
				$('#learn_dis').attr("value",rr.gen_1);
				$('#mus_distrophy').attr("value",rr.gen_2);
				$('#fibroids').attr("value",rr.gen_3);
				$('#inherit').attr("value",rr.gen_4);
				$('#related').attr("value",rr.gen_5);
				$('#miscarriage').attr("value",rr.gen_6);
		}

	});
});

</script>