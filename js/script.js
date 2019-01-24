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



// --- SLAJDER ---------
var slajder = document.getElementById('slajder');
var slika = document.getElementById('slika');
var br = 1;

function otvoriSlajder(klik) {
    slajder.style.display = 'block';
    slika.src = klik.src;
    br = klik.alt;
}

function slajderDesno() {
    if (br == 12)
        br = 0;
    slika.src = `img/${++br}.jpg`;
}

function slajderLevo() {
    if (br == 1)
        br = 13;
    slika.src = `img/${--br}.jpg`;
}

function slajderIzlaz() {
    slajder.style.display = "none";
}