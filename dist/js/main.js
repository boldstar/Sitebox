const heroBtn = document.getElementById('nav-btn');
const navbarNav = document.getElementById('navbar-nav');

heroBtn.addEventListener('click', () => {
    if(navbarNav.style.display == 'none') {
        navbarNav.style.display = 'flex';
        navbarNav.style.marginBottom = '0';
    } else {
        navbarNav.style.display = 'none';
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