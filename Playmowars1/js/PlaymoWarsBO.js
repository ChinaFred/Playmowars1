//Weapons  
	var weaponUsageTypes = [ ];
	function weaponUsageType(id,n,p) 
	{
		this.id =id;
		this.label =n;
		this.picture = p;
	}
 // static methods
    weaponUsageType.initWeaponTypes = function ()
	{
		weaponUsageTypes = [
			new weaponUsageType(0,"Arme de corps à corps","../Pictures/swords.png"),
			new weaponUsageType(1,"Arme à distance","../Pictures/bow.png")
		];	
	}
	weaponUsageType.getWeaponUsageTypeById= function (id){
		
		if (weaponUsageTypes.length ==0) 
			weaponUsageType.initWeaponTypes();
		
		var ret = $.grep(weaponUsageTypes, function(e){ return e.id == id; });
		
		return ret[0];
		
	}
	
	

	function weapon(obj) 
	{
		this.id =0;
		this.name ="";
		this.nbrHands= 0;
		this.description = "";
		this.canBeCombined=false;
		this.modifiers=[];
		
		this.getHtmlTable = function ( ){
				
						
				var html = "";  	
				for(var i =0; i< this.modifiers.length;i++)
				{
					html +=	this.modifiers[i].getHtmlTable(this);
				}
					
			
				return html		;			
			}
			
		
		// copie des propriétés de l'objet (JSON)
		for (var prop in obj) this[prop] = obj[prop];
		
		// cast to modifiers  
		for(var i = 0; i<this.modifiers.length;i++)
		{
			
			this.modifiers[i] = new caracModifier(this.modifiers[i]);
			
		}
			
	}
	//static methods
	weapon.initFromJsonString = function (js){
			
			return new weapon (jQuery.parseJSON(js));	
	};	
	weapon.createWeapon = function(id, name, description, nbh, cbc, modifs) {
			var w = new weapon() 
			w.id= id; 
			w.name = name; 
			w.description = description;
			w.canBeCombined =cbc;
			w.nbrHands = nbh;
			w.modifiers = modifs;
			return w;
	}
	weapon.getTableHtmlFromWeaponsArray =function(arr){
		var html =  '<h4 class="text-left">Armes : </h4>' +
								'<div class="table-responsive">'+
									'<table class="table table-striped table-bordered ">'+
										'<thead>'+
											'<tr>'+
												
												'<th ><span data-toggle="tooltip" data-placement="top" title="Nom de l\'arme">Nom</span></th>'+	
												'<th >Type</th>'+	
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de la CC" >CC</span></th>'+	
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de la CT" >CT</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de la force"> Fo</span></th>'+	
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de l\'attaque"> At</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de l\'armure du personnage"> Ar</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur de l\'armure de l\'adversaire" > ArA</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Modificateur au charisme">Ch</span></th>'+
											'</tr>'+
										'</thead>'+
										'<tbody>';
										
					for(var i = 0; i<arr.length;i++)
						html += arr[i].getHtmlTable();		
					html +=	        	'</tbody>'+
									'</table>'+
								'</div>' ;		

					return html;
	}
	
//CaracModifier 	
	function caracModifier(obj)
	{
		this.type = 0;
		this.cc = 0;
		this.ct = 0;
		this.strength =0;
		this.attack = 0;
		this.armorChar = 0;
		this.armorEnnemy = 0 ;
		this.charism = 0; 
		
		this.getHtmlTable = function (parentWeapon){
					
					var html = 
						'<tr>';
							if (parentWeapon.modifiers[0]==this)
							    html += '<td rowspan="'+ parentWeapon.modifiers.length +'" id="'+parentWeapon.id+'"><span data-toggle="tooltip" data-placement="top" title="'+ parentWeapon.description+'">'+ parentWeapon.name+' </span></td>';
							html +='<td > <img data-toggle="tooltip" data-placement="top" title="'+weaponUsageType.getWeaponUsageTypeById(this.type).label+'" src="'+weaponUsageType.getWeaponUsageTypeById(this.type).picture+'"/></td>'+
							'<td>'+this.cc+'</td>'+
							'<td>'+this.ct+'</td>'+
							'<td>'+this.strength+'</td>'+													
							'<td>'+this.attack+'</td>'+
							'<td>'+this.armorChar+'</td>'+
							'<td>'+this.armorEnnemy+'</td>'+
							'<td>'+this.charism+'</td>'+
						'</tr>';  	
					return html;
				};
			
		// copie des propriétés de l'objet (JSON)
		for (var prop in obj) this[prop] = obj[prop];
		
	}
	caracModifier.initFromJsonString = function (js){		
				return new caracModifier (jQuery.parseJSON(js));
	};
	caracModifier.createCaracModifier = function (type,cc,ct,fo,at,ac,ae,cd){
			var m = new caracModifier();
			m.type = type,
			m.cc = cc; 
			m.ct = ct, 
			m.strength =fo;
			m.attack = at;
			m.armorChar = ac;
			m.armorEnnemy = ae ;
			m.charism = cd; 
			return m ; 
	}
	
// Characters 
	function character (obj)
	{
	
		this.id = 0; 
		this.name ="";
		this.picture ="";
		this.description = "";
		this.move =0; 
		this.cc= 0;
		this.ct = 0;
		this.strength =0; 
		this.endurance= 0;
		this.attack = 0;
		this.life = 0;				
		this.charism = 0;				
		this.armor = 0;		
		this.weapons = [];		
		
		this.getHtmlCard = function (){
				var ret =   
					'<div class="well well-sm">'+
						'<img class="img-circle img-responsive img-center" src="'+ this.picture+'" alt="'+ this.name +'">' +
							'<h2>'+this.name+'</h2>'+
								'<p>'+this.description+'</p>'+
										'<br/>'+
											this.getCaracsTableHtml()+
											this.getWeaponsTableHtml()+
					'</div>';
				
				return ret;					
			};
		this.getCaracsTableHtml =function (){
				return	'<h4 class="text-left">Caractéristiques : </h4>' +
						'<div class="table-responsive">'+
									'<table class="table table-striped table-bordered ">'+
										'<thead>'+
											'<tr>'+
												
												'<th ><span data-toggle="tooltip" data-placement="top" title="Capacité de mouvement">Mvt</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Capacité de combat ">CC</span></th>'+	
												'<th ><span data-toggle="tooltip" data-placement="top" title="Capacité de tir">CT</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Force"> Fo</span></th>'+	
												'<th ><span data-toggle="tooltip" data-placement="top" title="Endurance">En</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Nombre d\'attaque">At</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Points de vie">PV</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Armure"> Ar</span></th>'+
												'<th ><span data-toggle="tooltip" data-placement="top" title="Charisme">Ch</span></th>'+
											'</tr>'+
										'</thead>'+
										'<tbody>'+
											'<tr>'+
												'<td>'+this.move+'</td>'+
												'<td>'+this.cc+'</td>'+
												'<td>'+this.ct+'</td>'+
												'<td>'+this.strength+'</td>'+													
												'<td>'+this.endurance+'</td>'+
												'<td>'+this.attack+'</td>'+
												'<td>'+this.life+'</td>'+
												'<td>'+this.armor+'</td>'+
												'<td>'+this.charism+'</td>'+
											'</tr>'+                                 
										'</tbody>'+
									'</table>'+
								'</div>' ;				
			};
		this.getWeaponsTableHtml =  function (){
					return weapon.getTableHtmlFromWeaponsArray(this.weapons);
		};
		
		// copie des propriétés de l'objet (JSON)
		for (var prop in obj) this[prop] = obj[prop];
		
		// cast to army 
		for(var i = 0; i<this.weapons.length;i++)
		{
			this.weapons[i] = new weapon(this.weapons[i]);
			
		}
		
	}
	character.initFromJsonString = function (js){
			
			return new character (jQuery.parseJSON(js));
				
		
		};
	
	
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
		
			
	// copie des propriétés de l'objet json
		for (var prop in obj) this[prop] = obj[prop];
		
	// cast des characters	
		for(var i = 0; i<this.characters.length;i++)
			this.characters[i] = new character(this.characters[i]);		
		
	}
	army.initFromJsonString = function (js){
		
				return  new army (jQuery.parseJSON(js));
			
			
			};
	
/* Armies  */ 	
	function armies(){
		armies.list =[];
		armies.initFromJsonString (getStringJsonArmies());
	}
	armies.initFromJsonString = function (js){
		
		armies.list =  jQuery.parseJSON(js).armies;
				// cast to army 
		for(var i = 0; i<armies.list.length;i++)
		{
			armies.list[i] = new army(armies.list[i]);		
		}

	};
	armies.getArmyById = function (id)  {
		
		
		return  $.grep(armies.list, function(e){ return e.id == id; })[0];
	}
	armies.getCharactersFromAllArmies = function(){
		
		var ret = []
		
		for (var i = 0; i<armies.list.length;i++)				
			 $.merge( ret, armies.list[i].characters )
		return ret;
	}
	armies.getWeaponsFromAllArmies = function(){
		
		var ret = [];
		var retDistinct = [];
		var c = armies.getCharactersFromAllArmies();
		
		for (var i = 0; i<c.length;i++)	
			$.merge( ret, c[i].weapons );
		var hasToStore = true;
	
		for (var i = 0 ;i<ret.length;i++)
		{
			
			for( var j = 0; j< retDistinct.length;j++)
			{
			
				if( retDistinct[j].id == ret[i].id)
				{				
					hasToStore = false;
					break;
				}
					
			}	
			
			if(hasToStore)
				retDistinct[retDistinct.length] = ret[i];	
			else 
				hasToStore = true;
		}	 
	
		return retDistinct;
	}
	armies.getCharacterById = function(id){
		
		return $.grep(armies.getCharactersFromAllArmies(), function(e){ return e.id == id; })[0]
	}
	armies.Init =function()
	{
		new armies();
	}
	



	
		