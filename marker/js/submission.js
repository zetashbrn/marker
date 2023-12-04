var MDL = document.getElementById("MDL");
var BTN = document.getElementById("BTN");
var TUTUP = document.getElementsByClassName("TUTUP")[0];

var modal = document.getElementById("boxz");
var span = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("success")[0];
        
span.onclick = function() {
    modal.style.display = "none";
}

span1.onclick = function() {
    modal.style.display = "none";
    alert("Submitted")
}

BTN.onclick = function() {
    MDL.style.display = "block";
}
  
TUTUP.onclick = function() {
    MDL.style.display = "none";
}
     
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == MDL) {
        MDL.style.display = "none";
    }
}