function creerCookie(nom, valeur, nbreJours) {
    var dateFinCookie = new Date();
    dateFinCookie.setTime(
      dateFinCookie.getTime() + 24 * nbreJours * 60 * 60 * 1000
    );
    var expires = "expires=" + dateFinCookie.toUTCString();
    document.cookie = nom + "=" + valeur + ";" + expires + ";path=/";
    
  }