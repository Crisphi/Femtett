

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

function displayCard(cardId){
  var card = document.getElementById(cardId);
  card.style.display = "inline";
  displayModal("modal3",3);
  alert("Du hast eine Karte aufgesammelt!");
}
function displayAllCards(){
  var cards = ["e1","e2","e3","e4","f1","f2","f3","f4"];
  cards.forEach(allCards);
  displayModal("modal3",3);
  alert("All cards displayed");
}
function allCards(value){
  var card = document.getElementById(value);
  card.style.display = "inline";
}
