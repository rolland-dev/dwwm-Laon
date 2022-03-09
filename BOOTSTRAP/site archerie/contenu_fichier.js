function afficherContenuMobile(url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = afficher;
    request.open("GET", url);
    request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    request.send(null);

    function afficher() {
        if (request.readyState == 4) {
            var emplacement = document.getElementById("contenufichier");
            var texte = request.responseText;
            emplacement.innerHTML = texte;
        }
    }
}