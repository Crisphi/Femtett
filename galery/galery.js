function start(callback){
  var tRaw;
  tRaw = $.get("https://getsimpleform.com/messages.js?api_token=83616c2d07981a59b557c634837b419d",{}, function(response){
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

/**function start(){
  $.when(startForm()).then(function(){displayModal('startTextModal',0)});
}**/
