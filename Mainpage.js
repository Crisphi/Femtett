

function displayModal(modalId){
  var modal = document.getElementById(modalId);
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";


  var modal = document.getElementById(modalId);
  span.onclick = function(){
    modal.style.display = "none";
  }

  window.onclick = function(event){
    modal.style.display = "none";
  }
}
