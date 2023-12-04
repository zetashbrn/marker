var MDL = document.getElementById("MDL");
var BTN = document.getElementById("BTN");
var TUTUP = document.getElementsByClassName("TUTUP")[0];

var boxz1 = document.getElementById("boxz1");
var clist = document.getElementById("clist");
var clist1 = document.getElementById("clist1");
var close1 = document.getElementsByClassName("close1")[0];

BTN.onclick = function() {
    MDL.style.display = "block";
}

TUTUP.onclick = function() {
    MDL.style.display = "none";
}

clist1.onclick = function() {
    boxz1.style.display = "block";
}

clist.onclick = function() {
    boxz1.style.display = "block";
}
  
close1.onclick = function() {
    boxz1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == boxz1) {
      boxz1.style.display = "none";
    }

    if (event.target == MDL) {
        MDL.style.display = "none";
    }
}

