// Change balloon colors dynamically
const balloons = document.querySelectorAll('.balloon');

balloons.forEach((balloon) => {
    setInterval(() => {
        balloon.style.background = `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()})`;
    }, 1000);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Fade-in effect for photos
window.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo img');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.style.transform = 'scale(1)';
            photo.style.opacity = '1';
        }, index * 500);
    });
});
