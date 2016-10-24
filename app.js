$("#btn").click(function(){
   console.log("Go Recupère le tableau");
   $.ajax({
   	url:'http://192.168.1.21:3000/places',
   	type:'GET',

   	done:function(reponse){
   		var place=place.reponse;
   		console.log(reponse);
   	},
   	fail:function(erreur){
   	},
   	complete:function(completer){
   	},
   });


});