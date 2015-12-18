// Characters 
		function character (obj)
		{
		//(i,n,p,d,m,cc,ct,s,e,k,l,c,a,weaps){
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
			
			this.initFromJsonString = function (js){
				
				var obj = new character (jQuery.parseJSON(js));
					
				for (var prop in obj) this[prop] = obj[prop];
				
				return this;
			};
			
			
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
						var html =  '<h4 class="text-left">Armes : </h4>' +
									'<div class="table-responsive">'+
										'<table class="table table-striped table-bordered ">'+
											'<thead>'+
												'<tr>'+
													'<th ></th>'+	
													'<th ><span data-toggle="tooltip" data-placement="top" title="Nom de l\'arme">Nom</span></th>'+	
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
											
						for(var i = 0; i<this.weapons.length;i++)
							html += this.weapons[i].getWeaponTableHtml();		
						html +=	        	'</tbody>'+
										'</table>'+
									'</div>' ;		

						return html;
			};
			
			// copie des propriétés de l'objet (JSON)
			for (var prop in obj) this[prop] = obj[prop];
			
			// cast to army 
			for(var i = 0; i<this.weapons.length;i++)
			{
				this.weapons[i] = new weapon(this.weapons[i]);
				
			}
			
		}
		