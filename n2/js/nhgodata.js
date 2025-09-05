function MoveNextText(loaidethi, namthi, trinhdo, prefix){	
	var noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
	if(trinhdo == "N1" || trinhdo =="N2"){
		if (loaidethi == 1 || loaidethi == 2){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to vocabulary and grammar exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề từ vựng, ngữ pháp không ?";
			}
			
		}else if (loaidethi == 3){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to reading comprehension exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề đọc hiểu không ?";
			}
		}else {
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to Listening exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
			}
		}	
	}else{
		if (loaidethi == 1 ){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to vocabulary exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề từ vựng không ?";
			}
		}else if (loaidethi == 3 || loaidethi == 2){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to grammar and reading comprehension exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề ngữ pháp, đọc hiểu không ?";
			}
		}else {
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to Listening exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
			}
		}	
	}
	var urlSite ="";
	if (prefix != '') {
		urlSite = document.location.origin + '/en/jlpt/' + trinhdo + '/' + namthi + '/' + loaidethi;
	}else{
		urlSite = document.location.origin + '/jlpt/' + trinhdo + '/' + namthi + '/' + loaidethi;
	}
	var r = confirm(noidungxacnhan);
	if (r == true) {
		location.href = urlSite;
	}
}
function MoveNextOtherText(loaidethi, namthi, trinhdo, prefix){	
	var noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
    if(trinhdo == "N1" || trinhdo =="N2"){
		if (loaidethi == 1 || loaidethi == 2){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to vocabulary and grammar exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề từ vựng, ngữ pháp không ?";
			}
		}else if (loaidethi == 3){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to reading comprehension exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề đọc hiểu không ?";
			}
		}else {
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to Listening exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
			}
		}	
	}else{
		if (loaidethi == 1 ){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to vocabulary exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề từ vựng không ?";
			}
		}else if (loaidethi == 3 || loaidethi == 2){
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to grammar and reading comprehension exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề ngữ pháp, đọc hiểu không ?";
			}
		}else {
			if(prefix != ''){
				noidungxacnhan ="Would you like to move to Listening exam ?";
			}else{
				noidungxacnhan ="Bạn có muốn chuyển đến đề nghe không ?";
			}
		}	
	}
	var urlSite ="";
	if (prefix != '') {
		urlSite = document.location.origin + '/en/de_thi_thu/' + trinhdo + '/' + namthi + '/' + loaidethi;
	}else{
		urlSite = document.location.origin + '/de_thi_thu/' + trinhdo + '/' + namthi + '/' + loaidethi;
	}
	var r = confirm(noidungxacnhan);
	if (r == true) {
		location.href = urlSite;
	}
}

function Saiten(){
    var sumQu = document.getElementById("totalQUestion").innerHTML;
	// xu ly tim nut duoc chon
	var countOk =0;
	var countNg =0;
	var tongdiemTV =0;
	var tongdiemNP =0;
	var tongdiemDH =0;
	var tongdiemnghe =0;
	var countEx =0;
    for(var count=1; count<=sumQu;count++)
    {
    	var radioId= "QS" + count;
        var giaithichId = "GT" + count;
    	var radio1 = document.getElementsByName(radioId)
		var checkFlag = false;
    	var answerIndex = document.getElementById("AS"+ count).innerHTML;
		var typeIndex = document.getElementById("type"+ count).innerHTML;
		//truong hop la cau hoi nhung ko co diem -> la cau vi du -> ko tinh
		var tmpdiem = document.getElementById("diemso"+ count).innerHTML;
		if(tmpdiem=="0"){
			countEx = countEx + 1;
			continue;
		}
    	for(var i=0; i < radio1.length;i++){
    	    // i番目のラジオボタンがチェックされているかを判定
    	    var tmpInt = i + 1;
    	    if(radio1[i].checked){
    	        checkFlag = true;
				if(tmpInt == answerIndex){
					document.getElementById(radioId + tmpInt).innerHTML = "正解:　" + radio1[i].value;
					document.getElementById(radioId + tmpInt).style.color = "blue";
					countOk = countOk + 1;
					if(typeIndex == 1){
						tongdiemTV = parseFloat(tongdiemTV) + parseFloat(tmpdiem);
					}else if(typeIndex == 2){
						tongdiemNP = parseFloat(tongdiemNP) + parseFloat(tmpdiem);
					}else if(typeIndex == 4){
						tongdiemnghe = parseFloat(tongdiemnghe) + parseFloat(tmpdiem);
					}else{
						tongdiemDH = parseFloat(tongdiemDH) + parseFloat(tmpdiem);
					}
				}else{
					// xu ly bi sai to do dong do
					document.getElementById(radioId + tmpInt).innerHTML = "不正解:　" + radio1[i].value;
					document.getElementById(radioId + tmpInt).style.color = "red";
					countNg = countNg + 1;
				}
    	    }
    	    // tra lai mau cu
    	    else{
        	    // set lai noi dung cu
        	    document.getElementById(radioId + tmpInt).innerHTML = radio1[i].value;
        	    document.getElementById(radioId + tmpInt).style.color = "black";
        	}
    	}
    	// chi cau nao duoc check moi show ket qua
    	if(checkFlag == true){
    		document.getElementById(radioId + answerIndex).innerHTML = "正解:　" + radio1[answerIndex-1].value;
			document.getElementById(radioId + answerIndex).style.color = "blue";
			var element = document.getElementById( giaithichId );
            if (element != null) {
                // hien thi phan chu thich dap an
                document.getElementById( giaithichId ).style.display = 'table-cell';
            }
        }
    }
	document.getElementById("tongcaudung").innerHTML = countOk;
	document.getElementById("tongcausai").innerHTML = countNg;
	document.getElementById("tongcauchuatraloi").innerHTML = sumQu-countNg-countOk -countEx;

	var tmptype = this.location.pathname.slice( -1 ) ;
	var languageTmp = this.location.pathname.substring(1, 3);
	if(tmptype == "1"){
		var tmpdiem = Math.round(parseFloat(tongdiemTV));
		var tmpdiemnp = Math.round(parseFloat(tongdiemNP));
		document.getElementById("tongdiemTV").innerHTML = tmpdiem;
		document.getElementById("tongdiemNP").innerHTML = tmpdiemnp;
		var examLevel = document.getElementById("trinhdothi").innerHTML;
		if(examLevel== "N1" || examLevel== "N2"){
			// N1 + N2 thi day la de doc hieu roi , chi show doc hieu thoi
			document.getElementById( 'tv' ).style.display = 'block';
			document.getElementById( 'tv' ).style.background =row2color;
			document.getElementById( 'np' ).style.display = 'block';
			
			if((tmpdiem + tmpdiemnp)< 19){
				if("en"==languageTmp){
					document.getElementById("danhgia").innerHTML = "Your score is below 19, you should try more to avoid failed";
				}else{
					document.getElementById("danhgia").innerHTML = "Tổng điểm phần từ vựng, ngữ pháp của bạn dưới 19, bạn đã bị điểm liệt";
				}
				document.getElementById( 'danhgia' ).style.background =row2color;
			}else{
				document.getElementById("danhgia").innerHTML = "";
			}
		}else{
			// cai nay la ngu phap + doc hieu
			document.getElementById( 'tv' ).style.display = 'block';
			document.getElementById( 'tv' ).style.background =row2color;
		}
	}else if(tmptype == "4" ){
		var tmpdiem = Math.round(parseFloat(tongdiemnghe));
		document.getElementById("tongdiemnghe").innerHTML = tmpdiem + "/60";
		document.getElementById( 'dnghe' ).style.display = 'block';
		document.getElementById( 'dnghe' ).style.background =row2color;
		// thi tu vung
		if(tmpdiem < 19){
			if("en"==languageTmp){
				document.getElementById("danhgia").innerHTML = "Your listening score is below 19, you should try more to avoid failed";
			}else{
				document.getElementById("danhgia").innerHTML = "Điểm phần nghe của bạn dưới 19, bạn đã bị điểm liệt";
			}
			
		}else if(tmpdiem ==60){
			document.getElementById("danhgia").innerHTML ="bạn là người nhật mẹ nó rồi";
			if("en"==languageTmp){
				document.getElementById("danhgia").innerHTML = "It's amazing. Are you Japanese.";
			}else{
				document.getElementById("danhgia").innerHTML = "bạn là người nhật mẹ nó rồi";
			}
		}else{
			document.getElementById("danhgia").innerHTML ="";
		}
	}else{
		//ngu phap + doc hieu
		//var tmpdiemtv = Math.round(parseFloat(tongdiemTV));
		var tmpdiemnp = Math.round(parseFloat(tongdiemNP));
		var tmpdiemdh = Math.round(parseFloat(tongdiemDH));
		//document.getElementById("tongdiemTV").innerHTML = tmpdiemtv;
		document.getElementById("tongdiemNP").innerHTML = tmpdiemnp;
		document.getElementById("tongdiemDH").innerHTML = tmpdiemdh;
		var examLevel = document.getElementById("trinhdothi").innerHTML;
		if(examLevel== "N1" || examLevel== "N2"){
			// N1 + N2 thi day la de doc hieu roi , chi show doc hieu thoi
			document.getElementById( 'dh' ).style.display = 'block';
			document.getElementById( 'dh' ).style.background =row2color;
		}else{
			// cai nay la ngu phap + doc hieu
			document.getElementById( 'np' ).style.display = 'block';
			document.getElementById( 'dh' ).style.display = 'block';
			document.getElementById( 'np' ).style.background =row2color;
		}
		
		if(tmpdiemdh < 19){
			if("en"==languageTmp){
				document.getElementById("danhgia").innerHTML = "Your Reading comprehension score is below 19, you should try more to avoid failed";
			}else{
				document.getElementById("danhgia").innerHTML = "Tổng điểm phần đọc hiểu của bạn dưới 19, bạn đã bị điểm liệt";
			}
			if(examLevel== "N3" || examLevel== "N4" || examLevel== "N5"){
				document.getElementById( 'danhgia' ).style.background =row2color;
			}
		}else{
			document.getElementById("danhgia").innerHTML = "";
		}
	}
	modal.style.display = "block";
}
function modalClose() {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
  }