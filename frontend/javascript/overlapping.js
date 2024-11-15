document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card-animate');
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCard(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        cards.forEach((card, index) => {
            const offset = scrolled * (index + 1) * 0.05;
            card.style.transform = `translateY(${-offset}px)`;
        });
    });
});

function animateCard(card) {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
}
