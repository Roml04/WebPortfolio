document.getElementById('scrollToSection-btn').addEventListener('click', function () {
    document.getElementById('target-section').scrollIntoView({
        behavior: 'smooth'
    });
});