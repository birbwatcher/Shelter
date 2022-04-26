//slider

(function() {

    let counter = 1;
    const width = window.innerWidth;
    let cards = 3;
    if (width < 768) {
        cards = 1;
    } else if (width < 1280) {
        cards = 2;
    }

    const getCardTemplate = (i) => {
        return  `<img src="${pets[i].img}" alt="${pets[i].name}">
        <p class="pets-card-title">${pets[i].name}</p>
        <button class="button">Learn more</button>`;
    }

    document.getElementsByClassName('button-round-right')[0].onclick = () => {
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*counter + i);
            document.getElementsByClassName('card')[i].classList.add('fade-in-animation');
            setTimeout(() => {
                document.getElementsByClassName('card')[i].classList.remove('fade-in-animation')
            },300);
        }
        counter = ++counter;
        if (counter === pets.length/cards) {
            counter = 1;
        }

    }

    document.getElementsByClassName('button-round-left')[0].onclick = () => {
        if (counter === 1) {
            counter = pets.length/cards;
        }

        counter = --counter;
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*(counter - 1) + i);
            document.getElementsByClassName('card')[i].classList.add('fade-in-animation');
            setTimeout(() => {
                document.getElementsByClassName('card')[i].classList.remove('fade-in-animation')
            },300);
        }

    }


})();