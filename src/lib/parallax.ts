export function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layers = Array.from(document.querySelectorAll<HTMLElement>('.parallax'));
  if (layers.length === 0) return;

  let scheduled = false;
  function update() {
    const y = window.scrollY;
    for (const el of layers) {
      const speed = parseFloat(el.dataset.speed ?? '0.5');
      // Move slower than scroll (depth illusion): higher speed = moves more with content
      const translate = y * (1 - speed);
      el.style.transform = `translate3d(0, ${translate.toFixed(1)}px, 0)`;
    }
    scheduled = false;
  }

  function onScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  update();
}
