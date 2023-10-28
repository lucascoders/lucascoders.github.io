const sr = new ScrollReveal();

const revealElements = [
 { query: '.navbar-brand', delay: 50 },
 { query: '.navbar-toggler', delay: 100 },
 { query: '.navbar-toggler-icon', delay: 150 },
 { query: '.nav-link', delay: 100 },
];

revealElements.forEach(({ query, delay }) => {
 sr.reveal(query, {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px',
    delay,
 });
});
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelectorAll('.car button');

    button.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Producto añadido al carrito');
        });
    });
});