let i = 1;
let active = true;

document.getElementById("clic").addEventListener("click", function(e) {
    if (active == true) {
        document.getElementById("compteurClics").innerHTML = i;
        i++;
    } else {

    }
});

document.getElementById("desactiver").addEventListener("click", function(e) {
    e.stopImmediatePropagation();
    active = false;
    document.getElementById("activer").innerHTML = "<button>Activer le comptage</button>";
});

document.getElementById("activer").addEventListener("click", function(e) {
    e.preventDefault();
    active = true;
    document.getElementById("compteurClics").innerHTML = "0";
    i = 1;
    document.getElementById("activer").innerHTML = "";

});