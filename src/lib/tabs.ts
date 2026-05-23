import overviewHtml from '../sections/overview.html?raw';
import checklistHtml from '../sections/checklist.html?raw';
import coffeeHtml from '../sections/coffee.html?raw';
import banksHtml from '../sections/banks.html?raw';
import trainsHtml from '../sections/trains.html?raw';

// Rewrite absolute /assets/ paths to honour Vite's configured base
// (e.g. /lws5/assets/...) — raw HTML imports are not processed by Vite.
const BASE = import.meta.env.BASE_URL; // trailing slash
function withBase(html: string): string {
  return html.replace(/(["'(])\/assets\//g, `$1${BASE}assets/`);
}

const sections: Record<string, string> = {
  overview: withBase(overviewHtml),
  checklist: withBase(checklistHtml),
  coffee: withBase(coffeeHtml),
  banks: withBase(banksHtml),
  trains: withBase(trainsHtml),
};

type SectionMountedHandler = (target: string, root: HTMLElement) => void;

export function initTabs(onMounted: SectionMountedHandler) {
  const app = document.getElementById('app') as HTMLElement;
  const navBtns = document.querySelectorAll<HTMLButtonElement>('#main-nav button');

  function render(target: string) {
    const html = sections[target] ?? sections.overview;
    app.innerHTML = html;
    navBtns.forEach((b) => {
      const active = b.dataset.target === target;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', String(active));
    });
    onMounted(target, app);
  }

  function switchTab(target: string) {
    // Use View Transitions API where available for smooth cross-fade
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };
    if (doc.startViewTransition) {
      doc.startViewTransition(() => render(target));
    } else {
      render(target);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target) switchTab(target);
    });
  });

  // Initial render
  render('overview');
}
