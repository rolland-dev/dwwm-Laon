function lieCookie(nom) {
    var nameEgal = nom + "="; // je récupère le nom du cookies et =
    var toutCookie = document.cookie.split(';'); // je sépare mes cookie dans un tableau

    for(var i=0;i < toutCookie.length;i++) {
        var tampon = toutCookie[i].trim(); // enlève les espaces

        if (tampon.indexOf(nameEgal) == 0){ // si cookie trouvé par rapport au nom
            return (tampon.substring(nameEgal.length)); // je prends la valeur juste aprés mon nom=
        }
    }
    return null;
}