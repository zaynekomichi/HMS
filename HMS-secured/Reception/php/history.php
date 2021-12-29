<script type="text/javascript">
  try{
      var remove = clearInterval(clear);
    }
    catch(err){
      var remove;
    }
</script>
<div id="container">
  <div align="center" id="f_text">
   <h2>View Appointment History</h2>
   <form  onsubmit="return f_results();">
     <button type="button" class="view_selection" onclick="to_name();">Name</button>
     <button type="button" class="view_selection" onclick="to_date();">Date</button>
   <input type="date" id="search">
   <button type = "submit" id="submit" >Search</button>
   <br>

   <div id="f-results">

   </div>
   </form
</div>
</div>
<script type="text/javascript">
function to_name(){
   $(document).ready(function(){
    $('#render').load('php/history_2.php');
   });
}

function to_date(){
  $(document).ready(function(){
    $('#render').load('php/history.php');
   });
}

function f_results() {
        // GET SEARCH TERM
        //var
        //var get_f_date = document.getElementById('f_date').val();

        var data = new FormData();
        data.append('search', document.getElementById("search").value);
        data.append('ajax', 1);

        // AJAX SEARCH REQUEST
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "http://192.168.1.23/Ark/Search/search_history.php", true);
        xhr.onload = function () {
          if (this.status==200) {
            var results = JSON.parse(this.response),
                wrapper = document.getElementById("f-results");
            wrapper.innerHTML = "";
            if (results.length > 0) {
              for(var res of results) {
            //  var line = document.createElement("table");
            var line = document.createElement("table");
              //line.innerHTML ="<span style='padding-top: 20px;border-top: 1px solid grey; padding-bottom:10px' class='get_date_id' data-id="+res['id']+" ><br>"+ res['title'] + " has an appointent on the "+res['start_date']+" at "+res['start_time']+"  "+"Phone Number: "+res['location']+"<br></span>";
            //   var line = document.createElement("table");

               line.innerHTML ="<tr data-id="+res['user_id']+" class='get_date_id'><td>"+res['name']+"</td><td>"+res['start_date']+"</td><td>"+res['start_time']+"</td><td>"+res['Reason']+"</td></tr>";

                wrapper.appendChild(line);
              }
            } else {
              wrapper.innerHTML = "No one is booked on this day found ";
            }
          } else {
            alert("ERROR LOADING FILE!");
          }
        };
        xhr.send(data);
        return false;
      }


      $(document).on('click', '.get_date_id', function(){
        page_id = $(this).data('id');
        $('#render').load('php/change_appointment.php');
      });

</script>
