
// Drag and Drop Cards Functionality
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      card.addEventListener('dragstart', handleDragStart);
      card.addEventListener('dragend', handleDragEnd);
      card.addEventListener('dragover', handleDragOver);
      card.addEventListener('drop', handleDrop);
  });

  let draggedCard = null;
  let initialZ = 1;

  function handleDragStart(e) {
      draggedCard = this;
      this.style.opacity = '0.8';
      this.style.zIndex = initialZ++;
  }

  function handleDragEnd(e) {
      draggedCard.style.opacity = '1';
      draggedCard = null;
  }

  function handleDragOver(e) {
      e.preventDefault();
  }

  function handleDrop(e) {
      e.preventDefault();
      if (draggedCard !== this) {
          const allCards = [...cards];
          const draggedIndex = allCards.indexOf(draggedCard);
          const droppedIndex = allCards.indexOf(this);
          
          this.style.zIndex = draggedCard.style.zIndex - 1;
      }
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.color = '#8A2BE2';
        link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.color = '#333';
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const toggle = question.querySelector('.faq-toggle');
    
    // Close other answers
    document.querySelectorAll('.faq-answer').forEach(item => {
      if (item !== answer) {
        item.classList.remove('active');
        const otherToggle = item.previousElementSibling.querySelector('.faq-toggle');
        if (otherToggle) {
          otherToggle.classList.remove('active');
        }
      }
    });
    // Toggle current answer
    answer.classList.toggle('active');
    if (toggle) {
      toggle.classList.toggle('active');
    }
  });
});



