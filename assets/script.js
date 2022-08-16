document.querySelector('.burger').onclick = function () {
    document.querySelector('.blackout').classList.toggle('modal-active');
    document.body.classList.toggle('noscroll');
    document.querySelector('.burger').classList.toggle('rotate');
    document.querySelector('.mobile-menu').classList.toggle('show');
}
