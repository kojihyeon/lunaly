$(function(){
  //main visual number count
  $('.counter').counterUp({
    delay: 10,
    time: 1400
  });

  //main visual text
  $('.tradeServices .visual .ptxt span[class*=slideTxt]').css({"opacity": "0.85","transform": "translateX(0%)"});

  $('.fixedwrap ul li:nth-child(1)').addClass('on');
  //popup open
  //1번 팝업
  $('#popBtn01').click(function () {
    $('body').css('overflow','hidden');
    $('.pop').removeClass('on');
    $('#pop01').addClass('on');
    $('#pop01.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop01.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
    return false;
  });

  //2번 팝업
  $('#popBtn02').click(function () {
    $('body').css('overflow','hidden');
    $('.pop').removeClass('on');
    $('#pop02').addClass('on');
    $('#pop02.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop02.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
    return false;
  });

  //3번 팝업
  $('#popBtn03').click(function () {
    $('body').css('overflow','hidden');
    $('.pop').removeClass('on');
    $('#pop03').addClass('on');
    $('#pop03.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop03.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
    return false;
  });

  //4번 팝업
  $('#popBtn04').click(function () {
    $('body').css('overflow','hidden');
    $('.pop').removeClass('on');
    $('#pop04').addClass('on');
    $('#pop04.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
    return false;
 });
  
  //5번 팝업
  $('#popBtn05').click(function () {
    $('body').css('overflow','hidden');
    $('.pop').removeClass('on');
    $('#pop05').addClass('on');
    $('#pop05.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop05.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
    return false;
  });
  
  //팝업 닫기
  $('.pop .closeBtn').click(function () {
    $('body').css('overflow','scroll');
    $(this).parents('.popWrap').removeClass('on');
    $('.pop .contents').scrollTop(0);
    return false;
  });
  
  //1번 팝업 팝업 스크롤에 따라 애니메이션
  if ($("#pop01").hasClass("on")) {
	$('#pop01.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop01.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
  }
  
  $('#pop01 .pop .contents').on('scroll',function() {
    var conTop = $('#pop01 .pop .contents').scrollTop();

    if (0 <= conTop && conTop < 501) {
      $('#pop01 .fixedwrap ul li').removeClass('on');
      $('#pop01 .fixedwrap ul li:nth-child(1)').addClass('on');
    }
    if (501 <= conTop && conTop < 1096) {
      $('#pop01 .fixedwrap ul li').removeClass('on');
      $('#pop01 .fixedwrap ul li:nth-child(2)').addClass('on');
    }
    if (1096 <= conTop && conTop < 1619) {
      $('#pop01 .fixedwrap ul li').removeClass('on');
      $('#pop01 .fixedwrap ul li:nth-child(3)').addClass('on');
    }
    if (1619 <= conTop && conTop < 1940) {
      $('#pop01 .fixedwrap ul li').removeClass('on');
      $('#pop01 .fixedwrap ul li:nth-child(4)').addClass('on');
    }
    if (1940 <= conTop) {
      $('#pop01 .fixedwrap ul li').removeClass('on');
      $('#pop01 .fixedwrap ul li:nth-child(5)').addClass('on');
    }
    var pop1isVisible = false;
    if (pop1checkVisible($('#pop01 .pop .contents .matching'))&&!pop1isVisible) {
      $('#pop01.popWrap .pop .contents .matching .matchingBox').css({"opacity": "1","transform": "translateY(0%)"});
      pop1isVisible=true;
    }
    if (pop1checkVisible($('#pop01 .pop .contents .howto'))&&!pop1isVisible) {
      $('#pop01.popWrap .pop .contents .howto ul li').css({"opacity": "1","transform": "translateY(0%)"});
      popisVisible=true;
    }
    if (pop1checkVisible($('#pop01 .pop .contents .other'))&&!pop1isVisible) {
      $('#pop01.popWrap .pop .contents .other ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop1isVisible=true;
    }
  });
  
  //2번 팝업 스크롤에 따라 애니메이션
  if ($("#pop02").hasClass("on")) {
	$('#pop02.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop02.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
  }
  
  $('#pop02 .pop .contents').on('scroll',function() {
    var conTop = $('#pop02 .pop .contents').scrollTop();

    if (0 <= conTop && conTop < 440) {
      $('#pop02 .fixedwrap ul li').removeClass('on');
      $('#pop02 .fixedwrap ul li:nth-child(1)').addClass('on');
    }
    if (440 <= conTop && conTop < 792) {
      $('#pop02 .fixedwrap ul li').removeClass('on');
      $('#pop02 .fixedwrap ul li:nth-child(2)').addClass('on');
    }
    if (792 <= conTop && conTop < 1296) {
      $('#pop02 .fixedwrap ul li').removeClass('on');
      $('#pop02 .fixedwrap ul li:nth-child(3)').addClass('on');
    }
    if (1296 <= conTop) {
      $('#pop02 .fixedwrap ul li').removeClass('on');
      $('#pop02 .fixedwrap ul li:nth-child(4)').addClass('on');
    }

    var pop2isVisible = false;
    if (pop2checkVisible($('#pop02 .pop .contents .howto'))&&!pop2isVisible) {
      $('#pop02.popWrap .pop .contents .howto ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop2isVisible=true;
    }
    if (pop2checkVisible($('#pop02 .pop .contents .other'))&&!pop2isVisible) {
      $('#pop02.popWrap .pop .contents .other ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop2isVisible=true;
    }
  });

  //3번 팝업 스크롤에 따라 애니메이션
  if ($("#pop03").hasClass("on")) {
	$('#pop03.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop03.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
  }
  
  $('#pop03 .pop .contents').on('scroll',function() {
    var conTop = $('#pop03 .pop .contents').scrollTop();

    if (0 <= conTop && conTop < 471) {
      $('#pop03 .fixedwrap ul li').removeClass('on');
      $('#pop03 .fixedwrap ul li:nth-child(1)').addClass('on');
    }
    if (471 <= conTop && conTop < 826) {
      $('#pop03 .fixedwrap ul li').removeClass('on');
      $('#pop03 .fixedwrap ul li:nth-child(2)').addClass('on');
    }
    if (826 <= conTop && conTop < 1370) {
      $('#pop03 .fixedwrap ul li').removeClass('on');
      $('#pop03 .fixedwrap ul li:nth-child(3)').addClass('on');
    }
    if (1370 <= conTop) {
      $('#pop03 .fixedwrap ul li').removeClass('on');
      $('#pop03 .fixedwrap ul li:nth-child(4)').addClass('on');
    }

    var pop3isVisible = false;
    if (pop3checkVisible($('#pop03 .pop .contents .matching'))&&!pop3isVisible) {
      $('#pop03.popWrap .pop .contents .matching .matchingBox').css({"opacity": "1","transform": "translateY(0%)"});
      pop3isVisible=true;
    }
    if (pop3checkVisible($('#pop03 .pop .contents .other'))&&!pop3isVisible) {
      $('#pop03.popWrap .pop .contents .other ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop3isVisible=true;
    }
  });

  //4번 팝업 스크롤에 따라 애니메이션
  if ($("#pop04").hasClass("on")) {
	$('#pop04.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop04.popWrap .pop .contents .howto ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
  }
  
  $('#pop04 .pop .contents').on('scroll',function() {
    var conTop = $('#pop04 .pop .contents').scrollTop();

    if (0 <= conTop && conTop < 836) {
      $('#pop04 .fixedwrap ul li').removeClass('on');
      $('#pop04 .fixedwrap ul li:nth-child(1)').addClass('on');
    }
    if (836 <= conTop && conTop < 1157) {
      $('#pop04 .fixedwrap ul li').removeClass('on');
      $('#pop04 .fixedwrap ul li:nth-child(2)').addClass('on');
    }
    if (1157 <= conTop) {
      $('#pop04 .fixedwrap ul li').removeClass('on');
      $('#pop04 .fixedwrap ul li:nth-child(3)').addClass('on');
    }

    var pop4isVisible = false;
    if (pop4checkVisible($('#pop04 .pop .contents .howto'))&&!pop4isVisible) {
      $('#pop04.popWrap .pop .contents .howto ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop4isVisible=true;
    }
    if (pop4checkVisible($('#pop04 .pop .contents .other'))&&!pop4isVisible) {
      $('#pop04.popWrap .pop .contents .other ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop4isVisible=true;
    }
  });
  
  //5번 팝업 팝업 스크롤에 따라 애니메이션
  if ($("#pop05").hasClass("on")) {
	$('#pop05.popWrap .pop .contents .summary ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
	$('#pop05.popWrap .pop .contents .features ul').fadeTo(500, 1).css({"transform": "translateY(0%)"});
  }
  
  $('#pop05 .pop .contents').on('scroll',function() {
    var conTop = $('#pop05 .pop .contents').scrollTop();

    if (0 <= conTop && conTop < 440) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(1)').addClass('on');
    }
    if (440 <= conTop && conTop < 792) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(2)').addClass('on');
    }
    if (792 <= conTop && conTop < 1077) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(3)').addClass('on');
    }
    if (1077 <= conTop && conTop < 1450) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(4)').addClass('on');
    }
    if (1450 <= conTop && conTop < 1720) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(5)').addClass('on');
    }
    if (1720 <= conTop ) {
      $('#pop05 .fixedwrap ul li').removeClass('on');
      $('#pop05 .fixedwrap ul li:nth-child(6)').addClass('on');
    }
    
    var pop5isVisible = false;
    if (pop5checkVisible($('#pop05 .pop .contents .service'))&&!pop5isVisible) {
      $('#pop05.popWrap .pop .contents .service .txtBox').css({"opacity": "1","transform": "translateY(0%)"});
      pop1isVisible=true;
    }
    if (pop5checkVisible($('#pop05 .pop .contents .use'))&&!pop5isVisible) {
      $('#pop05.popWrap .pop .contents .use .txtBox').css({"opacity": "1","transform": "translateY(0%)"});
      $('#pop05.popWrap .pop .contents .use .table').css({"opacity": "1","transform": "translateY(0%)"});
      popisVisible=true;
    }
    if (pop5checkVisible($('#pop05 .pop .contents .beneifts'))&&!pop5isVisible) {
      $('#pop05.popWrap .pop .contents .beneifts ul').css({"opacity": "1","transform": "translateY(0%)"});
      popisVisible=true;
    }
    if (pop5checkVisible($('#pop05 .pop .contents .other'))&&!pop5isVisible) {
      $('#pop05.popWrap .pop .contents .other ul li').css({"opacity": "1","transform": "translateY(0%)"});
      pop1isVisible=true;
    }
  });

});//ready

//mian scroll
var isVisible = false;
$(window).on('scroll',function() {
  if (checkVisible($('.benefitWrap'))&&!isVisible) {
    $('.tradeServices .benefitWrap ul').css({"opacity": "1","transform": "translateY(0%)"});
    isVisible=true;
  }
});

//메인 checkVisible
function checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(),
      scrolltop = $(window).scrollTop(),
      y = $(elm).offset().top,
      elementHeight = $(elm).height();
  
  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

//팝업 popcheckVisible
//1번 팝업
function pop1checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewH1 = $('#pop01 .pop .contents').height(),
      popTop1 = $('#pop01 .pop .contents').scrollTop(),
      elmTop1 = $(elm).offset().top,
      elmH1 = $(elm).height();
  
  if (eval == "object visible") return ((elmTop1 < (viewH1 + popTop1)) && (elmTop1 > (popTop1 - elmH1)));
  if (eval == "above") return ((elmTop1 < (viewH1 + popTop1)));
}
//2번 팝업
function pop2checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewH2 = $('#pop02 .pop .contents').height(),
      popTop2 = $('#pop02 .pop .contents').scrollTop(),
      elmTop2 = $(elm).offset().top,
      elmH2 = $(elm).height();
  
  if (eval == "object visible") return ((elmTop2 < (viewH2 + popTop2)) && (elmTop2 > (popTop2 - elmH2)));
  if (eval == "above") return ((elmTop2 < (viewH2 + popTop2)));
}
//3번 팝업
function pop3checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewH3 = $('#pop03 .pop .contents').height(),
      popTop3 = $('#pop03 .pop .contents').scrollTop(),
      elmTop3 = $(elm).offset().top,
      elmH3 = $(elm).height();
  
  if (eval == "object visible") return ((elmTop3 < (viewH3 + popTop3)) && (elmTop3 > (popTop3 - elmH3)));
  if (eval == "above") return ((elmTop3 < (viewH3 + popTop3)));
}
//4번 팝업
function pop4checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewH4 = $('#pop04 .pop .contents').height(),
      popTop4 = $('#pop04 .pop .contents').scrollTop(),
      elmTop4 = $(elm).offset().top,
      elmH4 = $(elm).height();
  
  if (eval == "object visible") return ((elmTop4 < (viewH4 + popTop4)) && (elmTop4 > (popTop4 - elmH4)));
  if (eval == "above") return ((elmTop4 < (viewH4 + popTop4)));
}
//5번 팝업
function pop5checkVisible( elm, eval ) {
  eval = eval || "object visible";
  var viewH5 = $('#pop05 .pop .contents').height(),
      popTop5 = $('#pop05 .pop .contents').scrollTop(),
      elmTop5 = $(elm).offset().top,
      elmH5 = $(elm).height();
  
  if (eval == "object visible") return ((elmTop5 < (viewH5 + popTop5)) && (elmTop5 > (popTop5 - elmH5)));
  if (eval == "above") return ((elmTop5 < (viewH5 + popTop5)));
}