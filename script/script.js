import keyboardHTML from './keyboard.js';

let body = document.querySelector('body');
body.innerHTML = keyboardHTML;


let keys = document.querySelectorAll('.keys');
let space = document.querySelector('.space-key');
let shift_right = document.querySelector('.shift-right');
let shift_left = document.querySelector('.shift-left');
let caps_lock = document.querySelector('.caps-key');
let tab = document.querySelector('.tab-key');
let backspace = document.querySelector('.backspace-key');
let ctrl_right = document.querySelector('.ctrl-right-key');
let ctrl_left = document.querySelector('.ctrl-left-key');
let alt_right = document.querySelector('.alt-right-key');
let alt_left = document.querySelector('.alt-left-key');
let keyboard = document.querySelector('.keyboard-keys');
let arrowRight = document.querySelector('.pg-right-key');
let arrowLeft = document.querySelector('.pg-left-key');
let arrowUp = document.querySelector('.pg-up-key');
let arrowDown = document.querySelector('.pg-down-key');

const textArea = document.querySelector('textarea');
const simbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '/', ':', '"', '<', '>', '?']

function shiftClick() {
    let j = 0;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('simbol')) {
            keys[i].textContent = simbols[j];
            j++;
        }
        if (keys[i].classList.contains('letter')) {
            keys[i].textContent = `${keys[i].getAttribute('toUpperCase')}`
        }
    }
}

function shiftUp() {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('letter')) {
            keys[i].textContent = `${keys[i].getAttribute('lowerCaseName')}`
        }
        if (keys[i].classList.contains('simbol')) {
            keys[i].textContent = `${keys[i].getAttribute('keyname')}`
        }
    }
}

function capsClick() {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('letter')) {
            keys[i].textContent = `${keys[i].getAttribute('toUpperCase')}`
        }
    }
}

function capsUp() {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].classList.contains('letter')) {
            keys[i].textContent = `${keys[i].getAttribute('lowerCaseName')}`
        }
    }
}


for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText)
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
    keys[i].setAttribute('toUpperCase', keys[i].innerText.toUpperCase())
    if (keys[i].classList.contains('letter')) {
        keys[i].textContent = `${keys[i].getAttribute('lowerCaseName')}`
    }
}

keyboard.addEventListener('mousedown', function (keyEvent) {
    textArea.focus();
    const key = keyEvent.target.closest('.keys')
    for (let i = 0; i < keys.length; i++) {
        try {
            if (key.getAttribute('keyname') == keys[i].getAttribute('keyname')) {
                keys[i].classList.add('active');
                if (keys[i].classList.contains('caps-key') && localStorage.getItem('caps') == 1) {
                    localStorage.setItem('caps', 0);
                    keys[i].classList.remove('active');
                    keys[i].classList.add('remove');
                    capsUp();
                    return
                }
                if (keys[i].classList.contains('caps-key') && localStorage.getItem('caps') == 0) {
                    keys[i].classList.add('active');
                    capsClick();
                    localStorage.setItem('caps', 1);
                    return
                }
                if (keys[i].classList.contains('shift-key')) {
                    shiftClick();
                }
                if (keys[i].classList.contains('letter') || keys[i].classList.contains('simbol'))
                    textArea.value += keys[i].textContent;
                if (keys[i].classList.contains('backspace-key')) {
                    textArea.value = textArea.value.slice(0, textArea.selectionEnd - 1);
                }
                if (keys[i].classList.contains('tab-key')) {
                    textArea.value += "     ";
                }
                if (keys[i].classList.contains('space-key')) {
                    textArea.value += " ";
                }
                if (keys[i].classList.contains('enter-key')) {
                    textArea.value += '\n';
                }
                if (keys[i].classList.contains('pg-up-key')) {
                    textArea.selectionStart = 0;
                    textArea.selectionEnd = 0;
                }
                if (keys[i].classList.contains('pg-down-key')) {
                    textArea.selectionStart += textArea.value.length;
                    textArea.selectionEnd = textArea.selectionStart;
                }
                if (keys[i].classList.contains('pg-left-key')) {
                    textArea.selectionEnd -= 1;
                    textArea.selectionStart = textArea.selectionEnd;
                }
                if (keys[i].classList.contains('pg-right-key')) {
                    textArea.selectionEnd += 1;
                    textArea.selectionStart = textArea.selectionEnd;
                }
            }
            setTimeout(() => {
                if (keys[i].classList.contains('caps-key') && localStorage.getItem('caps')) {
                    return
                }
                else
                    keys[i].classList.remove('active')
            }, 200)
        } catch (error) {
            console.log('no buttons')
        }
    }
})


keyboard.addEventListener('mouseup', function (keyEvent) {
    const key = keyEvent.target.closest('.keys')
    for (let i = 0; i < keys.length; i++) {
        try {
            if (key.getAttribute('keyname') == keys[i].getAttribute('keyname')) {
                if (keys[i].classList.contains('shift-key')) {
                    shiftUp();
                }
            }
        } catch (error) {
            console.log('no buttons')
        }
    }
})


window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active');
            keys[i].classList.remove('remove');
            i = keys.length;
        }
        if (e.code == 'Space') {
            space.classList.add('active');
            i = keys.length;
        }
        if (e.code == 'ShiftLeft') {
            shiftClick();
            shift_left.classList.add('active')
            i = keys.length;
        }
        if (e.code == 'ShiftRight') {
            shiftClick();
            shift_right.classList.add('active');
            i = keys.length;
        }
        if (e.ctrlKey) {
            e.preventDefault();
            if (e.code == 'ControlLeft') {
                ctrl_left.classList.add('active');
                ctrl_right.classList.remove('active');
                i = keys.length;
            }
            if (e.code == 'ControlRight') {
                ctrl_right.classList.add('active');
                ctrl_left.classList.remove('active');
                i = keys.length;
            }
        }
        if (e.altKey) {
            e.preventDefault();
            if (e.code == 'AltLeft') {
                alt_left.classList.add('active');
                alt_right.classList.remove('active');
                i = keys.length;
            }
            if (e.code == 'AltRight') {
                alt_right.classList.add('active');
                alt_left.classList.remove('active');
                i = keys.length;
            }
        }
        if (e.code == 'CapsLock') {
            caps_lock.classList.toggle('active');
            if (caps_lock.classList.contains('active'))
                localStorage.setItem('caps', 1);
            else localStorage.setItem('caps', 0);
            if (this.localStorage.getItem('caps') == 1) {
                capsClick()
            }
            else {
                capsUp();
            }
            i = keys.length;
        }
        if (e.code == 'Backspace') {
            backspace.classList.add('active');
            i = keys.length;
        }
        if (e.code === "Tab") {
            tab.classList.add('active');
            e.preventDefault();
            textArea.value += "     ";
            i = keys.length;
        }
        if (e.code == "ArrowRight") {
            arrowRight.classList.add('active');
            i = keys.length;
        }
        if (e.code == "ArrowLeft") {
            arrowLeft.classList.add('active');
            i = keys.length;
        }
        if (e.code == "ArrowUp") {
            arrowUp.classList.add('active');
            i = keys.length;
        }
        if (e.code == "ArrowDown") {
            arrowDown.classList.add('active');
            i = keys.length;
        }
    }
})

window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
        if (e.code == 'Space') {
            space.classList.remove('active');
            space.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            shiftUp();
            shift_left.classList.remove('active');
            shift_left.classList.add('remove');
            shift_right.classList.remove('remove');
        }
        if (e.code == 'ShiftRight') {
            shiftUp();
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
        }
        if (e.code == 'ControlLeft') {
            ctrl_left.classList.remove('active');
            ctrl_left.classList.add('remove');
        }
        if (e.code == 'ControlRight') {
            ctrl_right.classList.remove('active');
            ctrl_right.classList.add('remove');
        }
        if (e.code == 'AltLeft') {
            alt_left.classList.remove('active');
            alt_left.classList.add('remove');
            alt_right.classList.remove('remove');
        }
        if (e.code == 'AltRight') {
            alt_right.classList.remove('active');
            alt_right.classList.add('remove');
            alt_left.classList.remove('remove');
        }
        if (e.code == 'CapsLock') {
            caps_lock.classList.add('remove');
        }
        if (e.code == 'Backspace') {
            backspace.classList.remove('active');
            backspace.classList.add('remove');
        }
        if (e.code == "ArrowRight") {
            arrowRight.classList.remove('active');
            arrowRight.classList.add('remove');
        }
        if (e.code == "ArrowLeft") {
            arrowLeft.classList.remove('active');
            arrowLeft.classList.add('remove');
        }
        if (e.code == "ArrowUp") {
            arrowUp.classList.remove('active');
            arrowUp.classList.add('remove');
        }
        if (e.code == "ArrowDown") {
            arrowDown.classList.remove('active');
            arrowDown.classList.add('remove');
        }
        setTimeout(() => {
            keys[i].classList.remove('remove')
        }, 200)
    }
})


