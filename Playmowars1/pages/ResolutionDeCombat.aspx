<%@ Page Title="" Language="C#" MasterPageFile="~/Playmowars.Master" AutoEventWireup="true" CodeBehind="ResolutionDeCombat.aspx.cs" Inherits="Playmowars1.pages.ResolutionDeCombat" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    	<!-- .row -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">Par ici la castagne ! </h1>
							</div>
							<!-- /.col-lg-12 -->
						</div>		
						<!-- /.row -->
						<!-- Formulaire de bataille--->
						<div class="panel panel-default">
							
							<div class="panel-body">
								<div class="row">
									<div class="col-lg-6">
									
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3>Assaillant</h3>
											</div>
											<div class="panel-body">
												<div class="form-group col-lg-6">
													<label for="att-army-ddl">Armée</label>
													<select class="form-control" id="att-army-ddl" onchange="attArmyDdl_Changed(this.value);showCombatCard();">
														
													</select>
													
												</div>
												<div class="form-group col-lg-6">
													<label for="att-char-ddl">Personnage</label>
													<select class="form-control" id="att-char-ddl" onchange="showCharCards(this.value,'att-char-card');showCombatCard();" >
														
													</select>													
												</div>
												<div class="form-group col-lg-12" id="att-char-card">
												
												</div>
											</div>
											<!--panel-body-->
										</div>
										<!--panel-default-->
									</div>
									<!--col-lg-6-->
									<div class="col-lg-6">									
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3>Défenseur</h3>
											</div>
											<div class="panel-body">
												<div class="form-group col-lg-6">
													<label for="def-army-ddl">Armée</label>
													<select class="form-control" id="def-army-ddl" onchange="feedDdlCharacters(this.value,'def-char-ddl');showCombatCard();">
														
													</select>
													
												</div>
												<div class="form-group col-lg-6">
													<label for="def-char-ddl">Personnage</label>
													<select class="form-control" id="def-char-ddl" onchange="showCharCards(this.value,'def-char-card');showCombatCard();" >
														
													</select>													
												</div>
												<div class="col-lg-12" id="def-char-card">
												
												</div>	
																						
											</div>
											<!--panel-body-->
											
										</div>
										<!--panel-default-->
									</div>
									<!--col-lg-6-->
								</div>
								<div class="row">
									<div class="col-lg-12" >
										<div class="panel panel-default" >
										
											<div class="panel-heading">
												<h3>Combat</h3>
											</div>
											<div class="panel-body">
												<div class="col-lg-12" >
													<span id="fightRoundSummary"></span>
												</div>
											</div>
											<hr/>
											<div class="panel-body">
												<div class="col-lg-12" >
													
													<div class="form-group col-lg-12 center-block" >
														<button type="button" id="btnAttack" class="btn btn-success center-block" onclick="resolveAttacks();">Jet(s) d'attaque</button>
													</div>
												</div>
												<div class="container" id="resFight"  >												
													<div class="col-lg-12 center-block ">
														<h4>Résultat des frappes</h4>
														<div  id="divResAtt" class="row" >
															
														
														</div>
														<p><span id="txtResAtt"></span></p>
														<hr/>
														<div class="form-group col-lg-12 center-block" id= "divAttHit" >
															<button type="button" id="btnHurt" class="btn btn-warning center-block" onclick="resolveHurts();">Jet(s) de blessure</button>
														</div>
														
													</div>	
													
													<div class="col-lg-12 center-block " id="blockResHurt" >
														
															<h4>Résultat des jets de blessures</h4>
															<div  id="divResHurt" class="row" >
																
															
															</div>
															<p><span id="txtResHurt"></span></p>
															<hr/>
															<div class="col-lg-12 center-block" >
																<button type="button" id="btnArmor" class="btn btn-danger center-block" onclick="resolveArmors();" >Jet(s) d'armure</button>
															</div>
													</div>
													
													<div class="col-lg-12 center-block " id="blockResArmor" >
														
															<h4>Résultat des jets d'armure</h4>
															<div  id="divResArmor" class="row" >
																
															
															</div>
															<div class="col-lg-12 center-block " >
															<p><span id="txtResArmor"></span></p>
															<hr/>
													</div>
															
													</div>
													
													
												</div>
												
											</div>
											
										</div>
									</div>		
								
								</div>
								<!--row-->
							</div>
							<!--panel-body-->
						</div>
						<!--panel-defautl-->
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="pageScripts" runat="server">
    <script>
        var thisFightRound;
        armies.Init();



        function feedDdlArmies(ddlName, exc) {//exc l'id de l'armée exclue, ddl armée a remplir 
            $("#" + ddlName).empty();

            var a = armies.list;

            for (var i = 0; i < a.length; i++) {
                //alert (" " + a[i].id + "  " + exc + "  " + (a[i].id!= exc));
                if ((a[i].id != exc)) {

                    $("#" + ddlName).append($('<option>', {
                        value: a[i].id,
                        text: a[i].name
                    }));

                }
            }

        }


        // id d'armee et ddl characters à remplir 
        function feedDdlCharacters(id, ddlName) {
            $("#" + ddlName).empty();
            var a = armies.getArmyById(id);
            for (var i = 0; i < a.characters.length; i++) {
                c = a.characters[i];


                $("#" + ddlName).append($('<option>', {
                    value: c.id,
                    text: c.name
                }));
            }

            showCharCards($("#" + ddlName + " option:selected").val(), $("#" + ddlName).parent().next().attr('id'));

        }

        function attArmyDdl_Changed(id) {

            feedDdlCharacters(id, 'att-char-ddl');
            feedDdlArmies("def-army-ddl", $("#att-army-ddl option:selected").val());
            feedDdlCharacters($("#def-army-ddl option:selected").val(), 'def-char-ddl');
        }



        function showCharCards(id, card) {

            var c = armies.getCharacterById(id);
            $("#" + card).html(c.getHtmlCard());
            initToolTip();
        }

        function showCombatCard() {
            var attChar = armies.getCharacterById($("#att-char-ddl option:selected").val());
            var defChar = armies.getCharacterById($("#def-char-ddl option:selected").val());
            thisFightRound = fightRound(attChar, defChar);
            // mettre le texte
            $("#fightRoundSummary").html(thisFightRound.getFightRoundHtml());
            //Cacher les blocks non nécessaires			
            $("#resFight").hide(0);
            $("#blockResHurt").hide(0);
            $("#blockResArmor").hide(0);
            //vider les boites de réceptions de dés et de texte
            $("#divResAtt").html("");
            $("#divResHurt").html("");
            $("#txtResAtt").html("");
            $("#txtResHurt").html("");
            $("#divResArmor").html("");
            $("#txtResArmor").html("");
            // remettre les boutons en état
            enable("#btnAttack");
            enable("#btnHurt").hide();
            enable("#btnArmor").hide();
            initToolTip();
        }

        function addDiceResultBox(to, id) {
            jQuery("<div>")
					.attr('id', id)
					.attr("style", 'float:left;padding:20px')
					.appendTo($(to));
        }



        function addPow(target) {
            addFloatingPicture(target, '../Pictures/Pow.png');
        }

        function addMissed(target) {
            addFloatingPicture(target, '../Pictures/missed.png');
        }


        function resolveAttacks() {

            $("#resFight").show(0);
            disable("#btnAttack");

            $(window).scrollTop($('#resFight').offset().top);
            for (var i = 0 ; i < thisFightRound.attackingChar.attack; i++) {
                addDiceResultBox("#divResAtt", "attResDice" + i);
                var d = Dice("#attResDice" + i);
                d.animateRoll();
                thisFightRound.resultsHit[i] = d.result;

                if (thisFightRound.resultsHit[i] >= thisFightRound.scoreToHit()) {
                    setTimeout(addPow, 1000, "#attResDice" + i);
                    thisFightRound.nbHits++;
                }
                if (thisFightRound.nbHits > 0) {
                    $("#txtResAtt").html("<strong>" + thisFightRound.nbHits + "</strong> frappe(s) touche(nt).");
                    enable("#btnHurt").show(1000);
                }
                else
                    $("#txtResAtt").html("Aucune frappe ne touche.");

            }
        }

        function resolveHurts() {
            $("#blockResHurt").show(0);
            disable("#btnHurt");
            $(window).scrollTop($('#blockResHurt').offset().top);

            for (var i = 0 ; i < thisFightRound.nbHits; i++) {


                addDiceResultBox("#divResHurt", "hurtResDice" + i);
                var d = Dice("#hurtResDice" + i);
                d.animateRoll();
                thisFightRound.resultsHurt[i] = d.result;

                if (thisFightRound.resultsHurt[i] >= thisFightRound.scoreToHurt()) {
                    setTimeout(addPow, 1000, "#hurtResDice" + i);
                    thisFightRound.nbHurts++;
                }


            }

            thisFightRound.nbWounds = thisFightRound.nbHurts;
            if (thisFightRound.nbHurts > 0) {
                $("#txtResHurt").html("<strong>" + thisFightRound.nbHurts + "</strong> touches(s) blesse(nt).");
                if (thisFightRound.scoreToArmor() < 6)
                    enable("#btnArmor").show(1000);
                else {
                    resolveArmors();
                }

            }
            else
                $("#txtResHurt").html("Aucune touche ne blesse.");

        }

        function resolveArmors() {
            $("#blockResArmor").show(0);
            disable("#btnArmor");
            $(window).scrollTop($('#blockResArmor').offset().top);
            if (thisFightRound.scoreToArmor() < 6)
                for (var i = 0 ; i < thisFightRound.nbHurts; i++) {
                    addDiceResultBox("#divResArmor", "armorResDice" + i);
                    var d = Dice("#armorResDice" + i);
                    d.animateRoll();
                    thisFightRound.resultsArmor[i] = d.result;

                    if (thisFightRound.resultsArmor[i] >= thisFightRound.scoreToArmor()) {
                        setTimeout(addMissed, 1000, "#armorResDice" + i);
                        thisFightRound.nbWounds--;

                    }
                    else {
                        setTimeout(addPow, 1000, "#armorResDice" + i);

                    }
                }
            thisFightRound.defendingChar.life = thisFightRound.defendingChar.life - thisFightRound.nbWounds;
            showResult();
        }


        function showResult() {
            var resHtml = "<p><strong>" + (thisFightRound.nbHurts - thisFightRound.nbWounds) + "</strong> blessure(s) arrêtée(s) par l'armure.</p>";
            if (thisFightRound.nbWounds == 0)
                resHtml += "<p><strong>" + thisFightRound.defendingChar.name + "</strong> n'est pas blessé!"
            else {
                resHtml += "<p><strong>" + thisFightRound.defendingChar.name + "</strong> est blessé, perd <strong>" + thisFightRound.nbWounds + " PV</strong>  et "
                if (thisFightRound.defendingChar.life >= 1) {
                    resHtml += "<strong>survit</strong> à ses blessures. Il lui reste dorénavant <strong>" + (thisFightRound.defendingChar.life) + " PV</strong>. ";
                }
                else {
                    resHtml += "<strong>succombe</strong> à ses blessures. ";
                }
            }
            $("#txtResArmor").html(resHtml);
        }


        //  init ddl att
        feedDdlArmies("att-army-ddl", -1);
        feedDdlCharacters($("#att-army-ddl option:selected").val(), "att-char-ddl");


        //init ddl def
        feedDdlArmies("def-army-ddl", $("#att-army-ddl option:selected").val());
        feedDdlCharacters($("#def-army-ddl option:selected").val(), "def-char-ddl");


        showCombatCard();
    </script>
</asp:Content>
