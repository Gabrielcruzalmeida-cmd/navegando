// ================= MENU MOBILE =================

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// ================= FORMULÁRIO =================

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Mensagem enviada com sucesso!');

    form.reset();

});