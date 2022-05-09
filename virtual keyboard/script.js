// const keyCodes = [27, 96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39 ,13 ,16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16, 17, 91, 18, 32, 37, 40, 39, 18, 17]
// let row1 = [27, 96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8];
// let row2 = [9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92]
// let row3 = [20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39 ,13]
// let row4 = [16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 38, 16]
// let row5 = [17, 91, 18, 32, 37, 40, 39, 18, 17]

// function init() {
//     let out = '';
//     for (i=0; i<row1.length; i++) {
//         if (i===15) {
//             out += '<button class="backspace" data="'+ keyCodes[i] +'">'+String.fromCharCode(row1[i])+'</button>';
//         };
//         out += "<button data=" +keyCodes[i] +">"+String.fromCharCode(row1[i])+"</button>";
//     }
//     document.querySelector('.keyboard').innerHTML = out;
// }

// init();

// document.onkeydown = function (event) {
//     document.querySelector('[data="' +event.keyCode +'"]').classList.add("active");
// }

// document.onkeyup = function (event) {
//     document.querySelector('[data="' +event.keyCode +'"]').classList.remove("active");
// }

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
const serviceKeys = ['Escape', 'Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

// var textInput = document.getElementById('keyboardTextArea');
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
}

document.onkeyup = function (e) {
    document.querySelector("."+e.code.toLowerCase()).classList.remove("active");
}
