// initialisation

let btnAdd = document.getElementById('btnAjouter');
let btnDel = document.getElementById('btnSupprimer');
let tabl = document.getElementById('maTable');

btnAdd.addEventListener('click',doAdd);
btnDel.addEventListener('click',doDel);

// Creation de l'entête de la table Thead
let newtr = document.createElement('tr');
let str = '<tr>';
str += '<th>Nom</th>';
str += '<th>Prenom</th>';
str += '<th>Né(e) le</th>';
str += '<th>Sexe</th>';

newtr.innerHTML = str;
tabl.appendChild(newtr);

// ligne 'tr' selectionée : 
// -1 veut dire aucune ligne
// couleur : pour sauvegarder la couleur (pink ou bleu)
// et la restaurer une fois la ligne déselectionnée
let sexeStr, sexeS;

let monTrSel = {ligne:-1, couleur : 'black'};
// =============================================================
function doAdd(){
    // on fonction du sexe on choisi la couleur de la ligne
    // et on adapte l'affichage 
     sexeStr = document.forms[0].sexe.value;
    let mycolor='';
    if (sexeStr == 'H'){
        sexeStr = 'Homme';
        mycolor = 'blue';
    }else {
        sexeStr = 'Femme';
        mycolor = 'pink';
    }
    // On crée la nouvelle ligne de la table
    newtr = document.createElement('tr');
    // on ajoute le contenu récupré dans le formulaire
    let str = '';
    str += '<td>'+ document.forms[0].nom.value +'</td>';
    console.log(document.forms[0].nom.value);
    
    str += '<td>'+ document.forms[0].prenom.value +'</td>';
    str += '<td>'+ document.forms[0].ddn.value +'</td>';
    
    str += '<td>'+ sexeStr +'</td>';
    
    newtr.innerHTML = str;
    // et la couleur
    newtr.style.color = mycolor;
    // on ajoute également la reaction à l'événement clic
    newtr.addEventListener('click',clicLigne);
    // et on l'attache à la table
    tabl.appendChild(newtr);
   
    var infos =  document.forms[0].prenom.value + " " +  document.forms[0].ddn.value + " " + sexeStr;
    creerCookie(document.forms[0].nom.value,infos,2);
}

// =============================================================
function clicLigne(){
    // On deselectionne l'ancienne ligne selectionnée
    // on restaure sa couleur : rose ou bleu
    if(monTrSel.ligne != -1){
        tabl.childNodes[monTrSel.ligne+1].style.color = monTrSel.couleur;
        tabl.childNodes[monTrSel.ligne+1].style.backgroundColor = 'white'
    }
    // On sauve la nouvelle ligne selectionnée
    // on sauve aussi sa couleur
    // et on la passe à : green/orange
    monTrSel.ligne = this.rowIndex;
    monTrSel.couleur = this.style.color;
    tabl.childNodes[this.rowIndex+1].style.color = 'green';
    tabl.childNodes[this.rowIndex+1].style.backgroundColor = "orange";
}

// =============================================================
function doDel(){
    // On verifie si il y a une ligne selectionée
    // Si oui : on la supprime 
    if(monTrSel.ligne != -1){
        console.log(tabl.childNodes[monTrSel.ligne+1]);
        tabl.childNodes[monTrSel.ligne+1].remove();
        monTrSel.ligne = -1;
    }
}

// =============================================================
function creerCookie(nom,valeur,tps) {

    var dateFinCookie = new Date();
    dateFinCookie.setTime(
      dateFinCookie.getTime() + 24 * tps * 60 * 60 * 1000
    );
    var expires = "expires=" + dateFinCookie.toUTCString();
    
    document.cookie = nom + "=" + valeur + ";" + expires;

    

}

// =============================================================
var getCookies = function(){
    var pairs = document.cookie.split("; ");
    var cookies = {};
    for (var i=0; i<pairs.length; i++){
      var pair = pairs[i].split("=");
      cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
    }
    return cookies;
  }

var myCookies = getCookies();
alert(myCookies); // "do not tell you"