// Scroll to Section

const scrollToButton = document.getElementById('scrollToSection-btn');
const targetSection = document.getElementById('target-section');

scrollToButton.addEventListener('click', () => {

    targetSection.scrollIntoView({
        behavior: 'smooth'
    })

});

// Carousel Functionality/Animation | Total Scrapped Code Ideas: 7

// data of the projects
const cardsDataArray = [
    {
        'image': 'url here',
        'title': 'KumoWrite',
        'dataset': 'data-active',
        'link': 'https://www.figma.com/design/6KkdTytUOkV54NlD5lmeDb/KumoWrite-Project?node-id=0-1&t=co0ZFjmIidh3MAwD-1'
    },
    {
        'image': 'url here',
        'title': 'Itori',
        'dataset': '',
        'link': 'https://www.figma.com/design/Sip3Zv93lDh2m02T8DkZFr/Itori---Coffee-Shop?node-id=0-1&t=9iVk0vMv3Pf8YW5u-1'
    },
    {
        'image': 'url here',
        'title': 'STI',
        'dataset': '',
        'link': 'https://www.figma.com/design/CQoIHKCYeXgpcXdxoekJLH/WEBPROG---Promotion-Page?node-id=0-1&t=FgSDYwoNZiHTQOnd-1'
    }
];

const cardSetContainer = document.querySelector('.carousel-cards-container');

renderProjectHTML();

function renderProjectHTML () {

    let newHTML = ``;

    // renders the cards with the data from the cardsDataArray
    for (let i = 0; i <cardsDataArray.length; i++) {
        const injectedHTMLcontents = `
            <li class="container-h project-card ${cardsDataArray[i].title.toLowerCase()}-card" ${cardsDataArray[i].dataset}>          
                <h3 class="title card-elements">.${cardsDataArray[i].title}</h3>
                <div class="link-container container-h gap0-5rem">
                    <a class="project-link card-elements" target="_blank" href="${cardsDataArray[i].link}" class="link">
                        Visit ${cardsDataArray[i].title}
                        <img class="icon-small link-icon" src="./assets/icons/redirect-icon.svg" alt="">
                    </a>
                </div>
            </li>`;

        // accumulates the injected HTML content
        newHTML += injectedHTMLcontents;
    }
    
    cardSetContainer.innerHTML = newHTML;
}

const navButtons = document.querySelectorAll('[data-carousel-button]');
let activeSlide = document.querySelector('[data-active]');

function translateCarouseltoRight() {

    if (!activeSlide.nextElementSibling) return; // exits if there are no next element

    const nextElement = activeSlide.nextElementSibling; 

    // calculates for the distance to which the carousel will be translated to
    const nextElementLeft = nextElement.getBoundingClientRect().left;
    const currentElementRight = activeSlide.getBoundingClientRect().right;
    const rowGapRight = nextElementLeft - currentElementRight;            
    const slideWidth = activeSlide.getBoundingClientRect().width;
    
    console.log('activeslide:', activeSlide);

    totalTranslationRight += slideWidth + rowGapRight; // accumulates the translation from the previous clicks

    cardSetContainer.style.transform = `translateX(-${totalTranslationRight}px)`; // translates the carousel container to right

    // updates the data-active to the new active slide
    activeSlide.removeAttribute('data-active');
    nextElement.setAttribute('data-active', 'true');

    activeSlide = nextElement;
    console.log('activeslide:', activeSlide);

}

function translateCarouseltoLeft() {

    if (!activeSlide.previousElementSibling) return; // exits if there are no prevous element

    const prevElement = activeSlide.previousElementSibling; 

    // calculates for the distance to which the carousel will be translated to
    const prevElementRight = prevElement.getBoundingClientRect().right;
    const currentElementLeft = activeSlide.getBoundingClientRect().left;
    const rowGapLeft = Math.abs(prevElementRight - currentElementLeft);            
    const slideWidth = activeSlide.getBoundingClientRect().width;

    console.log('activeslide:', activeSlide);
    console.log('prevelementRight:', prevElementRight);
    console.log('currentElementLeft:', currentElementLeft);
    console.log('rowGapLeft:', rowGapLeft);
    console.log('slideWidth:', slideWidth);
    
    totalTranslationLeft += slideWidth + rowGapLeft; // accumulates the translation from the previous clicks

    cardSetContainer.style.transform = `translateX(${totalTranslationLeft}px)`; // translates the carousel container to left

    // updates the data-active to the new active slide
    activeSlide.removeAttribute('data-active');
    prevElement.setAttribute('data-active', 'true');

    activeSlide = prevElement;

    console.log('activeslide:', activeSlide);

}

let totalTranslationLeft = 0;
let totalTranslationRight = 0;

const prevButton = document.querySelector('[data-carousel-button-left]');
const nextButton = document.querySelector('[data-carousel-button-right]');

prevButton.addEventListener('click', e=> {
    translateCarouseltoLeft();
    console.log('totTransLeft:', totalTranslationLeft);
});

nextButton.addEventListener('click', e=> {
    translateCarouseltoRight();
    console.log('totTransRigh:', totalTranslationRight);
});

// puts an event listener in each button
// navButtons.forEach(button => {

//     button.addEventListener('click', e => {
        
//         // checks whether the targeted element has an data attribute that has a 'next' or 'prev' value
//         if (e.target.dataset.carouselButton === 'next') {

//             translateCarouseltoRight();

//         } else if (e.target.dataset.carouselButton === 'prev') {
            
//             translateCarouseltoRight();

//         }

//     });

// });