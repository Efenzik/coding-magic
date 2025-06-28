const themeChanger = document.querySelector('[data-theme-change]');

const handleTheme = event => {
  if (event.target.checked) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
};
themeChanger.addEventListener('change', handleTheme);
