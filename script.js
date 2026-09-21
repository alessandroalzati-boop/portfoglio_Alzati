const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const visible = windowHeight - rect.top;

    let opacity = visible / 300;

    opacity = Math.max(0, Math.min(1, opacity));

    card.style.opacity = opacity;

    const move = 50 - opacity * 50;

    card.style.transform = `translateY(${move}px) scale(${0.96 + opacity * 0.04})`;
  });
});
