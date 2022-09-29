import { strNormalizer } from './recipeSearcher.js';

const mediaQuerySmall = window.matchMedia('(max-width: 425px)');
const mediaQueryMedium = window.matchMedia('(min-width: 426px) and (max-width: 768px)');

export function listDisplay() {
  const places = document.querySelectorAll('ul');
  places.forEach((place) => {
    const array = place.querySelectorAll('li:not(.no-search):not(.d-none');
    let gridCalc = '';
    if (mediaQuerySmall.matches) {
      if (array.length < 10) { gridCalc = array.length; } else { gridCalc = 10; }
    } else if (mediaQueryMedium.matches) {
      if (array.length < 20) { gridCalc = Math.ceil(array.length / 2); } else { gridCalc = 10; }
    } else if (array.length < 30) { gridCalc = Math.ceil(array.length / 3); } else { gridCalc = 10; }
    place.style.setProperty('grid-template-rows', `repeat(${gridCalc}, 1fr)`);
  });
}

// Handles the search inside the lists
export default function filterSearcher() {
  const searchFields = document.querySelectorAll('.search-field input');
  searchFields.forEach((field) => {
    const button = field.parentElement.parentElement.previousElementSibling;
    field.addEventListener('input', () => {
      const filtersList = field.parentElement.nextElementSibling;
      const filtersListChilds = filtersList.querySelectorAll('li:not(.no-search)');

      filtersListChilds.forEach((filter) => {
        if (strNormalizer(filter.innerText).includes(strNormalizer(field.value)) && !filter.classList.contains('no-search')) {
          filter.classList.remove('d-none');
        } else { filter.classList.add('d-none'); }
      });

      listDisplay();

      const lisDisplayed = filtersList.querySelectorAll('li:not(.no-search):not(.d-none)').length;

      switch (lisDisplayed) {
        case 1: filtersList.style.setProperty('grid-template-columns', 'repeat(1, 1fr)');
          filtersList.querySelector('li:not(.no-search):not(.d-none)').style.setProperty('max-width', '100%');
          break;
        case 2:
          if (mediaQuerySmall.matches) {
            filtersList.style.removeProperty('grid-template-columns');
            filtersList.querySelector('li:not(.no-search):not(.d-none)').style.setProperty('max-width', '100%');
          } else {
            filtersList.style.setProperty('grid-template-columns', 'repeat(2, 1fr)');
            filtersListChilds.forEach((li) => {
              li.style.removeProperty('max-width');
            });
          }

          break;
        default: filtersList.style.removeProperty('grid-template-columns');
          filtersListChilds.forEach((li) => {
            li.style.removeProperty('max-width');
          });
          break;
      }

      const width = field.offsetWidth - 10;
      button.style.width = `${width}px`;
    });
  });
}
