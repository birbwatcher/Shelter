(function () {


let pageButtons = document.querySelectorAll('.pagination');
let pageCounter = 1;
let petsArray = getAllPets();

function cardsCount() {
    if (window.screen.width < 768) {
        return 3;
    } else if (window.screen.width < 1280 && window.screen.width >= 768) {
        return 6;
    } else if (window.screen.width >= 1280) {
        return 8;
    }
}

function createCards() {
    for (i=0;i<cardsCount();i++) {
        let card = document.createElement("div");
        document.querySelector(".cards-container").appendChild(card);
        card.classList.add("card")
    }
}

createCards()

let cards = document.querySelectorAll('.card');

function getCard() {
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].innerHTML = `                        <img src="${pets[petsArray[i + position()]].img}" alt=${pets[petsArray[i + position()]].name}>
            <h3>${pets[petsArray[i + position()]].name}</h3>
            <button class="button secondary">Learn more</button>`;
            cards[i].id = [petsArray[i + position()]];
        }
    }, 300);
}

getCard()

function pagePageCount() {
    if (window.screen.width < 768) {
        return 16;
    } else if (window.screen.width < 1280 && window.screen.width >= 768) {
        return 8;
    } else if (window.screen.width >= 1280) {
        return 6;
    }
}

function position() {
    return (48/pagePageCount()*(pageCounter-1))
}


function getPageNumber() {
    for (i=0;i<pageButtons.length;i++) {
        pageButtons[i].onclick = function () {
            if (this.id === 'go-next' && pageCounter < pagePageCount()) {
                pageCounter += 1;
                getCard();
                slideLeftEffect();
            }  else if (this.id === 'go-previous' && pageCounter > 1) {
                pageCounter -= 1;
                getCard();
                slideRightEffect()
            } else if (this.id === 'go-first-page') {
                pageCounter = 1;
                getCard();
            } else if (this.id === 'go-last-page') {
                pageCounter = pagePageCount();
                getCard();
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
            if (pageCounter === pagePageCount()) {
                document.getElementById('go-last-page').classList.add('button-round-inactive')
                document.getElementById('go-next').classList.add('button-round-inactive')
            }
            if (pageCounter < pagePageCount()) {
                document.getElementById('go-last-page').classList.remove('button-round-inactive')
                document.getElementById('go-next').classList.remove('button-round-inactive')
            }
        }
    }
}

getPageNumber()

function getAllPets() {
    let result = [];
    while(!(result.length === 48)) {
        result.push(...getArrayOfCards(8))
    }
    return result;
}

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

function cardClick() {
    for (i=0;i<cards.length;i++) {
        cards[i].onclick = function () {
            getPopup();
            updateCard(this.id);
        }
    }
}

cardClick();

function slideLeftEffect() {
    for (i=0;i<cards.length;i++) {
        cards[i].classList.add('slide-left');
    }
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].classList.remove('slide-left');
        } ;
    }, 300);
}

function slideLeftEffect() {
    for (i=0;i<cards.length;i++) {
        cards[i].classList.add('slide-left');
    }
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].classList.remove('slide-left');
        } ;
    }, 300);
}

function slideRightEffect() {
    for (i=0;i<cards.length;i++) {
        cards[i].classList.add('slide-right');
    }
    setTimeout(function() {
        for (i=0;i<cards.length;i++) {
            cards[i].classList.remove('slide-right');
        } ;
    }, 300);
}

}());