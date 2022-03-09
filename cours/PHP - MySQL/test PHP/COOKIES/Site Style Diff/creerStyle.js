function creerStyle(style){
    
    console.log(style);
    document.getElementById("monStyle").href=style;
    creerCookie("style", style, 15);
}