import filterGenerator from '../components/filterGenerator.js';
import recipeGenerator from '../components/recipeGenerator.js';

function init() {
  console.log('init');
  filterGenerator();
  recipeGenerator();
}

init();

// This one is for opening the ingredients btn

const dropdownBtn = document.querySelectorAll('.filters-dropdown button');

function open(e) {
  close();
  e.target.nextElementSibling.classList.remove('d-none');
  e.target.style.width = `${e.target.nextElementSibling.offsetWidth}px`;
  e.target.removeEventListener('click', open);
  e.target.nextElementSibling.firstElementChild.lastElementChild.addEventListener('click', close);
}

function close() {
  dropdownBtn.forEach((el) => {
    el.removeAttribute('style');
    el.nextElementSibling.classList.add('d-none');
    el.addEventListener('click', open);
  });
}

dropdownBtn.forEach((el) => {
  el.addEventListener('click', open);
});
