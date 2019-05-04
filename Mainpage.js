

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

function displayModalC(imgId){
  var modal = document.getElementbyId("modal4");
  var modalImg = document.getElementById("card");
  var backgrModal= document.getElementById("modal3");
  var image = document.getElementById(imgId);
  backgrModal.blur();
  modal.focus();
  modal.style.display = "block";
  modalImg.src = image.src;
}
