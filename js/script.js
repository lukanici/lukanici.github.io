var ime = 'Luka Nićiforović';
var prikazIme = document.getElementById('ime');
var i = 0;

function ispisiIme() {
    if(i < ime.length)
        prikazIme.innerHTML += ime[i++];
}

ispisiIme();
setInterval(ispisiIme, 300);

var meni = document.getElementById('meni');
var prikazan = false;
function prikaziMeni() {
    if (prikazan) {
        meni.style.display = "none";
        prikazan = false;
    }
    else {
        meni.style.display = "block";
        prikazan = true;
    }
}

window.onresize = function(e) {
    if (window.innerWidth > 616)
        meni.style.display = "block";
    else {
        if (prikazan)
            meni.style.display = "block";
        else
            meni.style.display = "none";
    }
}

var idiGore = document.getElementById('idiGore');
window.onscroll = function(e) {
    if (window.scrollY > 50)
        idiGore.style.display = "block";
    else
        idiGore.style.display = "none";
}