import { recipes } from '../datas/recipes.js';
import recipeGenerator from './recipeGenerator.js';
import filterGenerator from './filterGenerator.js';
import listsHandler from './listsHandler.js';

export default function recipeSearcher() {
  const recipeInput = document.querySelector('#searchbar > input');
  const noResultAlert = document.querySelector('#noresult-alert');
  const filtersButtons = document.querySelectorAll('.filters-dropdown button');
  const searchResult = [];

  recipeInput.addEventListener('input', (e) => {
    listsHandler();
    if (e.target.value.length >= 3 || e.target.value === '') {
      searchResult.length = 0;
      const inputArray = e.target.value.toLowerCase().split(' ');

      recipes.forEach((recipe) => {
        const wordIsIncluded = (word) => JSON.stringify(recipe).toLowerCase().includes(word);
        if (inputArray.every(wordIsIncluded)) {
          searchResult.push(recipe);
        }
      });

      //   Pushing the search results to the factories
      recipeGenerator(searchResult);
      filterGenerator(searchResult);

      //   Handling the behavior of the filter's buttons depending of the search result
      if (searchResult.length === 1) {
        filtersButtons.forEach((button) => {
          button.setAttribute('disabled', 'true');
        });
        noResultAlert.classList.add('d-none');
      } else if (searchResult.length === 0) {
        filtersButtons.forEach((button) => {
          button.setAttribute('disabled', 'true');
        });
        noResultAlert.classList.remove('d-none');
      } else {
        filtersButtons.forEach((button) => {
          button.removeAttribute('disabled', 'true');
        });
        noResultAlert.classList.add('d-none');
      }
    }
  });
}
