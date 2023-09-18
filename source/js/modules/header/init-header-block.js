import {resizeObserver} from '../../utils/observers.js';
import {initToggleMenu} from './init-toggle-menu.js';

const setHeaderHeight = () => {
  const header = document.querySelector('.header');
  if (!header) {
    return;
  }

  const headerRect = header.getBoundingClientRect();
  document.documentElement.style.setProperty('--header-height', headerRect.height + 'px');
};

const initHeaderBlock = () => {
  resizeObserver.subscribe(setHeaderHeight);
  initToggleMenu();
};

export {initHeaderBlock};
