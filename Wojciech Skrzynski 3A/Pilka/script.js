if ( !window.requestAnimationFrame ) {

    window.requestAnimationFrame = ( function() {
 
        return window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function( callback, element ) {
 
            window.setTimeout( callback, 1000 / 60 );
 
        };
 
    } )();
 
}



let canvas = document.getElementById("can");
let context = canvas.getContext("2d");
context.canvas.height = window.innerHeight;
context.canvas.width = window.innerWidth;
let pilka;
let wysokoscOkna;
let szerokoscOkna;
let pozycja;
let przyspieszenie;
let przeszkoda;





window.onload = function () {
    start();
    console.log(przyspieszenie.x)
}




przeszkoda = {
    x: 0,
    y: 150,
    width: 500,
    height: 50
}

pozycja = {
    x: 0,
    y: 0
}

przyspieszenie = {
    x: 0,
    y: 0
}
pilka = {
    x: 100 ,
    y: 100,
    radius: 25,
    sAngle: 0,
    eAngle: 2*Math.PI
}

function rysujPrzeszkode() {
    context.beginPath();
    context.fillRect(przeszkoda.x,przeszkoda.y,przeszkoda.width,przeszkoda.height);   
}

function rysujPilke() {
    context.beginPath();
    context.arc(pilka.x,pilka.y,pilka.radius,pilka.sAngle,pilka.eAngle);
    context.fillStyle="#0095DD";
    
    context.fill();   
    context.closePath();   
}

function rysuj() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rysujPilke();   
}



function zdarzenia() {
        window.addEventListener('deviceorientation',function(e){
    przyspieszenie.x = Math.round(e.gamma);
    przyspieszenie.y = Math.round(e.beta);
        }
        );

    szerokoscOkna = canvas.clientWidth;
    wysokoscOkna = canvas.clientHeight;
    
    pozycja.x += przyspieszenie.x;
    pozycja.y += przyspieszenie.y;

    

    if(pozycja.y > (wysokoscOkna - 100 ) && przyspieszenie.y > 0) {
        pozycja.y = wysokoscOkna - 100;
    }
    if(pozycja.x > (szerokoscOkna - 100) && przyspieszenie.x > 0) {
        pozycja.x = szerokoscOkna - 100 
    }
    if(pozycja.x < 0 && przyspieszenie.x < 0) {
        pozycja.x = 0;
    }

    if (pozycja.y < 0 && przyspieszenie.y < 0) {
        pozycja.y = 0;
    }

    pilka.x = pozycja.x;
    pilka.y = pozycja.y

    requestAnimationFrame(zdarzenia);
    
}

let rysujInterwal = function() {
    setInterval(rysuj,1);
}

function start() {
    rysujInterwal();
    zdarzenia();
    
    
    
    
    }
