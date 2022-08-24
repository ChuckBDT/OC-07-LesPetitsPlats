import filterGenerator from '../components/filterGenerator.js';
import recipeGenerator from '../components/recipeGenerator.js';

function init() {
  console.log('init');
  filterGenerator();
  recipeGenerator();
}

init();

// This one is for opening the ingredients btn

const test = document.querySelector('.dropdown-ingredients');
const test3 = document.querySelector('.dropdown-ingredients button');
const test2 = document.getElementById('ingredients-search-field');
const test4 = document.querySelector('#ingredients-search-field input');
const test5 = document.querySelector('header');

test.addEventListener('click', () => {
  test2.classList.remove('d-none');
  test3.style.width = `${test2.offsetWidth}px`;
});

test5.addEventListener('click', () => {
  console.log('Closed');
  test3.removeAttribute('style');
  test2.classList.add('d-none');
});
