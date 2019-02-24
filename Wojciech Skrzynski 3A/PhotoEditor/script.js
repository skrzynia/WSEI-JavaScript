let image = new Image();
image.src = 'https://mdn.mozillademos.org/files/5397/rhino.jpg';
let sepiaInt;
let szaroscInt;

image.onload = function() {
    draw(image);
};

function draw(image) {
    let canvas = document.getElementById("can");
    let ctx = canvas.getContext("2d");
    canvas.setAttribute('width',image.width);
    canvas.setAttribute('height',image.height);
    ctx.drawImage(image, 0, 0,canvas.clientWidth,canvas.clientHeight); 
    image.style.display = 'none';
   

    let szarosc = function() {
        interwalSzarosc(100);
        clearInterval(sepiaInt);
          }
        
    let sepia = function () {
        interwalSepia(100);
        clearInterval(szaroscInt)
          }
     
    let rozmycie = function() {
        
        let value = document.getElementById("wartosc-rozmycie").value;
        let rozmycie = "blur"+"(" + value + "px)";
        console.log(value);
        canvas.style.filter = rozmycie; 
        clearInterval(szaroscInt);
        clearInterval(sepiaInt);  
    }
    
    
    function interwalSepia(time){
      sepiaInt =  setInterval(function(){
            let value = document.getElementById("suwak-sepia").value;
         let styl = "sepia" +"(" + value + "%)";
        console.log(value);
        canvas.style.filter = styl;
        },time);
    }

    
    function interwalSzarosc(time){
       szaroscInt = setInterval(function(){
            let value = document.getElementById("suwak-szarosc").value;
         let styl = "grayscale" +"(" + value + "%)";
        console.log(value);
        canvas.style.filter = styl;
        },time);
    }

    

        let sepiabtn = document.getElementById("sepia");
        sepiabtn.addEventListener("click",sepia)
        let szaroscbtn = document.getElementById("szarosc");
        szaroscbtn.addEventListener("click",szarosc);
        let rozmyciecbtn = document.getElementById("rozmycie");
        rozmyciecbtn.addEventListener("click",rozmycie);


let suwakbtn = document.getElementById("suwak-sepia");
        let wartoscSepia = document.getElementById("wartosc-sepia");
        wartoscSepia.innerHTML = suwakbtn.value; 

suwakbtn.oninput = function() {
    wartoscSepia.innerHTML = this.value;
  }

  let suwakszarosc = document.getElementById("suwak-szarosc");
        let wartoscSzarosc = document.getElementById("wartosc-szarosc");
        wartoscSzarosc.innerHTML = suwakszarosc.value; 

suwakszarosc.oninput = function() {
    wartoscSzarosc.innerHTML = this.value;
  }

   
}
