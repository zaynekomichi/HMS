<div id="spec_inner_table" align="center">
    <br>
    <h3>Login and Out Times</h3>
    <button class="btn_log" id="login_time">Login Times</button>
    <button class="btn_log" id="logout_time">Logout Times</button>
    <div id="spec_table">
    </div>
    <script type="text/javascript">
        Show_logins();
    </script>
    <script type="text/javascript">
        $(document).ready(function(){
            $("#login_time").on('click', function(){
                Show_logins();
            });
            $('#logout_time').on('click', function(){
                Show_logout();
            });
        });

    </script>
</div>