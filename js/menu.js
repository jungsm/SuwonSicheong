$(function () {
	$(".nav li").eq(0).mouseover(function () {
    $(".full_menu").eq(0).stop().slideDown(300);
  });
  $(".nav li").eq(1).mouseover(function () {
    $(".full_menu").eq(1).stop().slideDown(300);
  });
  $(".nav li").eq(2).mouseover(function () {
    $(".full_menu").eq(2).stop().slideDown(300);
  });
  $(".nav li").eq(3).mouseover(function () {
    $(".full_menu").eq(3).stop().slideDown(300);
  });
  $(".nav li").eq(4).mouseover(function () {
    $(".full_menu").eq(4).stop().slideDown(300);
  });
  $(".nav li").eq(5).mouseover(function () {
    $(".full_menu").eq(5).stop().slideDown(300);
  });
  $(".nav li").eq(6).mouseover(function () {
    $(".full_menu").eq(6).stop().slideDown(300);
  });












  $(".nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(500);
  });
  $(".full_menu_1").mouseover(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "100%");
	});
	$(".full_menu_1").mouseleave(function () {
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width", "0%");
	});
});