window.addEventListener('load', () => {
    const audio = document.getElementById('lofi-bgm');

    audio.volume = 0.20;

    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});
