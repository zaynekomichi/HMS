$(function(){
  $('#close_search').on('click',function(){
     var x = document.getElementById('close_search');
     var r = document.getElementById('results');
     x.style.display = 'none';
     r.style.display = 'none';
  });
});
function fetch_booking_info() {
        // GET SEARCH TERM
				$(document).ready(function(){
					var sl = document.getElementById('search');
					if($('#search') == ''){
             console.log('empty');
					}else{
					$('#search').keyup(function(){
						 var close_btn = document.getElementById('close_search');
        var res_box = document.getElementById('results');
        res_box.style.display = 'block';
        close_btn.style.display = 'block';
        var data = new FormData();
        data.append('search', document.getElementById("search").value);
        data.append('ajax', 1);

        // AJAX SEARCH REQUEST
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://192.168.18.246/Ark/Search/anc_search.php", true);
        xhr.onload = function () {
          if (this.status==200) {
            var results = JSON.parse(this.response),
                wrapper = document.getElementById("results");
            wrapper.innerHTML = "";
            if (results.length > 0) {
              for(var res of results) {
              	 var line = document.createElement("table");
                line.innerHTML ="<tr class='data_list' data-id="+res['id']+"><td> Start medical booking for "+res['First_Name'] + " </td></tr>";
               
               wrapper.appendChild(line);
              }
            } else {
              wrapper.innerHTML = "<span style='width: 700px; padding: 10px; margin-left: 300px;margin-right:300px;'><td>No results found <a id='change_cursor' onclick='add_booking();'>New Booking</a><span>";
            }
          } else {
            alert("ERROR LOADING FILE!");
          }
        };
        xhr.send(data);
        return false;

			});
		}
		});
  }



//check if everything is ok 

