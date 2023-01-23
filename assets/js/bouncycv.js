// console.log('bouncycv.js loaded');
let button = document.querySelector('.button-cv');

button.addEventListener('mouseenter', function() {
    // create confetti particles
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
        confetti.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        confetti.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.appendChild(confetti);
    }
});

button.addEventListener('mouseleave', function() {
    // remove confetti particles
    let confetti = document.querySelectorAll('.confetti');
    confetti.forEach(function(c) {
        c.parentNode.removeChild(c);
    });
});