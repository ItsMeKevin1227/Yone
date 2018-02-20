$(function(){
	$('.login').click(function(e){
		e.preventDefault();
		$('.lightBox').css('display','block');
		$('#loginBox').css('display','block');
		$('#menuControl').prop("checked", false);
	});
	$('.lightBox').click(function(){
		$('.lightBox').css('display','none');
		$('#loginBox').css('display','none');
		$('#menuControl').prop("checked", false);
	});
	$('.cancel').click(function(){
		$('.lightBox').css('display','none');
		$('#loginBox').css('display','none');
		$('#menuControl').prop("checked", false);
	});
	$('#loginBoxSubmit').click(function(){
		$(window).alert('898df');
		$('.lightBox').css('display','none');
		$('#loginBox').css('display','none');
		$('#menuControl').prop("checked", false);
	});
});