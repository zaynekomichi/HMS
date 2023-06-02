
<div id="container">
  <div align="center" id="f_text">
   <h2>Select Day You want to View</h2>
   <form  onsubmit="return f_results();">
     <button type="button" class="view_selection" onclick="to_name();">Name</button>
     <button type="button" class="view_selection" onclick="to_date();">Date</button>
   <input type="date" id="search">
   <button type = "submit" id="submit" >Search</button>
   <br>

   <div id="f-results">

   </div>
   </form>
  </div>
</div>
<script type="text/javascript">
function to_name(){
  let change_name = document.getElementById('search').type ="text";
}

function to_date(){
  let change_date = document.getElementById('search').type="date";
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
        xhr.open('POST', "http://192.168.18.246/Ark/Search/search_future.php", true);
        xhr.onload = function () {
          if (this.status==200) {
            var results = JSON.parse(this.response),
                wrapper = document.getElementById("f-results");
            wrapper.innerHTML = "";
            if (results.length > 0) {
              for(var res of results) {
            var line = document.createElement("table");
               line.innerHTML =`<tr data-id=${res['id']} class='get_date_id'><td>${res['start_time']}</td><td>${res['start_date']}</td><td>${res['First_Name']}</td><td>${res['Phone_Number']}</td><td>${res['Gestation']}</td><td>${res['Reason']}</td></tr>`;

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
</script>
