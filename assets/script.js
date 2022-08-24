let burger = document.querySelector('.burger');
let blackout = document.querySelector('.blackout');
let modalCloseButton = document.querySelector('.modal-close-button');
let modalWindow = document.querySelector('.modal-window');

let cards = document.querySelectorAll('.card');

burger.onclick = menuOpenClose;
blackout.onclick = function() {
    blackout.classList.remove('modal-active');
    document.body.classList.remove('noscroll');
    document.querySelector('.mobile-menu').classList.remove('show');
    modalWindow.classList.remove('modal-active');
    burger.classList.remove('rotate');
};

modalCloseButton.onclick = function () {
        blackout.classList.remove('modal-active');
        document.body.classList.remove('noscroll');
        modalWindow.classList.toggle('modal-active');
}

function getModal() {
    blackout.classList.add('modal-active');
    document.body.classList.add('noscroll');
}

function menuOpenClose() {
    blackout.classList.toggle('modal-active');
    document.body.classList.toggle('noscroll');
    burger.classList.toggle('rotate');
    document.querySelector('.mobile-menu').classList.toggle('show');
}

function getPopup() {
    getModal();
    modalWindow.classList.toggle('modal-active');
}

function updateCard(i) {
    document.querySelector('.pet-popup').innerHTML = `
    <div class="pet-popup">
    <div class="pet-popup-image">
        <img src="${pets[i].img}">
    </div>
    <div class="pet-popup-content">
        <h2>${pets[i].name}</h2>
                <h3>${pets[i].type} - ${pets[i].breed}</h3>
                <h5>${pets[i].description}</h5>
                <div class="pet-deseases">
                    <ul>
                        <li><h5><b>Age:</b> ${pets[i].age}</h5></li>
                        <li><h5><b>Inoculations:</b> ${pets[i].inoculations}</h5></li>
                        <li><h5><b>Diseases: </b>${pets[i].diseases}</h5></li>
                        <li><h5><b>Parasites: </b>${pets[i].parasites}</h5></li>
                </ul>
            </div>
        </div>
    </div>`;
}

function cardClick() {
    for (i=0;i<cards.length;i++) {
        cards[i].onclick = function () {
            getPopup();
            updateCard(this.id);
        }
    }
}

cardClick();

function getArrayOfCards(count) {
    let array = [];
    for (i=0;array.length<count;i++) {
       let x = Math.floor(Math.random() * 8)
       if (!array.includes(x)) {
        array.push(x)
       }
    }
    return array;
}

