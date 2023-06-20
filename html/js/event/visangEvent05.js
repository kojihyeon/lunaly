var fnInit2 = function () {
    //fnEventInfo();
    //fnEventDuplicate(1);
    //fnEventView();
    //fnEventRankView();
    //fnEventTotal();
    //fnOrder(0);
    //fnEventList(2);
    //fnCalendarView();
    //fnSelectGift($("#hidMonth").val());
    //fnEventOptionTotal(1, 50);
};

function clip(){

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}

$(function () {
    //탭
    $(".tabBtnWrap li").click(function () {
        var inx = $(".tabBtnWrap li").index(this);
        $(".tabBtnWrap li").removeClass('on');
        $(this).addClass('on');
        $("#eventWrap .tabConWrap").stop().fadeOut("fast");
        $("#eventWrap .tabConWrap").eq(inx).stop().fadeIn("fast");
        return false;
    });
});