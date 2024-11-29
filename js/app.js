let $ = document;

const getBtn = $.querySelector('.nav__btn');
const getNav = $.querySelector('.nav-menu');
const getHeartIcon = $.querySelector('.heart__svg')
const getHeartContainer = $.querySelector('.destination--icon')
let addClass = false ;

getBtn.addEventListener('click' , function() {
    if (addClass) {
        getBtn.classList.remove('nav__btn--open');
        getNav.style.left = '-25rem'
        addClass = false;
    }else{
        getBtn.classList.add('nav__btn--open');
        getNav.style.left = '0rem'
        addClass = true;
    }
});

// getHeartContainer.addEventListener('click' , function () {
//     $.getHeartIcon.style.backg
// })