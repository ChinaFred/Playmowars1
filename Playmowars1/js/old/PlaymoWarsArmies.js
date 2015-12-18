/* Army  */ 	


	 function army(obj){
		this.id = 0;
		this.name = "";
		this.picture = ""; 
		this.description ="";
		this.shortDesc ="";
		this.characters = [];
		
		this.getHtmlCard = function (){
				return '<div class="col-lg-6 col-sm-6 text-center">'+								
							'<div class="well">'+
								'<img class="img-circle img-responsive img-center" src="' + this.picture +'" alt="'+this.name+'">'+
								'<h3>' + this.name + '  <small>' + this.shortDesc +'</small></h3>'+
								'<p>' + this.description +'</p>' + 
								'<p><a class="btn btn-primary" role="button" href="javascript:setPartyDetailsAndTitle('+this.id+');">Détails</a></p>';
							'</div>'+
						'</div>'			
			};
		this.initFromJsonString = function (js){
		
				var obj = new army (jQuery.parseJSON(js));
			
				for (var prop in obj) this[prop] = obj[prop];
				return this;
			};
			
	// copie des propriétés de l'objet json
		for (var prop in obj) this[prop] = obj[prop];
		
	// cast des characters	
		for(var i = 0; i<this.characters.length;i++)
			this.characters[i] = new character(this.characters[i]);		
		
	}
	
/* Armies  */ 	
	function armies(obj){
		this.armies =[];
		
		this.initFromJsonString = function (js){
				
				var obj = new armies (jQuery.parseJSON(js));
					
				for (var prop in obj) this[prop] = obj[prop];
				
				return this;
			};
		
		this.getArmyById = function (id)
		{
			
			return ret = $.grep(this.armies, function(e){ return e.id == id; })[0];

		}
		
		this.getCharactersFromAllArmies = function(){
			var ret = []
			
			for (var i = 0; i<this.armies.length;i++)				
				 $.merge( ret, this.armies[i].characters )
			return ret;
		}
		
		this.getCharacterById = function(id){
			return $.grep(this.getCharactersFromAllArmies(), function(e){ return e.id == id; })[0]
		}
		
		// copie des propriétés de l'objet (JSON)
		for (var prop in obj) this[prop] = obj[prop];
		
		// cast to army 
		for(var i = 0; i<this.armies.length;i++)
		{
			this.armies[i] = new army(this.armies[i]);		
		}
	}



	