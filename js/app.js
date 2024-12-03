let $ = document;

const getBtn = $.querySelector('.nav__btn');
const getNav = $.querySelector('.nav-menu');
const getHeartIcon = $.getElementsByClassName('heart__svg');
const getHeartContainer = $.querySelector('.destination--icon');
const pageLoader = $.querySelector('.loading_page');
let addClass = false ;
let hasHeartClass = false;

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
getHeartContainer.addEventListener("click" ,function () { 
    getHeartIcon.forEach( function (item) {
        if (hasHeartClass) {
            item.classList.remove('heart__svg-active');
            hasHeartClass = false;
        }else{
            item.classList.add('heart__svg-active')
            hasHeartClass = true;
        }     
    }); 
})
window.addEventListener('load' , function () {
    pageLoader.classList.add('loadering__page--diactive')
})
