function fnWindowOpen(sUrl, bToolbar, nWidth, nHeight)
{
	var nwGui = require('nw.gui');
	var newWin = nwGui.Window.open(sUrl, {
	"position": "center",
	"toolbar": bToolbar,
	"width": nWidth,
	"icon": "Visang/icon/32x32.png",
	"height": nHeight
	});	
}

function fnHref(sURL)
{
	var nwGui = require('nw.gui');
	nwGui.Shell.openExternal(sURL);
}

function fnExcuteFile(sPath)
{
	//현재위치
	var szPath = window.location.pathname;

	//첫번째 /부터, 마지막/까지의 문자열만 담음.
	var szDir = szPath.substring(szPath.indexOf('/', 0)+1, szPath.lastIndexOf('/'));
	console.log("현재 디렉토리 경로 = " + szDir);

	//현재위치 뒤쪽에 체크된 파일을 붙임
	var szTemp = szDir + "/" + sPath;
	console.log("실행될 파일 = " + szTemp);

	// '/'를 '\'로 바꿈('/' or '\' 지정에는 \을 붙여줘야됨)
	// (윈도우시스템과 유닉스 시스템의 디렉토리 구별의 차이떄문에)
	// /\//g = 정규표현식
	var szfullPath = szTemp.replace(/\//g, "\\");
	console.log("전체 파일 경로 = "  + szfullPath);
	
	var nwGui = require('nw.gui');
	nwGui.Shell.openItem(szfullPath);
}