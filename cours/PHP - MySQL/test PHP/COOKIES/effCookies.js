function effacerCookie(nom) {
    var dateFinCookie = new Date();
    dateFinCookie.setTime(dateFinCookie.getTime() - 1);
    var expires = "expires=" + dateFinCookie.toUTCString();
    document.cookie = nom + "=nimps;" + expires + ";path=/";
  }