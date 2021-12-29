function new_message(){
  let chatBox = document.getElementById("chat-box");
  const NOTIFICATION_TITLE = 'Prospect Palms';
  const NOTIFICATION_BODY = 'New Message.';
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => messages();
}
let view_all = document.getElementById('chat-box');
view_all.style.display ="none";
function messages(){
      let chatBox = document.getElementById("chat-box");
      if(chatBox.style.display == "none"){
          chatBox.style.display ="block";
          function refresh_messages(){
          $("#render_chat").load("http://192.168.1.23/Ark/Chats/messages.php");
          }
      mess = setInterval(refresh_messages, 5000);
      }else{
        chatBox.style.display = "none";
        remove = clearInterval(mess);
      }
}
  function get_name(){
          $.ajax({
            url:"http:192.168.1.23/Ark/Chats/get_new_message.php",
            type:"POST",
            data:{
              "user":1,
            },
            success: function(response){
              let  net = response.replace(/\s+/g,"");
              let dat = Username.replace(/\s+/g,"");
              if(net != dat){
                new_message();
              }else{
                net = net.replace(/\s+/g,"");
                dat = dat.replace(/\s+/g,"");
                findDiff(net, dat);
              }
            }
        });
}

function findDiff(str1, str2){ 
  let diff= "";
  str2.split('').forEach(function(val, i){
    if (val != str1.charAt(i))
      diff += val ;         
  });
}