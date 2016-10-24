$("#btn").click(function(){
   console.log("Go Recupère le tableau");
  
   $.ajax('http://192.168.1.21:3000/places')
   .done(ajaxDone)
   .fail(ajaxFail);

   function ajaxDone(response) {
      console.log(response);
      var places = response.places;
      console.log(places);
      for (var i = 0; i < places.length; i++) {
         var place = places[i];
      }
      if (place.nom === IoT Valley) {
         var motDePasse = places[5].password;
         $('body').append("mot de passe:" + motDePasse);
      }
      $('ul').append('<li>' + places.nom + '</li>');
      
   }

   function ajaxFail(response) {
      console.log(response);
   }

});
