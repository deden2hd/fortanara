export function CarouselScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
(() => {
  if (window.__fortanaraCarouselReady) return;
  window.__fortanaraCarouselReady = true;

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-carousel-button]");
    if (!button) return;

    const targetId = button.getAttribute("data-carousel-target");
    const direction = button.getAttribute("data-carousel-direction");
    const carousel = targetId ? document.getElementById(targetId) : null;

    if (!carousel) return;

    event.preventDefault();

    const firstCard = carousel.querySelector("[data-carousel-card]");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 320;
    const gap = Number.parseFloat(getComputedStyle(carousel.firstElementChild || carousel).columnGap || "20") || 20;
    const distance = cardWidth + gap;

    carousel.scrollBy({
      left: direction === "previous" ? -distance : distance,
      behavior: "smooth",
    });
  });
})();
        `,
      }}
    />
  );
}
