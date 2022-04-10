function showDetail() {



    //alert(document.getElementsByClassName("textdetail")[0].style.display);
    if (document.getElementsByClassName("textdetail")[0].style.display == "") {
      //'alert("ok1");
        document.getElementsByClassName("textdetail")[0].style.display = "block";
        document.getElementById("btn1").innerText = "隐藏原文";
    } else {
     //'alert("ok2");
        document.getElementsByClassName("textdetail")[0].style.display = "";
        document.getElementById("btn1").innerText = "显示原文";
    }
}
function showAnswer() {



} 