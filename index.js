import './sass/main.scss';
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';

const refs = {
  listMenuEl: document.querySelector('.js-menu'),
  bodyEl: document.querySelector('body'),
  checkboxThemeEl: document.querySelector('#theme-switch-toggle'),
};

refs.listMenuEl.innerHTML = menuTemplate(menu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.bodyEl.classList.add(Theme.LIGHT);

updateTheme();

refs.checkboxThemeEl.addEventListener('change', onCheckboxClick);

function onCheckboxClick() {
  refs.bodyEl.classList.toggle(Theme.DARK);
  refs.bodyEl.classList.toggle(Theme.LIGHT);

  const currentTheme = refs.bodyEl.classList.value;
  localStorage.setItem('Theme', currentTheme);
}

function updateTheme() {
  const saveTheme = localStorage.getItem('Theme');

  if (saveTheme === Theme.DARK) {
    refs.checkboxThemeEl.checked = 'true';
    onCheckboxClick();
  }
}
