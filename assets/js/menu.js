function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
};

document.addEventListener('click', function (event) {
    const menuButton = document.querySelector('.mobile-menu-icon button');
    const menuMobile = document.querySelector('.mobile-menu');

    if (!menuButton.contains(event.target) && !menuMobile.contains(event.target)) {
        menuMobile.classList.remove('open');
    }
});
