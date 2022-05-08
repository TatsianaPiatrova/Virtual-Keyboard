let keys = document.querySelectorAll('.keys');
let space = document.querySelector('.space-key');
let shift_right = document.querySelector('.shift-right');
let shift_left = document.querySelector('.shift-left');
let caps_lock = document.querySelector('.caps-key');
let body = document.querySelector('body');
let enter = document.querySelector('.enter-key');
let tab = document.querySelector('.tab-key');
let backspace = document.querySelector('.backspace-key');
let ctrl_right = document.querySelector('.ctrl-right-key');
let ctrl_left = document.querySelector('.ctrl-left-key');
let alt_right = document.querySelector('.alt-right-key');
let alt_left = document.querySelector('.alt-left-key');
let keyboard = document.querySelector('.keyboard-keys');
const textArea = document.querySelector('textarea');
// const pos = textArea.selectionStart
// const start = textArea.value.slice(0, pos)
// const end = textArea.value.slice(pos)

for (let i = 0; i<keys.length; i++){
    keys[i].setAttribute('keyname', keys[i].innerText)
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
    if(keys[i].classList.contains('letter')){
        keys[i].textContent = `${keys[i].getAttribute('lowerCaseName')}`
    }
}

keyboard.addEventListener('click', function(keyEvent){  
    textArea.focus();
    const key = keyEvent.target.closest('.keys')
    for (let i = 0; i<keys.length; i++){
        if(key.getAttribute('keyname') == keys[i].getAttribute('keyname')){
            keys[i].classList.add('active');
            if(keys[i].classList.contains('letter') || keys[i].classList.contains('simbol'))
            textArea.value += keys[i].textContent;
            if(keys[i].classList.contains('backspace-key')){
                textArea.value = textArea.value.slice(0, textArea.selectionEnd - 1); 
            }
            if(keys[i].classList.contains('tab-key')){
                textArea.value += "     ";  
            }
            if(keys[i].classList.contains('enter-key')){
                textArea.value += '\n';  
            }  
            if(keys[i].classList.contains('pg-up-key')){
                textArea.selectionStart = 0;
                textArea.selectionEnd = 0; 
            } 
            if(keys[i].classList.contains('pg-down-key')){
                textArea.selectionStart += textArea.value.length;
                textArea.selectionEnd = textArea.selectionStart;
            } 
            if(keys[i].classList.contains('pg-left-key')){
                textArea.selectionEnd -= 1;
                textArea.selectionStart = textArea.selectionEnd;
            } 
            if(keys[i].classList.contains('pg-right-key')){
                textArea.selectionEnd += 1;
                textArea.selectionStart = textArea.selectionEnd; 
            }           
        }    
        setTimeout(()=>{
        keys[i].classList.remove('active')
        },200)
    }

})

// keyboard.addEventListener('mouseup', function(keyEvent){     
//     const key = keyEvent.target.closest('.keys')
//     for (let i = 0; i<keys.length; i++){
//         if(key.getAttribute('keyname') == keys[i].getAttribute('keyname')){
//             keys[i].classList.remove('active');
//             keys[i].classList.add('remove');            
//         }
//     }
// })

window.addEventListener('keydown', function(e){
    for (let i = 0; i<keys.length; i++){
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')){
            keys[i].classList.add('active');
            keys[i].classList.remove('remove');
            console.log(e.code)
            i = keys.length;
        }
        if(e.code == 'Space'){
            space.classList.add('active');
            i = keys.length;
        }
        if(e.code == 'ShiftLeft'){
            shift_right.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'ShiftRight'){
            shift_left.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'ControlLeft'){
            ctrl_right.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'ControlRight'){
            ctrl_left.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'AltLeft'){
            alt_right.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'AltRight'){
            alt_right.classList.remove('active');
            i = keys.length;
        }
        if(e.code == 'CapsLock'){
            caps_lock.classList.toggle('active');
            if(caps_lock.classList.contains('active'))
                localStorage.setItem('caps', 1);
            else localStorage.setItem('caps', 0);
            console.log(this.localStorage.getItem('caps'))
            if(this.localStorage.getItem('caps')==1)
            {
                for (let i = 0; i<keys.length; i++){
                    if(keys[i].classList.contains('letter')){
                        keys[i].setAttribute('toUpperCase', keys[i].innerText.toUpperCase())
                        keys[i].textContent = `${keys[i].getAttribute('toUpperCase')}`
                        console.log(keys[i].getAttribute('toUpperCase'))
                    }
                }
            }
            else{
                for (let i = 0; i<keys.length; i++){
                    if(keys[i].classList.contains('letter')){
                        keys[i].textContent = `${keys[i].getAttribute('lowerCaseName')}`
                        console.log(keys[i].getAttribute('lowerCaseName'))
                    }
            }
        }
            i = keys.length;
        }
        if(e.code == 'Backspace'){
            backspace.classList.add('active');
            i = keys.length;
        }
        if (e.code === "Tab") {
            tab.classList.add('active');
            e.preventDefault();
            textArea.value += "     ";  
            i = keys.length;
        }
    }
    console.log(textArea.textContent)
})

window.addEventListener('keyup', function(e){
    for (let i = 0; i<keys.length; i++){
        if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')){
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if(e.code == 'Space'){
            space.classList.remove('active');
            space.classList.add('remove');
        }
        if(e.code == 'ShiftLeft'){
            shift_right.classList.remove('active');
            shift_right.classList.remove('remove');
        }
        if(e.code == 'ShiftRight'){
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
        }
        if(e.code == 'ControlLeft'){
            ctrl_right.classList.remove('active');
            ctrl_right.classList.remove('remove');
        }
        if(e.code == 'ControlRight'){
            ctrl_left.classList.remove('active');
            ctrl_left.classList.remove('remove');
        }
        if(e.code == 'CapsLock'){
            caps_lock.classList.add('remove');
        }
        if(e.code == 'Backspace'){
            backspace.classList.remove('active');
            backspace.classList.add('remove');
        }
        setTimeout(()=>{
            keys[i].classList.remove('remove')
        },200)
    }
})


