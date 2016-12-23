$(document).ready(function(){
	$('#menu-mobile').click(function(){
		
		$('.menuPrincipal').addClass('ativo').removeClass('inativo');

	});	
	
	$('#icone-menu').click(function(){ 
		$('.menuPrincipal').removeClass('ativo').addClass('inativo');

	});

	$(document).mouseup(function (e) {
		var container = $(".menuPrincipal");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container.removeClass('ativo').addClass('inativo');
		

    }
});	

	
});	