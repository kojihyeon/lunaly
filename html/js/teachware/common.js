//학년 탭 클릭했을시 학기, 단원, 개념 불러오기.
$(document).on('click','.tabCon ul li',function (){
	var gradeCode = $(this).parent('ul').data('gradecode');
	var semesterCode = $(this).data('semestercode');
});

$(function () {
	//main tab
	$('#contTeach .tabCon').hide();
	$("#contTeach .tabCon:first").show();
	$('.tabGrade li').click(function () {
		$('.tabGrade li').removeClass("on").css("width","126px");
		$(this).addClass("on").css("width","193px");
		$('#contTeach .tabCon').hide();
		var activeTab = $(this).children("a").attr("rel");
		$("#" + activeTab).show();
	});
	// 1,2학기 버튼
	//$('.tabCon ul li:first-child').addClass('on');
	//$('.tabCon .semester1').show();
	
	// $('.tabCon ul li').click(function () {
	// 	$('.tabCon ul li').removeClass('on');
	// 	$(this).addClass('on');
	// 	$().
	// 	var semesterOn = $(this).attr("rel");
	// });


	//main Popup
	$('.popBtn').click(function () {
		$('.dim').show();
		$('#popupGuide').show();
	});
	$('.btnClose').click(function () {
		$(this).parents('#popupGuide').hide();
		$('.dim').hide();
	});
	
	//PopUp
	$('.btnInst').click(function () {
		$('.dim').show();
		$('.popInst').parents('#popupSub').show();
	});
	$('.btnAct').click(function () {
		$('.dim').show();
		$('.popAct').parents('#popupSub').show();
	});
	$('.btnClose').click(function () {
		$(this).parents('#popupSub').hide();
		$('.dim').hide();
	});
});