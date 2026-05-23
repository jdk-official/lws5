export function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  let scheduled = false;
  function update() {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
    bar!.style.width = pct + '%';
    scheduled = false;
  }
  window.addEventListener(
    'scroll',
    () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );
}
