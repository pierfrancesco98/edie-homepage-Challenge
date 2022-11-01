const icon = document.querySelector('.menu-btn');
const navbar = document.querySelector('.menu');
const link = document.querySelectorAll('.menu-link');


icon.addEventListener('click', () => {
navbar.classList.toggle('active');
icon.classList.toggle('active');
link.forEach(element => {
    element.classList.toggle('active');
});
});