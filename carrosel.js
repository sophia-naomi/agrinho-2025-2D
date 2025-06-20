let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar/retroceder os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para exibir um slide específico (clicando nos pontos)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Volta para o primeiro slide se o índice for maior que o número de slides
    if (n > slides.length) {
        slideIndex = 1
    }
    // Vai para o último slide se o índice for menor que 1
    if (n < 1) {
        slideIndex = slides.length
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // Pausa qualquer vídeo que esteja tocando
        let video = slides[i].querySelector('video');
        if (video) {
            video.pause();
        }
    }

    // Remove a classe 'active' de todos os indicadores
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Exibe o slide atual e adiciona a classe 'active' ao indicador correspondente
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    // Se o slide atual for um vídeo, reproduzi-lo
    let currentVideo = slides[slideIndex-1].querySelector('video');
    if (currentVideo) {
        currentVideo.play();
    }
}

// Opcional: Auto-play do carrossel (descomente para ativar)
/*
setInterval(function() {
    plusSlides(1);
}, 5000); // Muda de slide a cada 5 segundos
*/

