let $ = document;

const getBtn = $.querySelector('.nav__btn');
const getNav = $.querySelector('.nav-menu');
const getHeartIcon = $.getElementsByClassName('heart__svg');
const getHeartContainer = $.querySelectorAll('.destination--icon');
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

getHeartContainer.forEach(function(heart) {
    heart.addEventListener("click", function () {
        for (let i = 0; i <1; i++) {
            let heartIcon = this.querySelector('.heart__svg'); 
        
        let isActiveIcon = heartIcon.classList.contains('heart__svg-active'); 

        if (isActiveIcon) {
            heartIcon.classList.remove('heart__svg-active');
        } else {
            heartIcon.classList.add('heart__svg-active');
        }
            
        }
    });
});
window.addEventListener('load' , function () {
    pageLoader.classList.add('loadering__page--diactive')
})
