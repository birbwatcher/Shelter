const rowKey = ['Esc','`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const rowKeyS = ['Esc', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace']
const rowKey2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const rowKeyS2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'];
const rowKey3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const rowKeyS3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'];
const rowKey4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const rowKeyS4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'];
const rowKey5 = ['Ctrl', 'Win', 'Alt', ' ', '◄', '▼', '►', 'Alt', 'Ctrl']
const rowCode = ['Escape', 'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
const rowCode2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const rowCode3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const rowCode4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const rowCode5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'AltRight', 'ControlRight'];
const serviceKeys = ['Escape', 'Backspace', 'Tab', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Keyboard', 'keyboard-row'];
const rowBel2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'ў', 'з', 'х', "'", '\\'];
const rowBel3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
const rowBel4 = ['Shift', 'я', 'ч', 'с', 'м', 'і', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'];

let mova = false;

var wrapper = document.createElement("div");
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

var textInput = document.createElement("textarea")
var keyboard = document.createElement("div");
var keyboardRow = document.createElement("div");
var description = document.createElement('div');
textInput.setAttribute('rows','10');
textInput.setAttribute('cols','96');


// document.body.appendChild(textInput);
// document.body.appendChild(keyboard);
wrapper.appendChild(textInput);
wrapper.appendChild(keyboard);
keyboard.classList.add('keyboard');
keyboardRow.classList.add('keyboard-row');

description.innerHTML = `<p>Клавіятура створана ў аперацыйнай сістэме Windows</p><p>Для пераключэння мовы (ENG <-> BY) выкарыстоўвайце Ctrl + Alt</>`;
wrapper.appendChild(description);


function myKeyboard(key, code) {
    let row1 = '';
    for (i=0; i<key.length; i++) {
        row1 += '<button class="'+code[i].toLowerCase()+'">' + key[i] + '</button>';
    }
    document.querySelector('.keyboard').innerHTML += '<div class="keyboard-row">'+ row1 + '</div>';
}

function myKeyboardShift(key, code) {
    let row1 = '';
    for (i=0; i<key.length; i++) {
        row1 += '<button class="'+code[i].toLowerCase()+'">' + key[i].toUpperCase() + '</button>';
    }
    document.querySelector('.keyboard').innerHTML += '<div class="keyboard-row">'+ row1 + '</div>';
}

function myKeyboardBel(key, code) {
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


function changeLanguage() {
    if (mova === true) {
    keyboard.innerHTML = '';
    myKeyboard(rowKeyS,rowCode);
    myKeyboardBel(rowBel2,rowCode2);
    myKeyboardBel(rowBel3,rowCode3);
    myKeyboardBel(rowBel4,rowCode4);
    myKeyboard(rowKey5,rowCode5);
    } else if (mova === false) {
    keyboard.innerHTML = '';
    myKeyboard(rowKey,rowCode);
    myKeyboard(rowKey2,rowCode2);
    myKeyboard(rowKey3,rowCode3);
    myKeyboard(rowKey4,rowCode4);
    myKeyboard(rowKey5,rowCode5);
    }
}

document.onkeydown = function (e) {
    if (!e.repeat) {
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
            keyboard.innerHTML = '';
            console.log('meow');
            myKeyboard(rowKeyS,rowCode);
            myKeyboardShift(rowKeyS2,rowCode2);
            myKeyboardShift(rowKeyS3,rowCode3);
            myKeyboardShift(rowKeyS4,rowCode4);
            myKeyboard(rowKey5,rowCode5);
        }

        if (e.altKey === true && e.ctrlKey === true) {
            mova = !mova;
            console.log(mova)
            changeLanguage();
        }
    }
}



document.onkeyup = function (e) {
    document.querySelector("."+e.code.toLowerCase()).classList.remove("active");

    if (e.key === 'Shift') {
        keyboard.innerHTML = '';
        console.log('meow');
        myKeyboard(rowKey,rowCode);
        myKeyboard(rowKey2,rowCode2);
        myKeyboard(rowKey3,rowCode3);
        myKeyboard(rowKey4,rowCode4);
        myKeyboard(rowKey5,rowCode5);
    }
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
