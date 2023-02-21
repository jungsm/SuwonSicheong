let tablist1 = document.querySelector("tabboxlist1")


$('.tabboxlist2,.tabboxlist3,.tabboxlist1').hide();
$('tabboxlist').show();

$('.btn2').click(function(){
    $('.tabboxlist,.tabboxlist2,.tabboxlist3,.tabboxlist').hide();
    $('.tabboxlist1').show(); 
    
});
$('.btn1').click(function(){
    $('.tabboxlist1,.tabboxlist2,.tabboxlist3,.tabboxlist').hide();
    $('.tabboxlist').show(); 
});
$('.btn3').click(function(){
    $('.tabboxlist,.tabboxlist1,.tabboxlist3,.tabboxlist').hide();
    $('.tabboxlist2').show(); 
});
$('.btn4').click(function(){
    $('.tabboxlist,.tabboxlist2,.tabboxlist1,.tabboxlist').hide();
    $('.tabboxlist3').show(); 
});
var tabWrapper = $(".boxrow2");
tabWrapper.each(function () {
	var currentEl = $(this);
	var menus = currentEl.find(".tabbtn li");
	menus.click(function (e) {
		let tg = $(this); //this 이벤트가 발생한 요소
		menus.removeClass("active");
		tg.addClass("active");
	});
});


