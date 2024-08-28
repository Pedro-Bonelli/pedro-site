const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-item');

let index = 0;
const intervalTime = 3000; // Tempo entre as transições em milissegundos (3 segundos)

// Função para mostrar o slide atual
function showSlide(n) {
    index = (n + slides.length) % slides.length; // Garante que o índice seja circular
    carousel.style.transition = 'transform 0.5s ease-in-out'; // Adiciona uma transição suave
    carousel.style.transform = `translateX(${-index * 100}%)`;
}

// Função para avançar para o próximo slide
function nextSlide() {
    showSlide(index + 1);
}

// Função para retroceder para o slide anterior
function prevSlide() {
    showSlide(index - 1);
}

// Adiciona eventos aos botões
prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide(); // Reseta o intervalo quando o usuário interage
});

nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide(); // Reseta o intervalo quando o usuário interage
});

// Inicializa o slide automático
let autoSlideInterval = setInterval(nextSlide, intervalTime);

// Função para resetar o slide automático
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Limpa o intervalo existente
    autoSlideInterval = setInterval(nextSlide, intervalTime); // Cria um novo intervalo
}

// Inicializa o primeiro slide
window.onload = function() {
    showSlide(index);
};
