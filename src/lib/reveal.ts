import { inView } from 'motion';

export function initReveals(root: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in-view'));
    return;
  }

  const targets = root.querySelectorAll<HTMLElement>('.reveal');
  targets.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 0.05, 0.3)}s`;
    inView(
      el,
      () => {
        el.classList.add('in-view');
      },
      { amount: 0.15 }
    );
  });

  // Stagger recipe cards specifically
  const recipes = root.querySelectorAll<HTMLElement>('.recipe-card');
  recipes.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity .45s cubic-bezier(.2,.7,.2,1) ${i * 0.04}s, transform .45s cubic-bezier(.2,.7,.2,1) ${i * 0.04}s`;
    inView(
      el,
      () => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      },
      { amount: 0.2 }
    );
  });
}
