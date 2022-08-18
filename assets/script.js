let burger = document.querySelector('.burger');
let blackout = document.querySelector('.blackout');
let cards = document.querySelectorAll('.card');
let modalCloseButton = document.querySelector('.modal-close-button');
let modalWindow = document.querySelector('.modal-window');
let pageButtons = document.querySelectorAll('.pagination');
let sliderButtons = document.querySelectorAll('.slider-button');
let pageCounter = 1;
let previousArray = [];

function getWindowResolution() {
    if (window.screen.width < 768) {
        return 16;
    } else if (window.screen.width < 1280 && window.screen.width >= 768) {
        return 8;
    } else if (window.screen.width >= 1280) {
        return 6;
    }
}


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
// function getCard() {
//     for (i=0;i<cards.length;i++) {
//         cards[i].innerHTML = `                        <img src="${pets[i].img}" alt=${pets[i].name}>
//         <h3>${pets[i].name}</h3>
//         <button class="button secondary">Learn more</button>`;
//         cards[i].id = i;
//     }
// }

function getCard() {
    console.log(previousArray, 'previous')
    let sliderArray = getUniqueArray(3);
    for (i=0;i<cards.length;i++) {
        cards[i].innerHTML = `                        <img src="${pets[sliderArray[i]].img}" alt=${pets[sliderArray[i]].name}>
        <h3>${pets[sliderArray[i]].name}</h3>
        <button class="button secondary">Learn more</button>`;
        cards[i].id = sliderArray[i];
    }
}

getCard();


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


function getPageNumber() {
    for (i=0;i<pageButtons.length;i++) {
        pageButtons[i].onclick = function () {
            if (this.id === 'go-next' && pageCounter < getWindowResolution()) {
                pageCounter += 1;
            }  else if (this.id === 'go-previous' && pageCounter > 1) {
                pageCounter -= 1;
            } else if (this.id === 'go-first-page') {
                pageCounter = 1;
            } else if (this.id === 'go-last-page') {
                pageCounter = getWindowResolution();
            }
            document.getElementById('actual-page').innerHTML = `<h4>${pageCounter}</h4>`;
            if (pageCounter > 1) {
                document.getElementById('go-first-page').classList.remove('button-round-inactive')
                document.getElementById('go-previous').classList.remove('button-round-inactive')
            } 
            if (pageCounter === 1) {
                document.getElementById('go-first-page').classList.add('button-round-inactive')
                document.getElementById('go-previous').classList.add('button-round-inactive')
            } 
            if (pageCounter === getWindowResolution()) {
                document.getElementById('go-last-page').classList.add('button-round-inactive')
                document.getElementById('go-next').classList.add('button-round-inactive')
            } 
            if (pageCounter < getWindowResolution()) {
                document.getElementById('go-last-page').classList.remove('button-round-inactive')
                document.getElementById('go-next').classList.remove('button-round-inactive')
            }
        }
    }
}

getPageNumber()

function slider() {
    for (i=0;i<sliderButtons.length;i++) {
        sliderButtons[i].onclick = function() {
            if (this.id === 'next-slide') {
                getCard()
            }
            if (this.id === 'previous-slide') {
                getCard()
            }
        } 
    }
}

slider()

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min));
}
// 2,1,5
//4,0,3
//6,5,2

function getUniqueArray(number) {
    let array = [];
    for (i=0;array.length<number;i++) {
       let x = Math.floor(Math.random() * 8)
       if (!array.includes(x) && !previousArray.includes(x)) {
        array.push(x)
       }
    }
    previousArray = array.slice();
    console.log(array, 'current')
    return array;
}

// console.log(getUniqueArray(3))