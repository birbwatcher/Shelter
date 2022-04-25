

(function() {
    let counter = 1;
    const width = window.innerWidth;
    let cards = 8;
    if (width < 768) {
        cards = 3;
    } else if (width < 1280) {
        cards = 6;
    }

    const getTemplate = (i) => {
        return  `<div class="modal-window">
        <button class="modal-close-button"><img src="../../assets/modal-close-button.png" alt="close"></button>
        <div class="modal-content">
            <img src="${pets[i].img}" alt="${pets[i].name}">
            <div class="modal-content-content">
                <h2>${pets[i].name}</h2>
                <h4>${pets[i].type} - ${pets[i].breed}</h4>
                <p>${pets[i].description}</p>
                <ul>
                    <li><span><b>Age:</b> ${pets[i].age}</span></li>
                    <li><span><b>Inoculations:</b> ${pets[i].inoculations}</span></li>
                    <li><span><b>Diseases:</b> ${pets[i].diseases}</span></li>
                    <li><span><b>Parasites:</b> ${pets[i].parasites}</span></li>
                </ul>
            </div>
        </div>
    </div>`;
    }

    function refreshCards() {
        for (let i = 0; i < document.getElementsByClassName('card').length; i++) {
            document.getElementsByClassName('card')[i].onclick = () => createPopup((counter - 1)*cards + i);
        }
    }

    const getCardTemplate = (i) => {
        return  `<img src="${pets[i].img}" alt="${pets[i].name}">
        <p class="pets-card-title">${pets[i].name}</p>
        <button class="button">Learn more</button>`;
    }

    function hideElements() {
        document.getElementsByClassName('main-mobile-menu')[0].classList.remove('show');
        document.getElementsByClassName('burger')[0].classList.remove('rotate');
        document.getElementsByClassName('overlay')[0].classList.remove('show');
        document.getElementsByTagName('body')[0].classList.remove('no-scroll');
        document.getElementsByTagName('html')[0].classList.remove('no-scroll');
        document.getElementsByClassName('modal-window')[0].remove();
    }

    function createPopup(i) {
            document.getElementsByClassName('overlay')[0].classList.toggle('show');
            document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
            document.getElementsByTagName('html')[0].classList.toggle('no-scroll');
            var newDiv = document.createElement("div");
            newDiv.innerHTML = getTemplate(i);
        my_div = document.getElementById("overlay");
        document.body.insertBefore(newDiv, my_div);
        document.getElementsByClassName('modal-close-button')[0].onclick = hideElements;
    }

    document.getElementsByClassName('burger')[0].onclick = function() {
        this.classList.toggle('rotate');
        document.getElementsByClassName('main-mobile-menu')[0].classList.toggle('show');
        document.getElementsByClassName('overlay')[0].classList.toggle('show');
        document.getElementsByTagName('body')[0].classList.toggle('no-scroll');
        document.getElementsByTagName('html')[0].classList.toggle('no-scroll');
    }

    document.getElementsByClassName('overlay')[0].onclick = hideElements;
    document.getElementsByClassName('main-mobile-menu')[0].onclick = hideElements;

    refreshCards();

    // pagination
    document.getElementById('counter').innerText = counter;

    document.getElementById('next').onclick = function() {
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*counter + i);
        }
        counter = ++counter;
        document.getElementById('counter').innerText = counter;
        if (counter === pets.length/cards) {
            this.classList.add('button-round-inactive');
            document.getElementById('last').classList.add('button-round-inactive');
        }
        document.getElementById('prev').classList.remove('button-round-inactive');
        document.getElementById('first').classList.remove('button-round-inactive');
        refreshCards();
    }

    document.getElementById('last').onclick = function() {
        counter = pets.length/cards; 
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*(counter - 1) + i);
        }
        document.getElementById('counter').innerText = counter;
        this.classList.add('button-round-inactive');
        document.getElementById('next').classList.add('button-round-inactive');
        document.getElementById('prev').classList.remove('button-round-inactive');
        document.getElementById('first').classList.remove('button-round-inactive');
        refreshCards();
    }

    document.getElementById('prev').onclick = function() {
        counter = --counter;
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*(counter - 1) + i);
        }
        document.getElementById('counter').innerText = counter;
        if (counter === 1) {
            this.classList.add('button-round-inactive');
            document.getElementById('first').classList.add('button-round-inactive')
        }
        document.getElementById('next').classList.remove('button-round-inactive');
        document.getElementById('last').classList.remove('button-round-inactive');
        refreshCards();
    }

    document.getElementById('first').onclick = function() {
        counter = 1;
        for (let i = 0; i < cards; i++) {
            document.getElementsByClassName('card')[i].innerHTML = getCardTemplate(cards*(counter - 1) + i);
        }
        document.getElementById('counter').innerText = counter;
        this.classList.add('button-round-inactive');
        document.getElementById('prev').classList.add('button-round-inactive');
        document.getElementById('next').classList.remove('button-round-inactive');
        document.getElementById('last').classList.remove('button-round-inactive');
        refreshCards();
    }
})();