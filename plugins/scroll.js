// window.addEventListener('scroll',navscroll);
// function navscroll(){
// 	var navscroll = this.scrollY;
// 	var height = document.documentElement.clientHeight;
// 	height -= 200;
// 	if (navscroll > height) {
// 		document.getElementById('nav').className = 'navNew';
// 	}else{
// 		document.getElementById('nav').className = 'nav';
// 	}
// }

$(function(){
		var winW = $(window).width();
		var winH = $(window).height();

	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();

		if (winW < 960) {
			if (scrollTop > 36) {
				$('#nav').addClass('navNew');
			}else{
				$('#nav').removeClass('navNew');
			}
		}else{
			if (scrollTop > (winH*0.8)) {
				$('#nav').addClass('navNew');
			}else{
				$('#nav').removeClass('navNew');
			}
		}
	});
});