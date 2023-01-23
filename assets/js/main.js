// console.log('main.js loaded');
const animationImg = document.querySelector('.animation-img');


animationImg.addEventListener('mouseover', function() {
    animationImg.style.transform = 'scale(1.05)';
});

animationImg.addEventListener('mouseout', function() {
    animationImg.style.transform = 'scale(1)';
});


window.onload = function() {
    var textLoad = document.querySelector('.text-load');
    textLoad.style.opacity = 1;
}


window.onload = function() {
    var textLoad = document.querySelector('.text-load');
    textLoad.style.opacity = 1;
}

window.onload = function() {
    var textLoad = document.querySelector('.text-load');
    textLoad.style.opacity = 1;
}


// Enable the text animation for the programmed text
let programmed_enabled = false;


const texts = ['Backend Developer', 'Interface Designer', 'Frontend Developer'];

let currentTextIndex = 0;
let currentLetterIndex = 0;

const programmedText = document.querySelector('.programmed-text');
const delay = 3000;
const letterDelay = 100;

function reset() {
    currentTextIndex = 0;
    currentLetterIndex = 0;
}

function type() {
    if (programmed_enabled) {

        if (currentLetterIndex < texts[currentTextIndex].length) {
            programmedText.textContent += texts[currentTextIndex][currentLetterIndex];
            currentLetterIndex++;
            setTimeout(type, letterDelay);
        } else {
            currentTextIndex++;
            currentLetterIndex = 0;
            if (currentTextIndex >= texts.length) {
                reset(); // reset the animation
            }
            setTimeout(() => {
                programmedText.textContent = "I'm a ";
                setTimeout(type, 1000);
            }, 2000);
        }

        //   reset();

        programmedText.textContent = "I'm a ";
        setTimeout(type, 1000);

    }

}

// repeat the function every 10 seconds, but show it right away the first time
// setInterval(type, 9000);
// type();


// const div = document.querySelector('.my-div');
// const divHeight = div.offsetHeight;

// window.addEventListener('scroll', function() {
//   if (window.scrollY > divHeight) {
//     document.querySelector('.fade-in').classList.add('show');
//   } else {
//     document.querySelector('.fade-in').classList.remove('show');
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
    const div = document.querySelector('.about div');
    const divHeight = div.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > divHeight) {
            document.querySelector('.fade-in').classList.add('show');
        } else {
            document.querySelector('.fade-in').classList.remove('show');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var aboutImg = document.querySelector('.about-img img');
    var aboutDiv = document.querySelector('.about');

    window.addEventListener('scroll', function() {
        // Get the position and size of the element
        var rect = aboutDiv.getBoundingClientRect();

        // Check if the top or bottom of the element is intersecting with the viewport
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
            // Use GSAP to animate the scale class
            TweenMax.to(aboutImg, 0.3, { scale: 1 });
        } else {
            // Use GSAP to remove the scale class
            TweenMax.to(aboutImg, 0.3, { scale: 1.1 });
        }
    });
});