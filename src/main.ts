import './styles.css';
import { initTabs } from './lib/tabs';
import { initChecklist } from './lib/checklist';
import { initInnerTabs } from './lib/innerTabs';
import { initParallax } from './lib/parallax';
import { initProgressBar } from './lib/progress';
import { initReveals } from './lib/reveal';

// Boot
initProgressBar();
initParallax();

initTabs((_target, root) => {
  // Per-section initialisation runs after each tab swap
  initChecklist(root);
  initInnerTabs(root);
  initReveals(root);
});
