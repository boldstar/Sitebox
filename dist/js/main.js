const heroBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');
const navbarNav = document.getElementById('navbar-nav');

heroBtn.addEventListener('click', () => {
    if(nav.style.display == 'none') {
        nav.style.display = 'block';
        navbarNav.style.visibility = 'visible';
        navbarNav.style.flexDirection = 'column';
        navbarNav.style.position = 'relative';
    } else {
        nav.style.display = 'none';
    }
})