//current entry
var index = 0;
//length of entrylist starting with zero
var length;

//get the next entry
function nextForm(){
  //request length of entrylist
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    $("#length").val(response.length);
    length = document.getElementById("length");
    length = length.value;
    length = parseInt(length,10);
    length = length -1;
    console.log(length);

    //check if index is smaller than length, increase accordingly, overwrite span "index" and update
    if(index < length){
      index++;
      $("#index").html(index+1);
      update(index);
      console.log("Done1");
      console.log(index)
    }else{
      index = 0;
      $("#index").html(index+1);
      update(index);
      console.log("Done2");
      console.log(index);
    }
  }, 'jsonp', async = false);
}

//get prev entry
function prevForm(){
  //request length of entrylist
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
    $("#length").val(response.length);

    length = document.getElementById("length");
    console.log(length);
    length = length.value;
    length = parseInt(length,10);
    length = length -1;
    console.log(length);

    //check if index is bigger than length, decrease accordingly, overwrite span "index" and update
    if(index > 0){
      index--;
      $("#index").html(index+1);
      update(index);
      console.log(index);
    }else{
      index = length;
      $("#index").html(index+1);
      update(index);
      console.log(index);
    }
  }, 'jsonp', async = false);
}

//get latest entry
function latest(){
  index = 0;
  $("#index").html(index+1);
  update(index);
  console.log(index);
}

//will be executed on load
function start(callback){
  //request length of entrylist
  $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
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

//update userdata accordingly to index
function update(i){
  console.log("started function");
  var tRaw;
  //request userdata and overwrite spans
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
  console.log(tRaw);
}
