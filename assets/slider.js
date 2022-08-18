let prevSliderCards = [];

function getCard() {
    console.log(prevSliderCards, 'previous')
    let sliderArray = getUniqueArray(3);
    for (i=0;i<cards.length;i++) {
        cards[i].innerHTML = `                        <img src="${pets[sliderArray[i]].img}" alt=${pets[sliderArray[i]].name}>
        <h3>${pets[sliderArray[i]].name}</h3>
        <button class="button secondary">Learn more</button>`;
        cards[i].id = sliderArray[i];
    }
}

getCard();


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

function getUniqueArray(number) {
    let array = [];
    for (i=0;array.length<number;i++) {
       let x = Math.floor(Math.random() * 8)
       if (!array.includes(x) && !prevSliderCards.includes(x)) {
        array.push(x)
       }
    }
    prevSliderCards = array.slice();
    console.log(array, 'current')
    return array;
}