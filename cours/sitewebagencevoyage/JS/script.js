/* -------------------------------------------------------------------------- */
/*                           MODIFICATION DE LIMAGE                           */
/* -------------------------------------------------------------------------- */



const jsimg = document.getElementById("imgsousmenu");
const imgs = ["url(/assets/IMG/mountains-gefa7c9b51_640.jpg)", " url(/assets/IMG/morocco-g9f4d3ea2a_640.jpg)", "url(/assets/IMG/kimono-g03b9db239_640.jpg)", "url(/assets/IMG/aurora-g592c68bfe_640.jpg)"]
let count = 0;

jsimg.addEventListener('mouseenter', function() {
    // this.style.border = "green";
    if (count == 3) {
        count = 0
    } else {
        count += 1
    }

    this.style.backgroundImage = imgs[count]
})



/* -------------------------------------------------------------------------- */
/*                               LA CALCULATRICE                              */
/* -------------------------------------------------------------------------- */
const jsaddition = document.getElementById("addition");
const jssoustraction = document.getElementById("soustraction");
const jsmultiplication = document.getElementById("multiplication");
const jsdivision = document.getElementById("division");



jsaddition.addEventListener('click', function() {

    const jsnbr1 = parseFloat(document.getElementById("nbr1").value);
    const jsnbr2 = parseFloat(document.getElementById("nbr2").value);

    console.log(jsnbr1, jsnbr2)
    document.getElementById("totale").innerText = (jsnbr1 + jsnbr2);
})


jssoustraction.addEventListener('click', function() {

    const jsnbr1 = parseFloat(document.getElementById("nbr1").value);
    const jsnbr2 = parseFloat(document.getElementById("nbr2").value);

    console.log(jsnbr1, jsnbr2)
    document.getElementById("totale").innerText = (jsnbr1 - jsnbr2);
})

jsmultiplication.addEventListener('click', function() {

    const jsnbr1 = parseFloat(document.getElementById("nbr1").value);
    const jsnbr2 = parseFloat(document.getElementById("nbr2").value);

    console.log(jsnbr1, jsnbr2)
    document.getElementById("totale").innerText = (jsnbr1 * jsnbr2);
})

jsdivision.addEventListener('click', function() {

    const jsnbr1 = parseFloat(document.getElementById("nbr1").value);
    const jsnbr2 = parseFloat(document.getElementById("nbr2").value);

    console.log(jsnbr1, jsnbr2)
    document.getElementById("totale").innerText = (jsnbr1 / jsnbr2);
})

/* -------------------------------------------------------------------------- */
/*                                 LES CERCLES                                */
/* -------------------------------------------------------------------------- */

function zoomImg(img) {

    const taille = img.style.transform;

    if (taille === "scale(1.2)") {
        img.style.transform = "scale(1)";
    } else {

        img.style.transform = "scale(1.2)";
    }
}

/* -------------------------------------------------------------------------- */
/*                             CHANGEMENT DE THEME                            */
/* -------------------------------------------------------------------------- */

// const jsete = document.documentElement.className("csshiver");

console.dir(document)


function cssete() {


    // document.documentElement.className("cssete")

    // const jscorps = document.getElementById("corps");
    const jscorps = document.documentElement
    jscorps.className = "cssete";
}

function csshiver() {


    // document.documentElement.className("cssete")

    // const jscorps = document.getElementById("corps");
    const jscorps = document.documentElement
    jscorps.className = "csshiver";
}