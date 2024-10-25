function sideBar(){
    let sidebar = document.querySelector('.menu-bar');
    sidebar.style.display = 'block';
}
function closeMenu(){
    let closeMenu = document.querySelector('.menu-bar');
    closeMenu.style.display = 'none';
}
function closeMenu(){
    let menu = document.querySelector('.menu-bar');
    menu.classList.add('hide-element');

    menu.addEventListener('animationend', () => {
        menu.style.display = 'none';
        menu.classList.remove('hide-element');
    }, { once: true });
}