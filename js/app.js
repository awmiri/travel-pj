let $ = document;

const getBtn = $.querySelector('.nav__btn');
let addClass = false ;
getBtn.addEventListener('click' , function() {
    if (addClass) {
        
        getBtn.classList.remove('nav__btn--open');
        addClass = false;
    }else{
        getBtn.classList.add('nav__btn--open');
        addClass = true;

    }
});