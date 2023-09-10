const hiddenMenuButton = document.querySelector('.hamburger_button');
const hiddenHamburgerMenu = document.querySelector('.hamburger-nav');

hiddenMenuButton.addEventListener('click', () =>{
    hiddenHamburgerMenu.classList.toggle('active');
});