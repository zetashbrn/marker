var MDL = document.getElementById("MDL");
var BTN = document.getElementById("BTN");
var TUTUP = document.getElementsByClassName("TUTUP")[0];

BTN.onclick = function() {
  MDL.style.display = "block";
}

TUTUP.onclick = function() {
  MDL.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == MDL) {
    MDL.style.display = "none";
  }
}