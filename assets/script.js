let burger = document.querySelector('.burger');
let blackout = document.querySelector('.blackout');

burger.onclick = menuOpenClose;
blackout.onclick = menuOpenClose;

function menuOpenClose() {
    document.querySelector('.blackout').classList.toggle('modal-active');
    document.body.classList.toggle('noscroll');
    document.querySelector('.burger').classList.toggle('rotate');
    document.querySelector('.mobile-menu').classList.toggle('show');
}

