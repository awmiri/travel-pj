let $ = document;

const getBtn = $.querySelector('.nav__btn');
const getNav = $.querySelector('.nav-menu');
const getHeartIcon = $.querySelector('.heart__svg');
const getHeartContainer = $.querySelector('.destination--icon');
const getdistination = $.querySelector('.destination');
const getShowBtn = $.querySelector('.destinations__btn--active');
const deActiveElem = $.querySelector('.destination--hidde');
let addClass = false ;
let hasHeartClass = false;
let show = true;

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

getHeartContainer.addEventListener('click' , function () {
    if (hasHeartClass) {
        getHeartIcon.classList.remove('heart__svg-active');
        hasHeartClass = false;
    }else{
        getHeartIcon.classList.add('heart__svg-active')
        hasHeartClass = true;
    }
})
getShowBtn.addEventListener('click' , function () {
    getdistination.classList.remove('destination--hidde') 
})