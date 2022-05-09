const button = document.getElementsByTagName('button');
var myTextArea = document.getElementById('keyboardTextArea');

window.addEventListener('click', function(e) {
    if (e.target.className === 'letter') {
        myTextArea.value += e.target.innerHTML;
    }
    console.log(e.target.innerHTML);
});

document.onkeypress = function (e) {
    console.log(e);
   };
