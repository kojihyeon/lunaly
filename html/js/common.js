window.onload = function () {
	setTimeout (function () {
		scrollTo(0,0);
	}, 100);
	//loading
  setTimeout(function() {
    $('.loading').fadeOut('fast');
  }, 3000);
	setTimeout("typing", 4000);
}

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
if(!isMobile) {
	//모바일이 아닌 경우 스크립트
	//fullpage scroll + nav
	var scroll = function () {
		var $nav = null,
				$cnt = null,
				moveCnt = null,
				moveIndex = 0,
				moveCntTop = 0,
				winH = 0,
				time = false; // 새로 만든 변수
			
		$(document).ready(function(){
				init();
				initEvent();
		});

		var init = function () {
			$cnt = $(".contant");
			$nav = $("nav ul li a");
		};

		var initEvent = function () {
			$("html,body").scrollTop(0);
			winResize();
			$(window).resize(function () {
				winResize();
			});
			$nav.on("click",function () {
				moveIndex = $(this).parent("li").index();
				moving(moveIndex);
				return false;
			});
			$cnt.on("mousewheel",function (e) {
				if(time == false) { //time 변수가 false일 때만 휠 이벤트 실행
					wheel(e);
				}
			});
		};

		var winResize = function () {
			winH = $(window).height();
			$cnt.children("section").height(winH);
			$("html,body").scrollTop(moveIndex.scrollTop);
		};

		var wheel = function (e) {
			if(e.originalEvent.wheelDelta < 0) {
				if(moveIndex <4) {
					moveIndex += 1;
					moving(moveIndex);
				};
			} else {
				if (moveIndex > 0) {
					moveIndex -= 1;
					moving(moveIndex);
				};
			};
		};
		
		var moving = function (index) {
			time = true // 휠 이벤트가 실행 동시에 true로 변경
			moveCnt = $cnt.children("section").eq(index);
			moveCntTop = moveCnt.offset().top;
			$("html,body").stop().animate({
				scrollTop : moveCntTop
			}, 800, function () {
				time = false; // 휠 이벤트가 끝나면 false로 변경
			});
			$nav.parent("li").eq(index).addClass("on").siblings().removeClass("on");
		};
	};

	scroll();
} else {
	//모바일인 경우 스크립트
}

$(function () {
	//HOME 타이핑 효과
	var typingBool = false; 
	var typingIdx = 0; 

	// 타이핑될 텍스트를 가져온다 
	var typingTxt = $(".typing-txt").text(); 

	typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

	if(typingBool==false){ 
		// 타이핑이 진행되지 않았다면 
		typingBool=true;     
		var tyInt = setInterval(typing,200); // 반복동작 
	} 
			
	function typing() {
		if(typingIdx<typingTxt.length){ 
			// 타이핑될 텍스트 길이만큼 반복 
			setTimeout(function() {
				$(".typing").append(typingTxt[typingIdx]);
				// 한글자씩 이어준다. 
				typingIdx++;}, 4500);
		} else{ 
			//끝나면 반복종료 
			clearInterval(tyInt); 
		} 
	}

	//경력기술서 팝업
	$('.careerPopBtn').click(function () {
		$('.careerPop').show();
		return false;
	});
	$('.careerPop .popClose').click(function () {
		$('.careerPop').hide();
		return false;
	});

	//NAV
	$('.navWrap input[id="trigger"]').click(function () {
		var navBtn = $('input[id="trigger"]').is(":checked")
		if(navBtn == true) {
			$('.navWrap nav').stop().animate({"left":"-=200px"},400);
		} else {
			$('.navWrap nav').stop().animate({"left":"+=200px"},400);
		}

	});

	//프로젝트 스와이프 슬라이드
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		}
	});
}); //ready
