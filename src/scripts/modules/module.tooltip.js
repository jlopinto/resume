import $ from 'jquery';

const initTooltips = () => {
  $('[data-toggle="tooltip"]').tooltip();
};

export default {
  ready: () => {
    initTooltips();
  }
};
