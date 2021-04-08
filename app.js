const closedMonkey = document.querySelector('.closed');
const openMonkey = document.querySelector('.open');

// add event listeners

closedMonkey.addEventListener('click', () => {
    if (openMonkey.classList.contains('open')) {
        openMonkey.classList.add('active');
        closedMonkey.classList.remove('active');
    }
});

openMonkey.addEventListener('click', () => {
    if (closedMonkey.classList.contains('close')) {
        closedMonkey.classList.add('active');
        closedMonkey.classList.remove('active');
    }
});



