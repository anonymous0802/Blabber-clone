const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');
const menuMobile = document.querySelector('.header__menu--mobile');

btnOn.addEventListener('click', function(){
    menuMobile.classList.add('appear');
})

btnOff.addEventListener('click', function(){
    menuMobile.classList.remove('appear');
})