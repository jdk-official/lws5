const STORAGE_PREFIX = 'lws5_';

export function initChecklist(root: HTMLElement) {
  const rows = root.querySelectorAll<HTMLElement>('.checklist-row');

  rows.forEach((row) => {
    const id = row.dataset.id;
    if (!id) return;
    const cb = row.querySelector<HTMLInputElement>('input[type=checkbox]');
    if (!cb) return;

    // Restore state
    const saved = localStorage.getItem(STORAGE_PREFIX + id);
    if (saved === 'true') {
      cb.checked = true;
      row.classList.add('checked');
    }

    // Toggling: clicking row OR checkbox both toggle
    const toggle = () => {
      cb.checked = !cb.checked;
      persist(id, cb.checked, row);
    };
    row.addEventListener('click', (e) => {
      // Avoid double-toggle if the click was directly on the checkbox or label
      if (e.target === cb || (e.target as HTMLElement).tagName === 'LABEL') return;
      toggle();
    });
    cb.addEventListener('change', () => persist(id, cb.checked, row));
  });

  const resetBtn = root.querySelector<HTMLButtonElement>('#reset-checklist');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      rows.forEach((row) => {
        const id = row.dataset.id;
        const cb = row.querySelector<HTMLInputElement>('input[type=checkbox]');
        if (!cb || !id) return;
        cb.checked = false;
        row.classList.remove('checked');
        localStorage.removeItem(STORAGE_PREFIX + id);
      });
    });
  }
}

function persist(id: string, checked: boolean, row: HTMLElement) {
  row.classList.toggle('checked', checked);
  localStorage.setItem(STORAGE_PREFIX + id, String(checked));
}
