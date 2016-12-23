$(document).ready(function(){
	$('.linkP').click(function(){
		$(this).siblings('.subMenu').fadeIn();
		$(this).parent('li').siblings('li').not('#icone-menu').hide();

	});

	$('.voltar').click(function(){
		$('.subMenu').hide();
		$('#menu li').show();
	});



});