//======================================
// Fonctions Utiles
//======================================

function dw(str) {
    document.write(str);
}
function dwn(str) {
    document.write(str+"<br>");
}
function getEBI(id) {
    return document.getElementById(id);
}
function addToBody(str){
    document.body.innerHTML += str;
}

//======================================
// Fonctions C
//======================================

function funcA1(str) {

    getEBI("mydiv").innerHTML = str;
}
function funcA2(str) {

    getEBI("mydiv").innerHTML += str;
}

function funcA3(T, S) {

    let myTags = document.getElementsByTagName(T);

    Array.from(myTags).forEach(item => {

        if (item.textContent.trim() == "" && item.children.length == 0 ) {
            item.innerHTML = "<strong style='color:red;'>" + S + "</strong>";
        } else {
            item.innerHTML += " <span>" + S + "</span>";
        }
    });
}

