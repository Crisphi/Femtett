

function displayModal(modalId,closeIndex=0){
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

function overlayOn(imgId){
  var overlayImg = document.getElementById("card");
  var image = document.getElementById(imgId);
  overlayImg.src = image.src;
  displayModal("overlay");
}
function overlayOff(){
  document.getElementById("overlay").style.display = "none";
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
