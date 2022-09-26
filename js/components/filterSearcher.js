import { strNormalizer } from './recipeSearcher.js';

// Handles the search inside the lists
export default function filterSearcher() {
  const searchFields = document.querySelectorAll('.search-field input');
  searchFields.forEach((field) => {
    field.addEventListener('input', () => {
      const filtersList = field.parentElement.nextElementSibling;
      const filtersListChilds = filtersList.querySelectorAll('li:not(.no-search');
      const button = field.parentElement.parentElement.previousElementSibling;
      let Displayedcounter = 0;
      filtersListChilds.forEach((filter) => {
        if (strNormalizer(filter.innerText).includes(strNormalizer(field.value)) && !filter.classList.contains('no-search') && Displayedcounter <= 29) {
          filter.classList.remove('d-none');
          Displayedcounter += 1;
        } else { filter.classList.add('d-none'); }
      });

      switch (Displayedcounter) {
        case 1: filtersList.style.setProperty('grid-template-columns', 'repeat(1, 1fr)');
          filtersListChilds.forEach((li) => {
            if (!li.classList.contains('d-none')) {
              li.style.setProperty('max-width', '100%');
            }
          });
          filtersList.firstChild.style.removeProperty('max-width');
          break;
        case 2: filtersList.style.setProperty('grid-template-columns', 'repeat(2, 1fr)');
          filtersListChilds.forEach((li) => {
            li.style.removeProperty('max-width');
          });
          break;
        default: filtersList.style.setProperty('grid-template-columns', 'repeat(3, 1fr)');
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
