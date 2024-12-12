// Scroll to Section

const scrollToButton = document.getElementById('scrollToSection-btn');
const targetSection = document.getElementById('target-section');

scrollToButton.addEventListener('click', () => {

    targetSection.scrollIntoView({
        behavior: 'smooth'
    })

});



// Carousel Functionality/Animation | Total Scrapped Code: 4

const cardsDataArray = [
    {
        'image': 'url here',
        'title': 'KumoWrite',
        'class': '',
        'link': 'https://www.figma.com/design/6KkdTytUOkV54NlD5lmeDb/KumoWrite-Project?node-id=0-1&t=co0ZFjmIidh3MAwD-1'
    },
    {
        'image': 'url here',
        'title': 'Itori',
        'class': 'active',
        'link': 'https://www.figma.com/design/Sip3Zv93lDh2m02T8DkZFr/Itori---Coffee-Shop?node-id=0-1&t=9iVk0vMv3Pf8YW5u-1'
    },
    {
        'image': 'url here',
        'title': 'STI',
        'class': '',
        'link': 'https://www.figma.com/design/CQoIHKCYeXgpcXdxoekJLH/WEBPROG---Promotion-Page?node-id=0-1&t=FgSDYwoNZiHTQOnd-1'
    }
];

const cardSetContainer = document.querySelector('.carousel-cards-container');

renderProjectHTML();

function renderProjectHTML () {

    let newHTML = ``;

    for (let i = 0; i <cardsDataArray.length; i++) {
        const injectedHTMLcontents = `
            <li class="container-h project-card ${cardsDataArray[i].title.toLowerCase()}-card ${cardsDataArray[i].class}">          
                <h3 class="title card-elements">.${cardsDataArray[i].title}</h3>
                <div class="link-container container-h gap0-5rem">
                    <a class="project-link card-elements" target="_blank" href="${cardsDataArray[i].link}" class="link">
                        Visit ${cardsDataArray[i].title}
                        <img class="icon-small link-icon" src="./assets/icons/redirect-icon.svg" alt="">
                    </a>
                </div>
            </li>`;

        newHTML += injectedHTMLcontents;
    }

    cardSetContainer.innerHTML = newHTML;
}

// carousel animation goes here

// Event delegation thingy

let centerCard = cardSetContainer.querySelector('.active');

cardSetContainer.addEventListener('click', (e) => {

    const clickedCard = e.target.closest('li');

    if(!clickedCard || clickedCard === centerCard) return;

    if(clickedCard === centerCard.nextElementSibling) {
        shiftCardsToRight();
    } else if (clickedCard === centerCard.previousElementSibling) {
        shiftCardsToLeft();
    }
});

function calculatePosition (isRightSide) {

    let amountToCenter = 0;
    let amountToMove = 0;
    
    try {

        console.log("centerCard at calculatePos", centerCard)
        amountToCenter = centerCard.getBoundingClientRect().left;
        amountToMove = isRightSide ? centerCard.nextElementSibling.getBoundingClientRect().left : centerCard.previousElementSibling.getBoundingClientRect().left;

    } catch (message) {
        console.log('something went wrong');
    }
    return [amountToMove, amountToCenter];

};

function shiftCardsToRight () {
    
    const [amountToMove, amountToCenter] = calculatePosition(true);
    cardSetContainer.style.transform = `translateX(-${amountToMove - amountToCenter}px)`;
    
    centerCard.nextElementSibling.classList.add('active');
    centerCard.classList.remove('active');

    centerCard = cardSetContainer.querySelector('.active');
    // centerCard = moveClasses(true);

    // updateListeners(centerCard);

};

function shiftCardsToLeft () {

    const [amountToMove, amountToCenter] = calculatePosition(false);
    cardSetContainer.style.transform = `translateX(${amountToCenter - amountToMove}px)`;

    centerCard.previousElementSibling.classList.add('active');
    centerCard.classList.remove('active');

    centerCard = cardSetContainer.querySelector('.active');

    // centerCard = moveClasses(false);

    // updateListeners(centerCard);

};