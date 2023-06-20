$(function () {
	$('.viewBtn').click(function () {
		$('.popWrap').show();
		return false;
	});
	$('.popClose1').click(function () {
		$('.popWrap').hide();
		return false;
	});
	$('.popClose2').click(function () {
		$('.popWrap').hide();
		return false;
	});
	$('.preBtn').click(function (e) {
		e.preventDefault();
		$('.goodsWrap ul li:first-child').insertAfter('.goodsWrap ul li:last-child');
		return false;
	});
	$('.nextBtn').click(function (e) {
		e.preventDefault();
		$('.goodsWrap ul li:last-child').insertBefore('.goodsWrap ul li:first-child');
		return false;
	});
	fnEventRankView('fp');
});

var fnDownload = function (str) {
	if (str != "") {
		$(".downBtn").attr("href", str);
	}
};

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
    //fnEventOptionTotal(1);
};
