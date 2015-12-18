<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Playmowars.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Playmowars1._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

	
						
						
						 <!-- .row -->
						<div class="row">
							<div class="col-lg-12">
								<h1 class="page-header">Introduction</h1>
							</div>
							<!-- /.col-lg-12 -->
						</div>		
						<!-- /.row -->
						 <!-- .row -->
						<div class="row">
							<div class="col-lg-12">
								
									
									<p>Le but de ce site est de gérer via une application web, fonctionnant aussi bien sur mobile que sur PC, un jeu de guerre librement adapté depuis d'autres règles bien connues.</p>
									
								
							</div>
							<!-- /.col-lg-12 -->
						</div>
						<!-- /.row -->
						<div class="row">
							<div class="col-lg-12">
								<h2 class="page-header">Les protagonistes</h2>
							</div>
							<div class="col-lg-12" id="armyCards">
							
							
							</div>


						<hr>
						<div class="row">
							<div class="col-lg-12"id="protaTitle" >
								
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12" id="protaDetails">
									
							
								
							
							</div>
						</div>
						

</asp:Content>


<asp:Content ID="scriptContent" ContentPlaceHolderID="pageScripts" runat="server">
    <script>
        armies.Init();
		function setPartyDetailsAndTitle(id){
			
				$("#protaDetails").html("");
				var a = armies.getArmyById(id);
				$("#protaTitle").html('<h3 class="page-header"  >' + a.name + " <small> Composition de l'équipage</small></h3>");
				
				
				for(var i=0; i< a.characters.length;i++)
				{ 
				
				   $("#protaDetails").html(
								$("#protaDetails").html() +
								'<div class="col-lg-4 text-center">' + 
								a.characters[i].getHtmlCard() + 
								'</div>'
								); 		
				};
				
				$(window).scrollTop($('#protaDetails').offset().top);
				initToolTip();
			
			
		
		}
		
		function showArmies(){
		
			var a = armies.list;
			for (var i = 0; i<a.length ;i++) 
			{
				$("#armyCards").html($("#armyCards").html() + a[i].getHtmlCard());
			}
		}
		

		showArmies();
    </script>
</asp:Content>