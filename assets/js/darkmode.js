// darkmode
// console.log('darkmode.js loaded');
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.querySelector('body');

if (localStorage.getItem('cookies') != 'accepted') {
    localStorage.setItem('theme', 'dark');
}

// if localstorage is not empty
if (localStorage.getItem('theme') == 'dark') {
    body.classList.toggle('dark');
} else {
    body.classList.remove('dark');
}


toggleBtn.addEventListener('click', () => {
    if (localStorage.getItem('theme') == 'dark') {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        // else
    } else {
        body.classList.toggle('dark');
        localStorage.setItem('theme', 'dark');
    }
});


// if cookies isnt set set darkmode to darkmode