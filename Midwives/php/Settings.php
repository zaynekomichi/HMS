<div id="container">
  <div align="center" class="settings">
    <h3>Additional</h3>
    <div id="add-row">
      <div class="add-card">
        <span>Package</span>
        <input type="text" placeholder="Package" id="package_value">
        <button id="package_add">Add</button>
        <br>
        <table cellspacing="0px">
          <thead>
            <th>Package</th>
            <th>Option</th>
          </thead>
          <tbody id="package_table">
          
          </tbody>
        </table>
      </div>
      <div class="add-card">
        <span>Method</span>
        <input type="text" placeholder="Payment Method" id="medical_value" required='required' required>
        <button id="medical_add">Add</button>
        <br>
        <table cellspacing="0px">
          <thead>
            <th>Payment Option</th>
            <th>Option</th>
          </thead>
          <tbody id="method_table">
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <p id="additional_response"></p>
    </div>
    <div id="row">
    <div class="minor_settings">
      <p>Clear cache to speed up application. Invaluable data will be deleted. Clearing of cache should take place on a daily basis .If this is not done application will be slower and may result in data gettting lost during processing.Cache should be cleared if there is heavy user access.
      </p>
      <button id="clear_cache">Clear Cache</button>
    </div>
    <div class="minor_settings">
      <p>Onclick you will be redirected to the backup page, click go and you will be asked to save the file. Keep backup files in their own seperate
      folder, do not attempt to temper with the files, this will result in loss of data. When you need to restore the backupfiles contact your network adminstrator. </p>
      <input type="hidden" id="username_backup" value="<?php echo $user_name;?>">
    <a href="http://192.168.18.246/phpmyadmin/server_export.php" target="_blank"><button id="backup_btn" onclick="send_backup_data()">Backup</button></a>
    </div>
  </div>
  <div id="settings_confirmation">

    <div id="confirmation_loader"></div>
    <p id="confirmation"></p>
    <br>
    <button id="remove_it">Got it</button>
  </div>
</div>
<!--<script type="text/javascript" src="../HMS/script/index.js"></script>-->
<script type="text/javascript">
  $('#package_table').load('http://192.168.18.246/Ark/Tables/packages.php');
  $('#method_table').load('http://192.168.18.246/Ark/Tables/method.php');
$(document).ready(function(){
  $('#package_add').on('click', function(){
    let package_value = $('#package_value').val();
    $.ajax({
      url:'http://192.168.18.246/Ark/Insert/insert_acc_essentials.php',
      type:'POST',
      data:{
        'process_add':1,
        'package_value':package_value,
      },
      success: function(response){
        if(response == 'true'){
          let additional_response = document.getElementById('additional_response');
          settings();
        }else if (response == 'false') {
          let additional_response = document.getElementById('additional_response');
          additional_response.innerHTML='';
          additional_response.style.color = 'red';
        }else if (response == 'null') {
          let dditional = document.getElementById('additional_response');
          dditional.innerHTML='Can not add empty values';
          dditional.style.color = 'red';
        }
      }
    });
  });
  $('#medical_add').on('click', function(){
    let medical_value = $('#medical_value').val();
    $.ajax({
      url:'http://192.168.18.246/Ark/Insert/insert_acc_essentials.php',
      type:'POST',
      data:{
        'process_add2':1,
        'medical_value':medical_value,
      },
      success: function(response){
        if(response == 'true'){
          let additional_response = document.getElementById('additional_response');
          settings();
        }else if (response == 'false') {
          let additional = document.getElementById('additional_response');
          additional.innerHTML='';
          additional.style.color = 'red';
        }else if (response == 'null') {
          let dditional = document.getElementById('additional_response');
          dditional.innerHTML='Can not add empty values';
          dditional.style.color = 'red';
        }
      }
    });
  });
});
$(document).on('click', '.delete_package',  function(){
  let id = $(this).data('id');
  $.ajax({
    url: 'php/query_settings.php',
    type: 'POST',
    data:{
      'delete_package':1,
      'id':id,
    },
    success: function(response){
      if(response == 'true'){
      settings();
    }else if (response == 'false') {
      alert("DIDNT WORK");
     }
    }

  });
});

$(document).on('click', '.delete_package',  function(){
  let id = $(this).data('id');
  $.ajax({
    url: 'http://192.168.18.246/Ark/Delete/delete_acc_essentials.php',
    type: 'POST',
    data:{
      'delete_package':1,
      'id':id,
    },
    success: function(response){
      if(response == 'true'){
      settings();
    }else if (response == 'false') {
      alert("Network Failure. Restart App");
     }
    }

  });
});


$(document).on('click', '.delete_medical',  function(){
  let id = $(this).data('id');
  $.ajax({
    url: 'http://192.168.18.246/Ark/Delete/delete_acc_essentials.php',
    type: 'POST',
    data:{
      'delete_medical':1,
      'id':id,
    },
    success: function(response){
      if(response == 'true'){
      settings();
    }else if (response == 'false') {
      alert("Network Failure. Restart App");
     }
    }

  });
});

$(document).ready(function(){
  $('#clear_cache').on('click', function(){
    let settings_confirmation = document.getElementById('settings_confirmation');
    settings_confirmation.style.display = "block";
    $.ajax({
      url:'http://192.168.18.246/Ark/Settings/settings.php',
      type:'POST',
      data:{
        delete_cache:1,
      },
      success: function(response){
        if(response == 'true'){
          let loader = document.getElementById('confirmation_loader');
          loader.remove();
          let big_screen = document.getElementById('settings_confirmation');
          big_screen.style.height = "100px";
          let response_cb = document.getElementById('confirmation');
          response_cb.innerHTML = "successful";
          response_cb.style.color = "green";
        }else if (response == 'false') {
          let loader = document.getElementById('confirmation_loader');
          loader.remove;
          let response_cb = document.getElementById('confirmation');
          response_cb.innerHTML = "Failed to clear cache";
          response_cb.style.color = "red";
        }
        else{
          let loader = document.getElementById('confirmation_loader');
          loader.remove;
          let response_cb = document.getElementById('confirmation');
          response_cb.innerHTML = "Network Failure";
          response_cb.style.color = "red";
        }
      }
    });
  });
});


  $('#remove_it').on('click', function(){
    let settings_confirmation = document.getElementById('settings_confirmation');
    settings_confirmation.style.display = "none";
  });
</script>
