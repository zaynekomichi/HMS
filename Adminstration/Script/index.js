function Login_Attempts(){
        $('#render').load('php/login_attempts.php');
}
function user_login_out(){
    $(document).ready(function(){
        $('#render').load('php/login_and_out_times.php');
    });
}
function backup_history(){
    $(document).ready(function(){
        $('#render').load('php/backup_record.php');
    });
}
function Show_logins(){
	$(document).ready(function(){
        $('#spec_table').load('php/login.php');
    });
}
function Show_logout(){
	$(document).ready(function(){
        $('#spec_table').load('php/logout_record.php');
    });
}
function logout(){
$(document).ready(function(){
    window.location.replace("../home/index.php")
});
}