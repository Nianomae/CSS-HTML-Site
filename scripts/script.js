document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burgerButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;

    const openMenu = () => {
        mobileMenu.classList.add('mobile-menu--visible');
        body.classList.add('menu-open');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('mobile-menu--visible');
        body.classList.remove('menu-open');
    };

    burgerButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);

    const menuItems = mobileMenu.querySelectorAll('.mobile-menu-list a');
    menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
    });
});