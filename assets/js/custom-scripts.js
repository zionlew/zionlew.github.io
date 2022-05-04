function btnTest() {

    alert("ok1");
}

function nav() {
    location.href = "../index.html";
}

function sentence_t() {
    if (document.getElementById("sentence_t").style.display == "block") {
        document.getElementById("sentence_t").style.display = "none"
    } else {
        document.getElementById("sentence_t").style.display = "block"
    }
}

function sentence_def() {
    if (document.getElementById("sentence_def").style.display == "block") {
        document.getElementById("sentence_def").style.display = "none"
    } else {
        document.getElementById("sentence_def").style.display = "block"
    }
}

function sentence_next() {

    var maxCnt = 3
    sid = Math.floor(Math.random() * (maxCnt - 1)) + 1;
    sid = sid + parseInt(document.getElementById("s_id").value);
    if (sid > maxCnt) { sid = sid - maxCnt }
    location.href = "../../riyu/sentence" + sid + ".html";

}

function sentence_grammar() {
    location.href = "../../riyu/grammar1.html";
}
