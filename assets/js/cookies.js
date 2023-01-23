// console.log('cookies.js loaded');
const cookies = document.getElementById('cookies');
const cookiesBtn = document.getElementById('cookies-btn');

// check if cookies are accepted already 

if (localStorage.getItem('cookies') == 'accepted') {
    cookies.classList.add('already-hidden');
}

cookiesBtn.addEventListener('click', () => {
    console.log('cookies accepted');
    // add class hide
    cookies.classList.add('hide');
    localStorage.setItem('cookies', 'accepted');
    // wait 1 second then remove hide and add already-hidden

    setTimeout(() => {
        cookies.classList.remove('hide');
        cookies.classList.add('already-hidden');
    });


});