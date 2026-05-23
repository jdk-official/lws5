export function initInnerTabs(root: HTMLElement) {
  const tabs = root.querySelectorAll<HTMLButtonElement>('.inner-tab');
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.inner;
      if (!target) return;
      tabs.forEach((t) => t.classList.toggle('active', t === tab));
      root.querySelectorAll<HTMLElement>('[data-inner-panel]').forEach((panel) => {
        const match = panel.dataset.innerPanel === target;
        panel.hidden = !match;
      });
    });
  });
}
