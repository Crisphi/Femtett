var cardCounter = 0;

function displayModal(modalId,closeIndex=0){
  var modal = document.getElementById(modalId);
  var span = document.getElementsByClassName("close")[closeIndex];
  modal.style.display = "block";

  span.onclick = function(){
    modal.style.display = "none";
  }
}

function overlayOn(imgId){
  var overlayImg = document.getElementById("card");
  var image = document.getElementById(imgId);
  overlayImg.src = image.src;
  displayModal("cardOverlay");
}
function overlayOff(ovId){
  document.getElementById(ovId).style.display = "none";
}

function displayCard(cardId){
  var card = document.getElementById(cardId);
  card.style.display = "inline";
  displayModal("modal4",4);
  displayModal("modal3",3);
  cardCounter++;
  if(cardCounter == 8){
    displayModal("ending");
  }
}

/** just for testing**/
function displayAllCards(){
  var cards = ["e1","e2","e3","e4","f1","f2","f3","f4"];
  cards.forEach(allCards);
  displayModal("modal3",3);
  alert("All cards displayed");
  displayModal("ending",5);
}
function allCards(value){
  var card = document.getElementById(value);
  card.style.display = "inline";
}
