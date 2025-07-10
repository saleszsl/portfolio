document.addEventListener('DOMContentLoaded', () => {

    // --- EFEITO DE DIGITAÇÃO (TYPING EFFECT) ---
    const typingElement = document.getElementById('typing-effect');
    const words = ["Front-end.", "Web.", "Angular."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Deletando caracteres
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Adicionando caracteres
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        // Se a palavra foi toda digitada ou deletada
        if (!isDeleting && charIndex === currentWord.length) {
            // Pausa antes de começar a deletar
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        
        // Define a velocidade da digitação
        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }
    
    // Inicia o efeito de digitação
    type();

    // --- ANIMAÇÃO AO ROLAR (SCROLL REVEAL) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                entry.target.classList.remove('section-hidden');
            }
        });
    }, {
        threshold: 0.1 // A animação começa quando 10% da seção estiver visível
    });

    // Observa todas as seções com a classe .section-hidden
    const hiddenSections = document.querySelectorAll('.section-hidden');
    hiddenSections.forEach(section => observer.observe(section));

});