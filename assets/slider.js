(function () {
let cards = document.querySelectorAll('.card');
let sliderButtons = document.querySelectorAll('.slider-button');
let prevSliderCards = [];

function getCard() {
    setTimeout(function() {
        let sliderArray = getUniqueArray(3);
        for (i=0;i<cards.length;i++) {
            cards[i].innerHTML = `                        <img src="${pets[sliderArray[i]].img}" alt=${pets[sliderArray[i]].name}>
            <h3>${pets[sliderArray[i]].name}</h3>
            <button class="button secondary">Learn more</button>`;
            cards[i].id = sliderArray[i];
        }
    ;}, 300);
}

getCard();





function slider() {
    for (i=0;i<sliderButtons.length;i++) {
        sliderButtons[i].onclick = function() {
            if (this.id === 'next-slide') {
                getCard()
                slideLeftEffect()
            }
            if (this.id === 'previous-slide') {
                getCard()
                slideRightEffect()
            }
        }
    }
}

slider()

function getUniqueArray(count) {
    let array = [];
    for (i=0;array.length<count;i++) {
       let x = Math.floor(Math.random() * 8)
       if (!array.includes(x) && !prevSliderCards.includes(x)) {
        array.push(x)
       }
    }
    prevSliderCards = array.slice();
    return array;
}

}());