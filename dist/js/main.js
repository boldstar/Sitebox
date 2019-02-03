const heroBtn = document.getElementById('nav-btn');
const nav = document.getElementById('nav');
const navbarNav = document.getElementById('navbar-nav');

heroBtn.addEventListener('click', () => {
    if(nav.style.display == 'none') {
        nav.style.display = 'block';
        navbarNav.style.visibility = 'visible';
        navbarNav.style.marginBottom = '0';
    } else {
        nav.style.display = 'none';
    }
})

const header = document.getElementById('header');

window.onscroll = function() {
    stickyHeader();
}

function stickyHeader() {
    if(window.pageYOffset > 0) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}