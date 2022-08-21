const menuIcon = document.querySelector('#menu');
const header = document.querySelector('.main-header')


menuIcon.addEventListener('click', function toggleMenu() {
    if (!header.classList.contains('mobile-nav')) {
        
        menuIcon.classList.remove('fa', 'fa-bars', 'fa-4x', 'icon-color');

        menuIcon.classList.add('fas', 'fa-times', 'fa-4x', 'icon-color');

        header.classList.add('mobile-nav');


    }   
    else {
        menuIcon.classList.remove('fas', 'fa-times', 'fa-4x', 'icon-color');
        
        menuIcon.classList.add('fa', 'fa-bars', 'fa-4x', 'icon-color');

        header.classList.remove('mobile-nav');
    } 
});

