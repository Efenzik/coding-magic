const themeChanger = document.querySelector('[data-theme-change]');

const handleTheme = event => {
  if (event.target.cheked) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = '';
  }
};
themeChanger.addEventListener('change', handleTheme);
