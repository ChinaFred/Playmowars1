	function initToolTip(){	
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip(); 
		});
	}
	
	function disable(target){
			$(target).addClass("disabled").prop("disabled",true);
			return $(target);
		}
		
	function enable(target){
		$(target).removeClass("disabled").prop("disabled",false);
		
		return $(target);
	}
	
	function addFloatingPicture(target,picturePath){									
		jQuery("<img>")
		.attr('src', picturePath)
		.appendTo($( target))
		.each(
			function(){
					var x= $(target).position().left  ;
					var y= $(target).position().top + 10;
					$(this).css({
									  position: 'absolute',
									  zIndex:   5000,
									  top:      y, 
									  left:     x
								});
			
					}
		).show(1000);					
	}

	function alert(texte) {
	    alert(texte, "Avertissement");
	}

	function alert(texte, title) {
       
	    $("#dialog").attr("title", title).html(texte).dialog({
	        resizable: false,
	        modal: true
	    });
	}
	
	