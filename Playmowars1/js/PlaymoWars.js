			
		// combat data
		var scoreCard = [0,6,5,4,3,2,2];
		function getScore(value){
			return scoreCard[(Math.min(Math.max(value,1),6))];
		}
		
		function getArmorRoll(value){
			
			var ret = 7;
			if (value >0)
					ret = getScore(value);
			return ret; 
		}
		
		function fightRound(attC, defC){
			return o = {
				"attackingChar":attC,
				"defendingChar":defC,
				"attackWeapon":0, // 0 CaC, 1 Tir
				"resultsHit":[],
				"nbHits":0,
				"resultsHurt":[],
				"nbHurts":0,
				"resultsArmor":[],
				"nbWounds":0,
				"scoreToHit":function(){return getScore( 3 + this.attackingChar.cc - this.defendingChar.cc);},
				"scoreToHurt":function(){return getScore( 3 + this.attackingChar.strength - this.defendingChar.endurance)},
				"scoreToArmor":function(){return getArmorRoll(this.defendingChar.armor - this.attackingChar.strength +3)},
				"getScoreToHitHtml":function(){
					return "<p> <strong>" + this.attackingChar.name + "</strong> dispose de <strong>" + this.attackingChar.attack + " attaque(s)</strong>. Pour toucher son adversaire, il devra faire <strong>"+ this.scoreToHit() +" +</strong> sur un D6.</p>"				
				},
				"getScoreToHurtHtml":function(){
					return "<p> Pour chaque touche, il devra faire <strong>" + this.scoreToHurt()  + "+</strong> sur un D6 pour blesser.</p>";
				},
				"getScoreToArmorHtml":function(){
					var armorHtml = "<p><strong>"  + this.defendingChar.name  + "</strong>";
														
					if (this.scoreToArmor()<=6)
						armorHtml += " pourra alors tenter un jet d'armure à <strong>" + this.scoreToArmor() + "+</strong> pour tenter d'amortir chaque blessure subie.";
					else 
						armorHtml += " ne pourra pas tenter de jet d'armure.";
					armorHtml += "</p>";
					return armorHtml;
				},
				"getFightRoundHtml":function(){
					return this.getScoreToHitHtml() +  this.getScoreToHurtHtml() + this.getScoreToArmorHtml();
				}
			}
			
		}
		
		
		
	