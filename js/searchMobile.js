$(document).ready(function(){
	$('.iconeSearch').click(function(){
		
		$('.searchMobile').addClass('ativo').removeClass('inativo');
		$('.iconeSearch').addClass('inativo').removeClass('ativo');



	});
	
	$(document).mouseup(function (e) {
		var container = $(".searchMobile");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
    	container.removeClass('ativo').addClass('inativo');
		$('.iconeSearch').removeClass('inativo');

    }
});	
});	



