//create a modal window function - function must respond positively
function positive_response(){
  let modal_text = document.getElementById('modal_text');
  let modal_window = document.getElementById('modal_window');
  modal_window.style.display = "block";
  modal_text.innerHTML = "Successful";
  modal_text.style.color = "green";
  $('#modal_button')on('click'){
    let modal_window = document.getElementById('modal_window');
    modal_window.style.display = "none";
  }
}

function negative_response(){
  let modal_text = document.getElementById('modal_text');
  let modal_window = document.getElementById('modal_window');
  modal_window.style.display = "block";
  modal_text.innerHTML = "Failed";
  modal_text.style.color = "red";
  $('#modal_button')on('click'){
    let modal_window = document.getElementById('modal_window');
    modal_window.style.display = "none";
  }
}
