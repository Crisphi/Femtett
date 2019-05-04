var cardCounter = 0;
var cardAreas = {
  "e1":"176,70,221,60,274,70,274,226,176,226",
  "e2":"336,70,385,60,434,70,434,226,336,226",
  "e3":"176,291,221,284,274,291,274,444,176,444",
  "e4":"336,291,385,284,434,291,434,444,336,444",
  "f1":"574,70,622,60,672,70,672,226,574,226",
  "f2":"732,70,778,60,831,70,831,226,732,226",
  "f3":"574,291,622,284,672,291,672,444,574,444",
  "f4":"732,291,778,284,831,291,831,444,732,444"
};


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

function displayCard(areaId,cardId){
  var card = document.getElementById(cardId);
  card.style.display = "inline";
  displayModal("modal4",4);
  displayModal("modal3",3);
  cardCounter++;
  createArea(areaId,cardId);
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

/**trying to create area object**/
function createArea(areaId,cardId){
  var coords =  cardAreas[cardId];
  var area = document.getElementById(areaId);
  area.coords = coords;
  area.href = "javascript:overlayOn('"+ cardId +"');";
}
