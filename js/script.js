var ime = 'Luka Nićiforović';
var prikazIme = document.getElementById('ime');
var i = 0;

function ispisiIme() {
    if(i < ime.length)
        prikazIme.innerHTML += ime[i++];
}

ispisiIme();
setInterval(ispisiIme, 300);