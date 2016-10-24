$("#btn").click(function(){
   console.log("Go Recupère le tableau");

   $.ajax('http://192.168.1.21:3000/places')
   .done(ajaxDone)
   .fail(ajaxFail);

   function ajaxDone(response) {
      var places = response.places;

      for (var i = 0; i < places.length; i++) {
         $("#list").append("<li>" + places[i].nom + "</li>")
         
         if (places[i].nom === "IoT Valley") {
            var motDePasse = places[5].password;
            $('body').append("mot de passe:" + motDePasse);
         }
      }

   };

   function ajaxFail(response) {
      alert("fail");
   };

});

// Pour Step 1 = météo Open Weather
// Le bouton fonctionne, ça envoie bien la requête mais il faut trouver comment entrer l'API key

$('#btnOpenWeather').on('click', function() {
   console.log('le clic sur le bouton météo fonctionne');

   $.ajax('http://api.openweathermap.org/data/2.5/weather?q={toulouse}')
      .done(openWeatherDone)
      .fail(openWeatherFail)


   function openWeatherDone(response) {
      console.log("success");
      alert("ok");
   };

   function openWeatherFail() {
      alert("fail");
   }

});
