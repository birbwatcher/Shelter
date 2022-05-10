const rowKey = ['Esc','`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowKey2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const rowKey3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const rowKey4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const rowKey5 = ['Ctrl', 'Win', 'Alt', ' ', '◄', '▼', '►', 'Alt', 'Ctrl']
const rowCode = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const rowCode2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const rowCode3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const rowCode4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const rowCode5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight', 'ControlRight'];
const serviceKeys = ['Escape', 'Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Keyboard', 'keyboard-row'];

var textInput = document.createElement("textarea")
var keyboard = document.createElement("div");
var keyboardRow = document.createElement("div");
textInput.setAttribute('rows','10');
textInput.setAttribute('cols','96');


document.body.appendChild(textInput);
document.body.appendChild(keyboard);
keyboard.classList.add('keyboard');
keyboard.appendChild(keyboardRow);
keyboardRow.classList.add('keyboard-row');


function myKeyboard(key, code) {
    let row1 = '';
    for (i=0; i<key.length; i++) {
        row1 += '<button class="'+code[i].toLowerCase()+'">' + key[i] + '</button>';
    }
    document.querySelector('.keyboard').innerHTML += '<div class="keyboard-row">'+ row1 + '</div>';
}

myKeyboard(rowKey,rowCode);
myKeyboard(rowKey2,rowCode2);
myKeyboard(rowKey3,rowCode3);
myKeyboard(rowKey4,rowCode4);
myKeyboard(rowKey5,rowCode5);

document.onkeydown = function (e) {
    console.log(e.code);
    document.querySelector("."+e.code.toLowerCase()).classList.add("active");
    if (e.key === 'Backspace') {
        e.preventDefault();
        textInput.value = textInput.value.slice(0, -1);
    }
    if (!serviceKeys.includes(e.code)) {
        e.preventDefault();
        textInput.value += e.key;
    }
    if (e.key === 'Shift') {
        console.log('meow');
    }
}

document.onkeyup = function (e) {
    document.querySelector("."+e.code.toLowerCase()).classList.remove("active");
}

window.addEventListener('click', function(e) {
    if (!serviceKeys.find(el => el.toLowerCase() == e.target.className)) {
        textInput.value += e.target.innerHTML;
    } else if (e.target.className === 'backspace') {
        e.preventDefault();
        textInput.value = textInput.value.slice(0, -1);
    } else if (e.target.className === 'space') {
        textInput.value +=" ";
    }
});
