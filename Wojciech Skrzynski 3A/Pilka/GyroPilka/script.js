let canvas = document.getElementById("can");
let context = canvas.getContext("2d");
let pilka;
let wysokoscOkna;
let szerokoscOkna;
let pozycja;
let przyspieszenie;
let przeszkoda;


window.requestAnimationFrame = function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function(callback , element) {
        window.setTimeout(callback, 1000/60);
    }
}

window.onload = function () {
    start();
}

pilka = {
    x: 100,
    y:100,
    radius: 45,
    sAngle: 0,
    eAngle: 2*Math.PI
}

przeszkoda = {
    x: 0,
    y: 150,
    width: 500,
    height: 50
}

pozycja = {
    x: 0,
    y:0
}

przyspieszenie = {
    x: 0,
    y: 0
}

function rysujPrzeszkode() {
    context.beginPath();
    context.fillRect(przeszkoda.x,przeszkoda.y,przeszkoda.width,przeszkoda.height);   
}

function rysujPilke() {
    context.beginPath();
    context.arc(pilka.x,pilka.y,pilka.radius,pilka.sAngle,pilka.eAngle);
    context.fill();
}

function start() {
rysujPilke();
rysujPrzeszkode();
zdarzenia();
}


function zdarzenia() {
    window.addEventListener('deviceorientation',function(event) {
        przyspieszenie.x = Math.round(event.beta);
        przyspieszenie.y = Math.round(event.gamma);
    });
    

    pozycja.x += przyspieszenie.x;
    pozycja.y += przyspieszenie.y;

    szerokoscOkna = window.innerWidth;
    wysokoscOkna = window.innerHeight;

    if(pozycja.x > (wysokoscOkna - 100 ) && przyspieszenie.x > 0) {
        pilka.x = wysokoscOkna - 100;
    }
    if(pozycja.y > (szerokoscOkna - 100) && przyspieszenie.y > 0) {
        pilka.y = szerokoscOkna - 100 
    }
    if(pozycja.x < 0 && przyspieszenie.x > 0) {
        pozycja.x = 0;
    }

    if (pozycja.x < 0 && przyspieszenie.y > 0) {
        pozycja.y = 100;
    }

    pilka.x = pozycja.x;
    pilka.y = pozycja.y

    requestAnimationFrame(zdarzenia);
}

