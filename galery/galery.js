var index = 0;
var length;
/**$(document).ready(function(){
  length = $("#length").val();
  //length = length - 1;
  console.log(length);
});**/



function nextForm(){
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    //console.log(response.length);
    $("#length").val(response.length);

    length = document.getElementById("length");
    console.log(length);
    length = length.value;
    length = parseInt(length,10);
    length = length -1;
    console.log(length);

    if(index < length){
      index++;
      $("#index").html(index);
      update(index);
      console.log("Done1");
      console.log(index)
    }else{
      index = 0;
      $("#index").html(index);
      update(index);
      console.log(length);
      console.log("Done2");
      console.log(index);
    }
  }, 'jsonp', async = false);
}

function prevForm(){
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    //console.log(response.length);
    $("#length").val(response.length);

    length = document.getElementById("length");
    console.log(length);
    length = length.value;
    length = parseInt(length,10);
    length = length -1;
    console.log(length);

    if(index > 0){
      index--;
      $("#index").html(index);
      update(index);
      console.log(index);
    }else{
      index = length;
      $("#index").html(index);
      update(index);
      console.log(index);
    }
  }, 'jsonp', async = false);
}

function latest(){
  index = 0;
  $("#index").html(index);
  update(index);
  console.log(index);
}

function start(callback){
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    //console.log(response.length);
    $("#length").val(response.length);
    $("#length").html(response.length);

    length = document.getElementById("length");
    console.log(length);
    length = length.value;
    length = parseInt(length,10);
    length = length -1;
    console.log(length);
  }, 'jsonp', async = false);
  update(index);
}


function update(i){
  console.log("started function");
  var tRaw;
  tRaw = $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    $("#adj").html(response[i].data.Adjektiv);
    $("#wiss").html(response[i].data.Wissenschaft);
    $("#richtung").html(response[i].data.Richtung);
    $("#gegenstand").html(response[i].data.Gegenstand);
    $("#ausruf").html(response[i].data.Ausruf);
    $("#aktiv").html(response[i].data.Aktivitaet);
    $("#zahl").html(response[i].data.Zahl);
    $("#name").html(response[i].data.Name);

    $("#adj2").html(response[i].data.Adjektiv);
    $("#wiss2").html(response[i].data.Wissenschaft);
    $("#richtung2").html(response[i].data.Richtung);
    $("#gegenstand2").html(response[i].data.Gegenstand);
    $("#ausruf2").html(response[i].data.Ausruf);
    $("#aktiv2").html(response[i].data.Aktivitaet);
    $("#zahl2").html(response[i].data.Zahl);
    $("#name2").html(response[i].data.Name);
  }, 'jsonp', async = false);

  /**for Testing**/
  var tData = tRaw;
  console.log(tData);
}
/**function start(){
  $.when(startForm()).then(function(){displayModal('startTextModal',0)});
}**/
