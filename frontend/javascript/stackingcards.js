const cardBlock = document.querySelector(".works-cards");

cardBlock.style.paddingBottom = `${Math.max(cardBlock.children.length, 1)}em`;

Array.from(cardBlock.children).forEach(
  (card, i) => (card.style.transform = `translateY(${i}em)`)
);
