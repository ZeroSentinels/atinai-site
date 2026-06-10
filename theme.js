(function () {
  const storageKey = 'atinai-theme';
  const root = document.documentElement;

  const getTheme = () => {
    try {
      const saved = window.localStorage.getItem(storageKey);
      return saved === 'light' || saved === 'dark' ? saved : 'dark';
    } catch (_) {
      return root.getAttribute('data-theme') || 'dark';
    }
  };

  const setTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    updateToggles(theme);
  };

  const updateToggles = (theme) => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const label = nextTheme === 'light' ? 'Tema claro' : 'Tema oscuro';

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.setAttribute('aria-label', `Cambiar a ${label.toLowerCase()}`);
      const labelNode = button.querySelector('[data-theme-label]');
      if (labelNode) labelNode.textContent = label;
    });
  };

  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-theme-toggle]');
    if (!toggle) return;

    const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';

    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch (_) {
      // Ignore storage failures and still switch theme for the session.
    }

    setTheme(nextTheme);
  });

  setTheme(getTheme());
})();
