$(function() {
	$('.err').click(function () {
		$('.popBg, .errPopWrap').show();
	});
	$('.emailBtn').click(function () {
		$('.popBg, .emailPopWrap').show();
	});
	$('.emailPopWrap .closeBtn').click(function () {
		$('.popBg, .emailPopWrap').hide();
	});
	$('.errPopWrap .closeBtn').click(function () {
		$('.popBg').hide();
	});
	$('.popWrap .closeBtn').click(function () {
		$(this).parents('.popWrap').hide();
	});
	$('.cdBtn').click(function () {
		$('.cdPopWrap').show();
	});
	$('.pcBtn').click(function () {
		$('.pcPopWrap').show();
	});
	$('.iosBtn').click(function () {
		$('.iosPopWrap').show();
	});
	$('.andBtn').click(function () {
		$('.andPopWrap').show();
	});
	$('.unit h3').click(function () {
		if($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).next('table').hide();
		} else {
			$(this).addClass('on');
			$(this).next('table').show();
		}
	});
});