"use strict"

import objOfKeys from './buttons.js';
createBase();

const changeLanguage=[false,false];
let pressShift=false;
let pressCaps=false;
let languageOfKeyboard=localStorage.languageOfKeyboard || 'ru';
let cursor;


function createBase() {
    let main=document.createElement('main');
    document.querySelector('body').prepend(main);
    let input = document.createElement('textarea');
    document.querySelector('main').prepend(input);
    let keyboard=document.createElement('section');
    keyboard.className="keyboard";
    document.querySelector('main').append(keyboard);
}

if(languageOfKeyboard=='eng') {
    keyFill("eng");
}
else {
    keyFill("ru");
}

function keyFill(language) {
    document.querySelector('.keyboard').innerHTML='';
    if(language == "ru") {
        for(let item of objOfKeys) {
            let key = document.createElement('div');
            key.className=item.size;
            key.className+= ' ' + item.code;
            if(item.view=='double') {
                key.innerHTML='<p class="upLetter">'+item.shiftRuValue+'</p>';
                key.innerHTML+='<p class="centerDoubleLetter">'+item.ruValue+'</p>';
            }
            else key.innerHTML='<p class="centerLetter">'+item.shiftRuValue+'</p>';
            document.querySelector('.keyboard').append(key);
        }
    }
    if(language == "eng") {
        for(let item of objOfKeys) {
            let key = document.createElement('div');
            key.className=item.size;
            key.className+= ' ' + item.code;
            if(item.view=='double') {
                key.innerHTML='<p class="upLetter">'+item.shiftEngValue+'</p>';
                key.innerHTML+='<p class="centerDoubleLetter">'+item.engValue+'</p>';
            }
            else key.innerHTML='<p class="centerLetter">'+item.shiftEngValue+'</p>';
            document.querySelector('.keyboard').append(key);
        }
    }
    document.querySelector('body').setAttribute('onselectstart', "return false");
    document.querySelector('textarea').setAttribute('autofocus', '');

}


document.querySelector('body').addEventListener('mousedown',(e)=> {
    cursor=document.querySelector('textarea').selectionStart;
    console.log(cursor);
    let parent = e.target.parentElement;
    let elem = e.target;
    if(elem.tagName=='DIV') elem.classList.add('buttonClick');
    else if (parent.tagName=='DIV') parent.classList.add('buttonClick');
    for(let item of objOfKeys) {
        if(elem.classList.contains(item.code) || parent.classList.contains(item.code)) {
            enterSymbols(item);
        }
    }
});


document.querySelector('body').addEventListener('mouseup',(e)=> {
    let parent = e.target.parentElement;
    let elem = e.target;
    if(parent.classList.contains('buttonClick') || elem.classList.contains('buttonClick')) {
        if(elem.tagName=='DIV') elem.classList.remove('buttonClick');
        else if (parent.tagName=='DIV') parent.classList.remove('buttonClick');
        if(elem.classList.contains('language') || parent.classList.contains('language')) {
            if(localStorage.languageOfKeyboard=='ru') {
                keyFill("eng");
                localStorage.languageOfKeyboard="eng";
            }
            else {
                keyFill("ru");
                localStorage.languageOfKeyboard="ru";
            }
        }
    }
    else {
        document.querySelectorAll('div').forEach((e)=>e.classList.remove('buttonClick'));
    }
    

    

});


document.querySelector('body').addEventListener('keydown', (e)=>{
    event.preventDefault();
    console.log(event.code);    
    cursor=document.querySelector('textarea').selectionStart;
    for(let item of objOfKeys) {
        if (item.code==event.code) {
            document.querySelector(`.${item.code}`).classList.add('buttonClick');
            if(item.code == 'ShiftLeft') {
                changeLanguage[0]=true;
            }
            else { 
                if(item.code == 'AltLeft') {
                    changeLanguage[1]=true;
                    event.preventDefault();
                }
                else {
                    changeLanguage[0]=false;
                    changeLanguage[1]=false;
                } 
            }
            console.log(changeLanguage[0]==true&&changeLanguage[1]==true);
            if(item.code == 'ShiftLeft' || item.code == 'ShiftRight') pressShift = true;
            enterSymbols(item);
        }
    }
});


document.querySelector('body').addEventListener('keyup', (e)=>{    
    for(let item of objOfKeys) {
        if (item.code==event.code) {
            document.querySelector(`.${item.code}`).classList.remove('buttonClick');
            if(item.code=='CapsLock') pressCaps=(!pressCaps);
            if(item.code == 'ShiftLeft' || item.code == 'ShiftRight') pressShift = false;
            if ((item.code == 'ShiftLeft' || item.code == 'AltLeft') && (changeLanguage[0]==true&&changeLanguage[1]==true)) {
                changeLanguage[0]=false;
                changeLanguage[1]=false;
                if(localStorage.languageOfKeyboard=='ru') {
                    keyFill("eng");
                    localStorage.languageOfKeyboard='eng';
                }
                else {
                    keyFill("ru");
                    localStorage.languageOfKeyboard='ru';
                }
            }
        }
    }
});

function enterSymbols (item) {
    if(item.code=="Enter") {
        document.querySelector('textarea').value=document.querySelector('textarea').value.slice(0,cursor)+'\n'+document.querySelector('textarea').value.slice(cursor,document.querySelector('textarea').value.length);
        document.querySelector('textarea').selectionEnd=cursor+1;
    }
    if(item.code=="Backspace") {
        if (cursor!=0) {
            document.querySelector('textarea').value=document.querySelector('textarea').value.slice(0,cursor-1)+document.querySelector('textarea').value.slice(cursor,document.querySelector('textarea').value.length);
            document.querySelector('textarea').selectionEnd=cursor-1;
        }
    } 
    if(item.code=="Delete")  {
        document.querySelector('textarea').value=document.querySelector('textarea').value.slice(0,cursor)+document.querySelector('textarea').value.slice(cursor+1,document.querySelector('textarea').value.length);
        document.querySelector('textarea').selectionEnd=cursor;
    }
    if(item.type=="write") {
        write(item);
    }
}

function write (item) {
    if(item.view!="double") {
        if(pressShift || pressCaps) {
            if (localStorage.languageOfKeyboard=='ru') document.querySelector('textarea').value += item.shiftRuValue;
            if (localStorage.languageOfKeyboard=='eng') document.querySelector('textarea').value += item.shiftEngValue;
        }
        else {
            if (localStorage.languageOfKeyboard=='ru') document.querySelector('textarea').value += item.shiftRuValue.toLowerCase();
            if (localStorage.languageOfKeyboard=='eng') document.querySelector('textarea').value += item.shiftEngValue.toLowerCase();
        }
    }
    else {
        if (item.shiftRuValue=='' && localStorage.languageOfKeyboard=='ru') {
            if(pressShift || pressCaps) {
                document.querySelector('textarea').value += item.ruValue;
            }
            else document.querySelector('textarea').value += item.ruValue.toLowerCase();
        }
        else {
            if(pressShift) {
                if (localStorage.languageOfKeyboard=='ru') document.querySelector('textarea').value += item.shiftRuValue;
                if (localStorage.languageOfKeyboard=='eng') document.querySelector('textarea').value += item.shiftEngValue;
            }
            else {
                if (localStorage.languageOfKeyboard=='ru') document.querySelector('textarea').value += item.ruValue;
                if (localStorage.languageOfKeyboard=='eng') document.querySelector('textarea').value += item.engValue;
            }
        }
    }
}


