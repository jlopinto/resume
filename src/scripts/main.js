import jquery from 'jquery';
import 'popper.js';
import 'bootstrap/js/dist/tooltip';

import moduleTooltip from './modules/module.tooltip';
const app = (global, $) => {
  global.$ = $;
  const modules = [moduleTooltip];

  $(global.document).ready(() => {
    modules.forEach(module => {
      if (typeof module.ready !== 'undefined') {
        module.ready();
      }
    });
  });

  $(global).on('load', () => {
    modules.forEach(module => {
      if (typeof module.load !== 'undefined') {
        module.load();
      }
    });
  });
};

app(window, jquery);
