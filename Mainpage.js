/** Just a Test**/
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
var lightAreas = {
  "lightArea1":"78,330,581,422",
  "lightArea2":"109,174,552,386"
}
var zoomSrc = {
  "b1Clip":{"margin-left": "-100px", "margin-top": "-320px", "transform": "scale(0.9,0.9)"},
  "b2Clip":{"margin-left": "-349px", "margin-top": "-750px", "transform": "scale(1.1,1.1)"},
  "b3Clip":{"margin-left": "-430px", "margin-top": "-100px", "transform": "scale(1.1,1.1)"},
  "b4Clip":{"margin-left": "-1000px", "margin-top": "-350px", "transform": "scale(1,1)"},
  "com1Clip":{"margin-left": "100px", "margin-top": "-800px", "transform": "scale(1.1,1.1)"},
  "com2Clip":{"margin-left": "-349px", "margin-top": "-450px", "transform": "scale(1.1,1.1)"},
  "com3Clip":{"margin-left": "-900px", "margin-top": "-100px", "transform": "scale(1.1,1.1)"},
  "com4Clip":{"margin-left": "-1000px", "margin-top": "-650px", "transform": "scale(1,1)"},
  "noteClip":{"margin-left": "-800px", "margin-top": "-650px", "transform": "scale(1,1)"},

  "one":{"margin-left": "-430px", "margin-top": "-700px","transform": "scale(0.7, 0.7)"},
  "two":{"margin-left": "-449px", "margin-top": "-520px", "transform": "scale(0.8,0.8)"}
};
var slideIndex = 0;
slides=["Sources/Marburger_Profs_Notiz.jpg","Sources/Marburger_Profs_Folie_big.jpg","Sources/Marburger_Profs_Foto_big.jpg"];


function displayModal(modalId,closeIndex=0){
  var modal = document.getElementById(modalId);
  var span = document.getElementsByClassName("close")[closeIndex];
  modal.style.display = "block";

  span.onclick = function(){
    modal.style.display = "none";
  }
}

function displayModalTut(modalId,closeIndex=0, nextModal, nextIndex=0){
  var modal = document.getElementById(modalId);
  var span = document.getElementsByClassName("close")[closeIndex];
  modal.style.display = "block";

  span.onclick = function(){
    modal.style.display = "none";
    displayModal(nextModal, nextIndex);
  }
}

function displayModalNext(modalId, nextModal, nextIndex=0){
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
  displayModal(nextModal,nextIndex);

}

function overlayOn(imgId, ovImg, overlay){
  var overlayImg = document.getElementById(ovImg);
  var image = document.getElementById(imgId);
  overlayImg.src = image.src;
  displayModal(overlay);
}
function overlayOff(ovId){
  document.getElementById(ovId).style.display = "none";
}

function displayCard(areaId,cardId,areaR="",cardR=""){
  var card = document.getElementById(cardId);
  card.style.display = "inline";
  displayModal("modal4",4);
  displayModal("modal3",3);
  if(cardR != "" && areaR != ""){
    document.getElementById(cardR).style.display = "none";
    document.getElementById(areaR).setAttribute("href", "javascript:function() { return false; };");
    document.getElementById(areaR).style.cursor = "default";
  }
  cardCounter++;
  createArea(areaId,cardId);
  if(cardCounter == 8){
    displayModal("endingNote",9);
    displayModal("ending", 8);
    document.getElementById("endingIcon").style.display = "block";
  }
}

function displayZoom(imgId, ovImg, overlay){
  var zoomed = document.getElementById("zoomed");
  zoomed.style.marginLeft = zoomSrc[imgId]["margin-left"];
  zoomed.style.marginTop = zoomSrc[imgId]["margin-top"];
  zoomed.style.transform = zoomSrc[imgId]["transform"];
  overlayOn(imgId, ovImg, overlay);
}

function createArea(areaId,cardId){
  var coords =  cardAreas[cardId];
  var area = document.getElementById(areaId);
  area.coords = coords;
  area.href = "javascript:overlayOn('"+ cardId+ "','card','cardOverlay');";
}

function createLightArea(areaId,imgId, slide){
  var coords =  lightAreas[areaId];
  var area = document.getElementById("lightArea");
  area.coords = coords;
  area.href = "javascript:displayLightZoom('"+ imgId+ "','zoomed','zoomOverlay','"+slide+"');";
}

function displayLightZoom(imgId, ovImg, overlay, slide){
  var zoomed = document.getElementById("zoomed");
  zoomed.style.marginLeft = zoomSrc[slide]["margin-left"];
  zoomed.style.marginTop = zoomSrc[slide]["margin-top"];
  zoomed.style.transform = zoomSrc[slide]["transform"];
  overlayOn(imgId, ovImg, overlay);
}

function displayLightroom(){
  var slideImg = document.getElementById("slideImg");
  slideIndex = 0;
  slideImg.src = slides[slideIndex];
  displayModal("modal11", 11);
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
        new_image.useMap = "#lightMap";

        if(slideIndex == 1){
          createLightArea("lightArea1","slideImg","one");
        }else if (slideIndex == 2) {
          createLightArea("lightArea2","slideImg","two");
        }else{
          var area = document.getElementById("lightArea");
          area.coords = "";
          area.href ="";
        }
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

/**Mindmap**/
function displayLine(lineId){
  document.getElementById(lineId).style.strokeOpacity = 1.0;
}

function unmarkAll(){
  document.getElementById("line1").style.strokeOpacity = 0.0;
  document.getElementById("line2").style.strokeOpacity = 0.0;
  document.getElementById("line3").style.strokeOpacity = 0.0;
  document.getElementById("pin1").style.fillOpacity = 0.0;
  document.getElementById("pin2").style.fillOpacity = 0.0;
  document.getElementById("pin3").style.fillOpacity = 0.0;
  document.getElementById("pin4").style.fillOpacity = 0.0;
  pinCount = 0;
  ptemp = "";
}

function uncklickAll(){
  document.getElementById("apin1").setAttribute("href", "javascript:function() { return false; };");
  document.getElementById("apin2").setAttribute("href", "javascript:function() { return false; };");
  document.getElementById("apin3").setAttribute("href", "javascript:function() { return false; };");
  document.getElementById("apin4").setAttribute("href", "javascript:function() { return false; };");

  document.getElementById("apin1").style.cursor = "default";
  document.getElementById("apin2").style.cursor = "default";
  document.getElementById("apin3").style.cursor = "default";
  document.getElementById("apin4").style.cursor = "default";
}

var pins = ["pin1","pin2","pin3","pin4"];
var pinCount = 0;
var ptemp = "";
function lineTest(pin){
  if(pinCount == 0){
    document.getElementById(pin).style.fillOpacity = 0.5;
    ptemp = pin;
    pinCount++;
  }else if(pinCount == 1){
    if(ptemp == pins[pinCount-1] && pin == pins[pinCount]){
      document.getElementById(ptemp).style.fillOpacity = 0.0;
      ptemp = pin;
      pinCount++;
      displayLine("line1");
    }else{
      unmarkAll();
    }
  }else if(pinCount == 2){
    if(pin == pins[pinCount]){
      ptemp = pin;
      pinCount++;
      displayLine("line2");
    }else{
      unmarkAll();
    }
  }else if(pinCount == 3){
    if(pin == pins[pinCount]){
      ptemp = pin;
      pinCount++;
      displayLine("line3");
      displayCard("c3","e3");
      uncklickAll();
    }else{
      unmarkAll();
    }
  }else{
    unmarkAll();
  }
}

/**Telephone**/

function testPhone(){
  var cor1 = 9;
  var cor2 = 3;
  var cor3 = 7;
  var cor4 = 4;
  var t1Value = document.getElementById("t1").innerHTML;
  var t2Value = document.getElementById("t2").innerHTML;
  var t3Value = document.getElementById("t3").innerHTML;
  var t4Value = document.getElementById("t4").innerHTML;
  var t1Numb = parseInt(t1Value,10);
  var t2Numb = parseInt(t2Value,10);
  var t3Numb = parseInt(t3Value,10);
  var t4Numb = parseInt(t4Value,10);

  if(cor1 == t1Numb && cor2 == t2Numb && cor3 == t3Numb && cor4 == t4Numb){
    displayCard("c1","e1");
    document.getElementById("phone").setAttribute("onclick", "javascript:function() { return false; };");
  }else{
    document.getElementById("t1").style.color = "red";
    document.getElementById("t2").style.color = "red";
    document.getElementById("t3").style.color = "red";
    document.getElementById("t4").style.color = "red";

    document.getElementById("t1").innerHTML = "0";
    document.getElementById("t2").innerHTML = "0";
    document.getElementById("t3").innerHTML = "0";
    document.getElementById("t4").innerHTML = "0";
  }
}

function numbUp(numbId){
  document.getElementById("t1").style.color = "white";
  document.getElementById("t2").style.color = "white";
  document.getElementById("t3").style.color = "white";
  document.getElementById("t4").style.color = "white";

  var val = document.getElementById(numbId).innerHTML;
  console.log(val);
  var numb = parseInt(val, 10);
  if(numb >= 9){
    numb = 0;
  }else{
    numb++;
  }
  console.log(numb);
  $("#"+numbId).html("" + numb + "");
  console.log(document.getElementById(numbId));
  console.log(document.getElementById(numbId).innerHTML);
}

function numbDwn(numbId){
  document.getElementById("t1").style.color = "white";
  document.getElementById("t2").style.color = "white";
  document.getElementById("t3").style.color = "white";
  document.getElementById("t4").style.color = "white";

  var val = document.getElementById(numbId).innerHTML;
  console.log(val);
  var numb = parseInt(val, 10);
  if(numb <= 0){
    numb = 9;
  }else{
    numb--;
  }
  console.log(numb);
  $("#"+numbId).html("" + numb + "");
  console.log(document.getElementById(numbId));
  console.log(document.getElementById(numbId).innerHTML);
}

function randomNumber(){
  var numb = Math.floor((Math.random()*20)+1);
  console.log(numb);
  $("#randomRes").html(numb);
  document.getElementById("rZahl").value = numb;
}

function startForm(callback){
  var tRaw;
  tRaw = $.get("https://api.liveformhq.com/v1/forms/5d26e1ed-cb75-4b35-b1c1-b2f9867963fd/messages", {
    api_key: "16105c44-8cde-4993-8468-cb93f00827f2"
  }, function(response){
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
  startForm();
  displayModalTut('startTextModal',0, 'modal13');
}

function displayWNote(modal, mClose, note, nClose){
  displayModal(note, nClose);
  displayModal(modal, mClose);
}

window.onbeforeunload = function(event)
   {
       return confirm("Willst du wirklich gehen? Dein Spielfortschritt wird nicht gespeichert!");
   };

function closeEnd(){
  document.getElementById('ending').style.display = 'none';
}
/** just for testing**/
function displayAllCards(){
  var cards = ["e1","e2","e3","e4","f1","f2","f3","f4"];
  cards.forEach(allCards);
  displayModal("modal3",3);
  displayModal("endingNote",9);
  displayModal("ending",8);
  document.getElementById("endingIcon").style.display = "block";
}
function allCards(value){
  var card = document.getElementById(value);
  card.style.display = "inline";
}
