

function displayModal(){
  var modal = document.getElementById("modal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";


  var modal = document.getElementById("modal");
  span.onclick = function(){
    modal.style.display = "none";
  }

  window.onclick = function(event){
    modal.style.display = "none";
  }
}
