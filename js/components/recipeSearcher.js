import { recipes } from '../datas/recipes.js';
import { optionsArray } from './filterGenerator.js';
import { buttonsStates, closeFiltList } from './buttonsBehavior.js';

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
      optionsArray.forEach((option) => { options.push(strNormalizer(option).split(' ')); });
      const finalSearchArray = inputArray.concat(options).flat();

      // Checking each recipe if it contains all the words in the input array
      recipes.forEach((recipe) => {
        const wordIsIncluded = (word) => strNormalizer(JSON.stringify(recipe)).includes(word);
        if (finalSearchArray.every(wordIsIncluded)) {
          searchResult.push(recipe);
        }
      });

      //   Pushing the search results to the factories
      recipesDisplayer(searchResult);
      filterDisplayer(searchResult);
      buttonsStates();
    }
  });
}
