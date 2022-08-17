let burger = document.querySelector('.burger');
let blackout = document.querySelector('.blackout');
let cards = document.querySelectorAll('.card');

burger.onclick = menuOpenClose;
blackout.onclick = function() {
    console.log(this)
    document.querySelector('.blackout').classList.remove('modal-active');
    document.body.classList.remove('noscroll');
    document.querySelector('.mobile-menu').classList.remove('show');
    document.querySelector('.modal-window').classList.remove('modal-active');
    burger.classList.remove('rotate');
};


function getModal() {
    document.querySelector('.blackout').classList.add('modal-active');
    document.body.classList.add('noscroll');


}

function menuOpenClose() {
    document.querySelector('.blackout').classList.toggle('modal-active');
    document.body.classList.toggle('noscroll');
    burger.classList.toggle('rotate');
    document.querySelector('.mobile-menu').classList.toggle('show');
}
function getCard() {
    for (i=0;i<cards.length;i++) {
        cards[i].innerHTML = `                        <img src="${pets[i].img}" alt=${pets[i].name}>
        <h3>${pets[i].name}</h3>
        <button class="button secondary">Learn more</button>`;
        cards[i].id = i;
    }
}

getCard();


function getPopup() {
    getModal();
    document.querySelector('.modal-window').classList.toggle('modal-active');
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
            console.log(this.id)
            getPopup();
            updateCard(this.id);
        }
    }
}

cardClick();








