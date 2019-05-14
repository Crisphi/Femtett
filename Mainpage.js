
/**Variables**/
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
var slideIndex = 0;
slides=["Sources/Marburger_Profs_Notiz.jpg","Sources/Marburger_Profs_Folie.jpg","Sources/Marburger_Profs_Foto.jpg"];


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

function createArea(areaId,cardId){
  var coords =  cardAreas[cardId];
  var area = document.getElementById(areaId);
  area.coords = coords;
  area.href = "javascript:overlayOn('"+ cardId +"');";
}

function displayLightroom(){
  var slideImg = document.getElementById("slideImg");
  slideIndex = 0;
  slideImg.src = slides[slideIndex];
  displayModal("modal5", 5);
}

function plusSlides(){
  slideIndex++;
  if(slideIndex >= 3){
    slideIndex = 0;
  }
  updateImage();

}
function updateImage(){
    var image = document.getElementById("slideImg");
    if(image.complete) {
        var new_image = new Image();
        //set up the new image
        new_image.id = "slideImg";
        new_image.src = slides[slideIndex];
        // insert new image and remove old
        image.parentNode.insertBefore(new_image,image);
        image.parentNode.removeChild(image);
    }
    setTimeout(updateImage, 1000);
}

function minusSlides(){
  slideIndex--;
  if(slideIndex < 0){
    slideIndex = 2;
  }
  updateImage();
}


/**Telephone**/

function testPhone(){
  var cor1 = 9;
  var cor2 = 3;
  var cor3 = 7;
  var cor4 = 4;
  var t1Value = document.getElementById("t1").value;
  var t2Value = document.getElementById("t2").value;
  var t3Value = document.getElementById("t3").value;
  var t4Value = document.getElementById("t4").value;

  if(cor1 == t1Value && cor2 == t2Value && cor3 == t3Value && cor4 == t4Value){
    displayCard('c3','e3');
  }else{
    t1Value = "";
    t2Value = "";
    t3Value = "";
    t4Value = "";
    displayModal("ending",8);
  }
}

function randomNumber(){
  var numb = Math.floor((Math.random()*20)+1);
  console.log(numb);
  $("#randomRes").html(numb);
  document.getElementById("rZahl").value = numb;
}

function startForm(callback){
  var tRaw;
  tRaw = $.get("http://getsimpleform.com/messages.js?api_token=ae7d35930cdcfa49277ab0dffc59c09f",{}, function(response){
    $("#adj").html(response[0].data.Adjektiv);
    $("#wiss").html(response[0].data.Wissenschaft);
    $("#richtung").html(response[0].data.Richtung);
    $("#gegenstand").html(response[0].data.Gegenstand);
    $("#ausruf").html(response[0].data.Ausruf);
    $("#aktiv").html(response[0].data.Aktivitaet);
    $("#zahl").html(response[0].data.Zahl);
    $("#name").html(response[0].data.Name);
  }, 'jsonp', async = false);

  /**for Testing**/
  var tData = tRaw;
  console.log(tData);
}

function start(){
  $.when(startForm()).then(function(){displayModal('startTextModal',0)});
}


/** just for testing**/
function displayAllCards(){
  var cards = ["e1","e2","e3","e4","f1","f2","f3","f4"];
  cards.forEach(allCards);
  displayModal("modal3",3);
  alert("All cards displayed");
  displayModal("ending",8);
}
function allCards(value){
  var card = document.getElementById(value);
  card.style.display = "inline";
}
