$(document).ready(function(){
	moveCenter();
	$(window).resize(function(){
		moveCenter();
	});
	function moveCenter(){
		winWidth = $(window).width();
		winHeight = $(window).height()+100;
		divWidth = $('#loginBox').width();
		divHeight = $('#loginBox').height();

		$('#loginBox').css({
			left:(winWidth-divWidth)/2,
			top:(winHeight-divHeight)/2
		});
	}
});