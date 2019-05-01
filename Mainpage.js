

function displayModal(modalId,closeIndex){
  var modal = document.getElementById(modalId);
  var span = document.getElementsByClassName("close")[closeIndex];
  modal.style.display = "block";

  span.onclick = function(){
    modal.style.display = "none";
  }

  /**window.onclick = function(event){
    modal.style.display = "none";
  }**/
}
