<%@ Page Title="" Language="C#" MasterPageFile="~/Playmowars.Master" AutoEventWireup="true" CodeBehind="EditionDeContenu.aspx.cs" Inherits="Playmowars1.pages.EditionDeContenu" %>
<asp:Content ID="edition" ContentPlaceHolderID="MainContent" runat="server">
    <!-- .row -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">Edition des contenus! </h1>
							</div>
							<!-- /.col-lg-12 -->
						</div>		
						<!-- /.row -->
						<!-- --->
						<div class="panel panel-default">
							
							<div class="panel-body">
								<div class="row">
                                    	<div class="col-lg-6">
										<div class="panel panel-default ">
											<div class="panel-heading">
												<h3>Armes existantes</h3>
											</div>
										
											<div class="panel-body">
												<div class="row ">
													<div class="form-group col-lg-12"" >
														<div class="table-responsive" id="div-table-weaps">
														</div>
														
													</div>
													
												</div>
                                                <div class="row ">
                                                    <div class="form-group col-lg-12"" >
													    <button type="button" class="btn btn-primary" id="btnNewWeapon" ><i class="glyphicon glyphicon-plus-sign"></i> Nouvelle arme</button>
                                                        <button type="button" class="btn btn-danger" id="btnDelWeapon" ><i class="glyphicon glyphicon-remove-sign"></i> Effacer l'arme</button>				
													</div>
                                                </div>
												<div class="row ">
                                                    <hr/>
													<div class="form-group  col-lg-12">
														<button type="button" class="btn btn-primary" id="btnGenerateWeapons" >Générer</button>		
													</div>
													<div class="form-group col-lg-12"" >
														
                                                        <label>Text area</label>
                                                        <textarea class="form-control" rows="3" id="txtRetWeapons"></textarea>
                                                    </div>
												
													
												</div>
											</div>
										</div>
									</div>
									<!--col-lg-6-->


									<div class="col-lg-6">
										<div class="panel panel-default">
											<div class="panel-heading">
												<h3>Edition d'une arme</h3>
											</div>
											<div class="panel-body">
												<div class="row">
													<div class="form-group col-lg-4">
														<label for="input-weap-id">Id</label>
														<input class="form-control disabled" id="input-weap-Id" value="-1">
														
													</div>
													<div class="form-group col-lg-4">
														<label for="input-weap-nbh">Nbr main</label>
														<input class="form-control" id="input-weap-nbh" value="1">
														
													</div>
													<div class="form-group col-lg-4">
														<label>Peut être combinée</label>
														<div  class="radio">
															<label>
																<input type="radio" name="opt-weap-cbc" id="opt-weap-cbc" value="false" checked="">Non
															</label>
														</div>
														<div class="radio">
															<label>
																<input type="radio" name="opt-weap-cbc" id="opt-weap-cbc" value="true">Oui
															</label>
														</div>
													</div>
												</div>
												<div class="row">
													<div class="form-group col-lg-4">
														<label for="input-weap-name">Nom</label>
														<input class="form-control" id="input-weap-name">
														
													</div>
													<div class="form-group col-lg-8">
														<label for="input-weap-description">Description</label>
														<input class="form-control" id="input-weap-description">											
													</div>
												</div>
												
												<div class="row" >
													<div class="panel panel-default" style="margin:5px">
														<div class="panel-heading">
															<h3>Modificateurs</h3>
														</div>
														<div class="panel-body">
															<div class="table-responsive">
																<table class="table table-striped table-bordered " id="table-modif">
																	<thead>
																		<tr>
																			<th>Type</th>
																			<th  style="min-width:50px">cc</th>
																			<th  style="min-width:50px">ct</th>
																			<th  style="min-width:50px">Fo</th>
																			<th  style="min-width:50px">At</th>
																			<th  style="min-width:50px">Ar</th>
																			<th  style="min-width:50px">Ar en</th>
																			<th  style="min-width:50px">cd</th>
																			<th style="min-width:50px"></th>
																			<th  style="min-width:50px"></th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr >
																			<td>
																				<div  class="radio">
																					<label>
																						<input type="radio" class="opt-modif-type" name="opt-modif-type" id="opt-modif-false" value="0" checked=""><img src="../Pictures/swords.png"/>
																					</label>
																				</div>
																				<div class="radio">
																					<label>
																						<input type="radio" class="opt-modif-type" name="opt-modif-type" id="opt-modif-true" value="1"><img src="../Pictures/bow.png"/>
																					</label>
																				</div>
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-cc" value="0">
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-ct" value="0">	
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-fo" value="0">
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-at" value="0">		
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-ac" value="0">
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-ae" value="0">			
																			</td>
																			<td>
																				<input class="form-control" id="input-modif-cd" value="0">	
																			</td>
																			<td>
																				<button type="button" class="btn btn-success btnAddModif" ><i class="glyphicon glyphicon-plus-sign"></i></button>		
																			</td>
																			<td>
																				<button type="button" class="btn btn-danger btnDelModif" ><i class="glyphicon  glyphicon-remove-sign"></i></button>		
																			</td>
																		</tr>
																		
																	</tbody>
																</table>
															</div>
															
															
														</div>
													</div>
													<div class="row">
														<div class="form-group col-lg-12">
															<hr/>
															<div class="form-group  col-lg-12">
																<button type="button" class="btn btn-primary" id="btnGenerateWeapon" >Générer</button>		
															</div>
															<div class="form-group col-lg-12">
																<label for="input-result">Texte à copier dans le code</label>
																<input class="form-control" id="input-result" value="">
															</div>
														</div>
													</div>
												</div>
											</div>
											<!--panel-body-->
										</div>
										<!--panel-default-->
									</div>
								
									
								</div>
							</div>
							<!--panel-body-->
						</div>
						<!--panel-defautl-->
        

</asp:Content>
<asp:Content ID="scripts" ContentPlaceHolderID="pageScripts" runat="server">
    <script>
        function composeTextWeapon() {
            id = $("#input-weap-id").val();
            name = $("#input-weap-name").val();
            desc = $("#input-weap-description").val();
            nbh = $("#input-weap-nbh").val();
            cbc = $("#opt-weap-cbc:checked").val();

            var modifs = [];
            var lines = $("#trModif");

            for (var i = 0; i < lines.length ; i++) {
                var t = $(".opt-modif-type:checked").val();
                var cc = $("#input-modif-cc").val();
                var ct = $("#input-modif-ct").val();
                var fo = $("#input-modif-fo").val();
                var at = $("#input-modif-at").val();
                var ac = $("#input-modif-ac").val();
                var ae = $("#input-modif-ae").val();
                var cd = $("#input-modif-cd").val();


                modifs[i] = caracModifier.createCaracModifier(t, cc, ct, fo, at, ac, ae, cd);

            }
            var w = weapon.createWeapon(id, name, desc, nbh, cbc, modifs)

            var ret = 'initJsonWeap(\'' + JSON.stringify(w) + '\')';

            $("#input-result").val(ret);
        }

        function composeTextWeapons() {
            $("#txtRetWeapons").val(JSON.stringify(armies.getWeaponsFromAllArmies()));
            
        }


        function feedWeaponsTableBody() {
            $("#div-table-weaps").html(weapon.getTableHtmlFromWeaponsArray(armies.getWeaponsFromAllArmies()));
        }



        //function de mgmt de la page
        function addModifRow() {
            var rowContent = $(this).parent().parent().html();


            var tableBody = $(this).parent().parent().parent();
            var newRow = $('<tr></tr>').html(rowContent);
            tableBody.append(newRow);
            $(".btnAddModif").off("click", addModifRow);
            $(".btnAddModif").click(addModifRow);
            $(".btnDelModif").off("click", removeModifRow);
            $(".btnDelModif").click(removeModifRow);
        }

        function removeModifRow() {
          
            if ($("#table-modif > tbody > tr").length > 1)
                $(this).parent().parent().remove();
            else
                alert("Il est nécessaire de disposer d'au moins un modificateur pour une arme.","Effacement impossible");


        }


        ///////Init page data
        armies.Init();
        feedWeaponsTableBody();

        //Init page layout
        disable("#input-weap-Id");




        ///////Init page actions 

    

        //buttons
        $("#btnGenerateWeapon").click(function () { composeTextWeapon(); });
        $("#btnGenerateWeapons").click(function () { composeTextWeapons(); });
        $('#div-table-weaps table tbody tr').click(function () {
            var tr = $(this)
            while (tr.children().length==8) {
                tr = tr.prev();
                }
           
            tr.attr("style", "background-color:#C9CFD1;").siblings().removeAttr('style');

            if (tr.children().first().attr("rowspan") > 1)
            {
                for (var i = 0; i < tr.children().first().attr("rowspan") ;i++)
                    tr.next().attr("style", "background-color:#C9CFD1;");
            }
               
        });

        $(".btnAddModif").click(addModifRow);
        $(".btnDelModif").click(removeModifRow);


     
     

    </script>
</asp:Content>
