(function () {
    'use strict';
    
    let 
        createNote,
        addNoteBtnEl;  
    
    createNote = function () {
      let stickerEl = document.createElement('div')
      let barEl = document.createElement('div')
      let textareaEl = document.createElement('textarea');
      
      var transformCSSValue = "translateX(" + 200+ "px) translateY(" + Math.random + "px)";
      
      stickerEl.style.transform = transformCSSValue ; 
      
      stickerEl.appendChild(barEl);
      stickerEl.appendChild(textareaEl); 
      document.body.appendChild(stickerEl);
    };
    
    createNote(); 
    
    addNoteBtnEl = document.querySelector('.addNoteBtn');
    addNoteBtnEl.addEventListener('click', createNote, false);
    
  })();