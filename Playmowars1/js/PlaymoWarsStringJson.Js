// to simulate answers to Ajax call 

function initJsonArmy(i,n, p,d,sd, c)
{
	return '{ '+
	'"id" :"'+(i)+'", '+
	'"name":"'+(n)+'",'+
	'"picture" : "'+(p)+'",'+
	'"description":"'+(d)+'", '+
	'"shortDesc":"'+(sd)+'",'+
	'"characters":'+c+
	'}';
}
function initJsonChar(i,n,p,d,m,cc,ct,s,e,k,l,c,a,weaps)
{
	return '{ '+
	'"id" :"'+(i)+'", '+
	'"name":"'+(n)+'",'+
	'"picture" : "'+(p)+'",'+
	'"description":"'+(d)+'", '+
	'"move":"'+(m)+'",'+
	'"cc":"'+cc+'",'+
	'"ct":"'+ct+'",'+
	'"strenght":"'+s+'",'+
	'"endurance":"'+e+'",'+
	'"attack":"'+k+'",'+
	'"life":"'+l+'",'+
	'"charism":"'+c+'",'+
	'"armor":"'+a+'",'+
	'"weapons":'+weaps+
	'}';
}	
	
		function getStringJsonArmies(){
		
					var pirates  = initJsonArmy(1, 
								"Les pirates",
								"../Pictures/pirates.jpg",
								"Ces flibustiers donnent du fil à retordre à la couronne! Leur courage et leur détermination compense le manque de matériel. Ces redoutables combattants n'ont peur de rien et ne vivent en pensant qu'au jour présent.",
								"Des brigands sans foi ni loi", bande1
								
								);
			var soldats = initJsonArmy(2, 
								"Les soldats",
								"../Pictures/soldats.jpg",
								"Envoyé par la couronne pour contrôler la région ces hommes sont bien entrainés et disposent d'un matériel de qualité. Ils suivent les ordres à la lettre et ne vivent que pour servir.",
								"Une armée régulière",bande2
								
								);
			var zombies = initJsonArmy(3, 
								"Les zombies",
								"../Pictures/zombies.jpg",
								"Ces marins issus originellement de tous les camps et morts en mer, reviennent hanter les vivants. Leurs motivations et l'explication de leur présence sont actuellement des énigmes.",
								"Les morts-vivants",bande3
								
								);
			var ret =  '{"armies":[' + pirates + ',' + soldats + ', ' + zombies  + ']}';
			
			return ret;
		}	
		
function initJsonWeap(i, n, d,nbh,cbc, modifs) 
{
	
	

	return '{ '+
	'"id" :"'+(i)+'", '+
	'"name":"'+(n)+'",'+
	'"nbrHands" : "'+(nbh)+'",'+
	'"description":"'+(d)+'", '+
	'"canBeCombined":"' +(cbc)+ '",' +
	'"modifiers":'+ modifs+
	'}';
}
		
function initJsonModif(t, cc,ct,s,k,aChar,aEnnemy,cd)
{

		return '{ '+
	'"type" :"'+(t)+'", '+
	'"cc":"'+(cc)+'",'+
	'"ct" : "'+(ct)+'",'+
	'"strength":"'+(s)+'", '+
	'"attack":"'+(k)+'",'+
	'"armorChar":"'+(aChar)+'",'+
	'"armorEnnemy":"'+(aEnnemy)+'",'+
	'"charism":"'+cd+'"' +  
	'}';
		

	
}
		var weaps1  =initJsonWeap(1,"Arme de base","tous les types d'arme courant allant de l'épée, à la hache en passant par le gourdin ou le poignard",1,1, "[" + initJsonModif(0, 0,0,0,0,0,0,0) + "]" ); 
		var weaps2  =			    initJsonWeap(2,"Deux Armes de base","Combinaison de deux armes de base permettant de frapper de plus nombreuses fois.",1,1, "[" + initJsonModif(0, 0,0,0,1,0,0,0) +"]" ) ;
		var weaps3  =				initJsonWeap(3,"Pistolet et épée","Au corps à corps est utilisé comme deux armes de base. A distance le pistolet peut tirer jusque 6 pas, il utilise une force de 4 et perce l'armure d'un point supplémentaire.",1,1, "[" + initJsonModif(0, 0,0,0,1,0,0,0) +"," + initJsonModif(1, 0,0,4,0,0,-1,0) +"]");	
						
		
		
			var weaps = "[" +weaps1 +","+weaps2 +","+weaps3+"]";
			var bande1 = "[" +
							initJsonChar(1,"John le rouge","../Pictures/Pirates.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,5,3,4,3,2,2,9,0,weaps) + "," + 
							initJsonChar(2,"John le vert","../Pictures/Pirates.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,0,weaps)+ "," + 
							initJsonChar(3,"John le rouge","../Pictures/Pirates.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,2,9,0,weaps)+ "," + 
							initJsonChar(4,"John le vert","../Pictures/Pirates.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,0,weaps)+ "," + 
							initJsonChar(5,"John le noir","../Pictures/Pirates.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,0,weaps) + 
							"]" ;
			var bande2 = "[" +
								
								initJsonChar(6,"Brice Mc kingsley","../Pictures/soldats.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,2,2,9,4,weaps)+ "," + 
								initJsonChar(7,"Romuald Button","../Pictures/soldats.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,3,weaps)+ "," + 
								initJsonChar(8,"Conrad Springfield","../Pictures/soldats.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,2,9,2,weaps)+ "," + 
								initJsonChar(9,"John Marchin","../Pictures/soldats.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,0,weaps)+ "," + 
								initJsonChar(10,"Ed Barney","../Pictures/soldats.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,3,3,3,3,1,1,9,0,weaps) + 
								"]" ;
			var bande3 = "[" +
								initJsonChar(11,"Brice Mc kingsley","../Pictures/zombies.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,2,2,3,3,2,2,9,0,weaps)+ "," + 
								initJsonChar(12,"Romuald Button","../Pictures/zombies.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,2,2,3,3,1,1,9,0,weaps)+ "," + 
								initJsonChar(13,"Conrad Springfield","../Pictures/zombies.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,2,2,3,3,1,2,9,0,weaps)+ "," + 
								initJsonChar(14,"John Marchin","../Pictures/zombies.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,2,2,3,3,1,1,9,0,weaps)+ "," + 
								initJsonChar(15,"Ed Barney","../Pictures/zombies.jpg","Commandant en chef des pirates, il est considéré comme le meilleur et plus expérimenté pirate de la région",4,2,2,3,3,1,1,9,0,weaps)   + 
								"]" ;
						
		

		
				