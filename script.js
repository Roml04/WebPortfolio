// Scroll to Section

const scrollToButton = document.getElementById('scrollToSection-btn');
const targetSection = document.getElementById('target-section');

scrollToButton.addEventListener('click', () => {

    targetSection.scrollIntoView({
        behavior: 'smooth'
    })

});