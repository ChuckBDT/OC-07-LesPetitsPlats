/* eslint-disable no-restricted-syntax */
import { recipes } from '../datas/recipes.js';
import { optionsArray } from './filterGenerator.js';
import { buttonsStates, closeFiltList } from './buttonsBehavior.js';
import { listDisplay } from './filterSearcher.js';

// Thanks to https://stackoverflow.com/a/37511463
export const strNormalizer = (string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function recipesDisplayer(recipesArray) {
  const recipesPlace = document.querySelectorAll('#recipes article');
  const recipesIds = [];
  recipesArray.forEach((recipe) => { recipesIds.push(recipe.id); });
  recipesPlace.forEach((recipe) => {
    if (recipesIds.includes(Number(recipe.dataset.recipeId))) {
      recipe.classList.remove('d-none');
    } else {
      recipe.classList.add('d-none');
    }
  });
}

function filterDisplayer(recipesArray) {
  closeFiltList();
  const optionsString = strNormalizer(JSON.stringify(optionsArray));
  const recipesString = strNormalizer(JSON.stringify(recipesArray));
  const filters = (document.querySelectorAll('li'));
  filters.forEach((li) => {
    const normalizedLi = strNormalizer(li.innerText);
    if (recipesString.includes(normalizedLi) && !optionsString.includes(normalizedLi)) {
      li.classList.remove('d-none');
      li.classList.remove('no-search');
    } else {
      li.classList.add('no-search');
    }
  });
}

export default function recipeSearcher() {
  const recipeInput = document.querySelector('#searchbar > input');
  const searchResult = [];

  recipeInput.addEventListener('input', (e) => {
    if (e.target.value.length >= 3 || e.target.value === '' || optionsArray.length > 0) {
      searchResult.length = 0;
      const inputArray = strNormalizer(e.target.value).split(' ');
      const options = [];

      for (const option of optionsArray) {
        if (((option.split(' ')).length) === 1) {
          options.push(strNormalizer(option));
        } else {
          const concat = strNormalizer(option).split(' ');
          for (const word of concat) {
            options.push(word);
          }
        }
      }

      for (const option of options) {
        inputArray.push(option);
      }

      for (const recipe of recipes) {
        for (const word of inputArray) {
          if (strNormalizer(JSON.stringify(recipe)).includes(word)) {
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
          const result = recipes.filter((recipe) => recipe.id == value[0]);
          finalResult.push(result[0]);
        }
      }

      //   Pushing the search results to the factories
      recipesDisplayer(finalResult);
      filterDisplayer(finalResult);
      buttonsStates();
      listDisplay();
    }
  });
}
