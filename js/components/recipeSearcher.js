/* eslint-disable no-restricted-syntax */
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
      const inputFilter = e.target.value.toLowerCase();
      const inputArray = inputFilter.split(' ');

      for (const recipe of recipes) {
        for (let i = 0; i < inputArray.length; i++) {
          if (JSON.stringify(recipe).toLowerCase().includes(inputArray[i].toLowerCase())) {
            searchResult.push(recipe);
          }
        }
      }

      // Thanks to https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
      const count = {};
      for (const result of searchResult) {
        count[result.id] = (count[result.id] || 0) + 1;
      }
      // End

      const arrayCount = Object.entries(count);
      const finalResult = [];

      for (const value of arrayCount) {
        if (value[1] === inputArray.length) {
          const tryIt = recipes.filter((recipe) => recipe.id == value[0]);
          finalResult.push(tryIt[0]);
        }
      }

      //   Pushing the search results to the factories
      recipeGenerator(finalResult);
      filterGenerator(finalResult);

      //   Handling the behavior of the filter's buttons depending of the search result
      if (finalResult.length === 1) {
        filtersButtons.forEach((button) => {
          button.setAttribute('disabled', 'true');
        });
        noResultAlert.classList.add('d-none');
      } else if (finalResult.length === 0) {
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
