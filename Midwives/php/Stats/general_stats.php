<div id="container">
    <div align="center" class="flex-options">
        <img id="go_back" src="css/img/previous.png" class="icon-nav-one"  style="right: 18%;">
        <h1>Patient Stats</h1>
        <p></p>
    </div>
    <div class="flex_graphs">
        <div class="graph_cards">
            <canvas id="myChart" class="charts"></canvas>
        </div>
        <div class="graph_cards">
            <canvas id="WeightChart" class="charts"></canvas>
        </div>
    </div>
</div>
<script type="text/javascript" src="script/charts.js"></script>
<script type="text/javascript">
    var array_map_date;
    var array_map_temp;
    var array_map_weight;
   
    $.ajax({
        url:"http://192.168.18.246/Ark/Lists/get_chart_data.php",
        type:"POST",
        data:{
            "get_stats":1,
            "user_id":page_id,
        },
        success: function(response){
            let data_stats = JSON.parse(response);
             array_map_date = data_stats.map(data_stats =>data_stats.start_date);
             array_map_temp = data_stats.map(data_stats =>data_stats.Temperature);
             array_map_weight = data_stats.map(data_stats =>data_stats.Weight);
            graphs();

        }
    });
</script>
<script>
function graphs(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: array_map_date,
            datasets: [{
                label: 'Temperature Stats',
                data: array_map_temp,
                backgroundColor: [
                  '#00e8ff94'
                ],
                borderColor: [
                    '#ff3b00c4'
                ],
                borderWidth: 1
            }]
        },
        options: {
           scales: {
              x: {

                  grid:{
                   display:false
                       }
                 },
              y: 
                 {
                    beginAtZero:false,
               grid:{
                display:false
                    }
                 }
                     }
        }
    });
     var weight = document.getElementById('WeightChart').getContext('2d');
    var weightChart = new Chart(weight, {
        type: 'bar',
        data: {
            labels: array_map_date,
            datasets: [{
                label: 'Weight Stats',
                data: array_map_weight,
                backgroundColor: [
                    '#00aeff'
                ],
                borderColor: [
                    '#00aeff'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
              x: {
                  grid:{
                   display:false
                       }
                 },
              y: 
                 {
               grid:{
                display:false
                    }
                 }
                     }
        }
    });
}
</script>
<script type="text/javascript" src="script/view_settings.js"></script>
