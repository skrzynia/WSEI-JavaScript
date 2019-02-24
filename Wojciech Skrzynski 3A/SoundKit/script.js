let channel1 = [];
let channel2 = [];
let channel3 = [];
let channel4 = [];
let bool = false;
let audio; 
let audio1;
let music;
let o = 0;
let muzyka =window.addEventListener('keydown',function(e) {
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);

    audio.currentTime = 0;
    audio.play();
    channel1[o] = e.keyCode;
        o+=1;
    music = document.getElementById("odt1").addEventListener("click",function(){
        for(let i = 0; i< channel1.length; i++) {
            audio1 = document.querySelector(`audio[data-key="${channel1[i]}"]`);
            audio1.currentTime = 0;
            audio1.play();
    }     
    })
})



