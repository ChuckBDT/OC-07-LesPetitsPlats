import filterFactory from '../factories/filterFactory.js';

export const optionsArray = [];

export default function filterGenerator(recipesList) {
  const input = document.querySelector('#searchbar input');
  const options = document.getElementById('options');
  const ingredientsList = document.querySelector('#ingredients-search-field ul');
  const ustensilsList = document.querySelector('#ustensils-search-field ul');
  const appliancesList = document.querySelector('#appliances-search-field ul');
  const appliances = [];
  const ingredients = [];
  let ustensils = [];
  const ingredtwo = [];

  ingredientsList.innerHTML = '';
  appliancesList.innerHTML = '';
  ustensilsList.innerHTML = '';

  // Searching appliances, ingredients and ustensils inside array
  recipesList.forEach((recipe) => {
    appliances.push(recipe.appliance);
    ingredients.push(recipe.ingredients);
    ustensils.push(recipe.ustensils);
  });

  ingredients.forEach((element) => {
    element.forEach((ingredient) => { ingredtwo.push(ingredient.ingredient); });
  });

  ustensils = ustensils.flat();

  // Convert every element to lowercase with uppercase first letter
  // and remove every duplicate element
  function removeDuplicates(array) {
    const caseArray = array.map((el) => el.charAt(0).toUpperCase()
    + el.slice(1).toLowerCase());
    const removeDots = caseArray.map((el) => el.replaceAll('.', ''));
    return Array.from(new Set(removeDots));
  }
  const finalIngredients = removeDuplicates(ingredtwo);
  const finalAppliances = removeDuplicates(appliances);
  const finalUstensils = removeDuplicates(ustensils);

  // Adding each element to his list
  function addElements(array, place) {
    for (let i = 0; i < array.length; i++) {
      const element = filterFactory(array[i], place.classList[0]);
      if (i > 29) {
        element[0].classList.add('d-none');
      }
      if (optionsArray.includes(element[0].innerText.toLowerCase())) {
        element[0].classList.add('no-search');
        element[0].classList.add('d-none');
      }

      place.append(element[0]);
      element[0].addEventListener('click', () => {
        options.append(element[1]);
        optionsArray.push(element[1].innerText);
        input.dispatchEvent(new Event('input'));
        element[1].addEventListener('click', () => {
          delete optionsArray[optionsArray.indexOf(element[0].innerText)];
          element[1].remove();
          input.dispatchEvent(new Event('input'));
        });
      });
    }
  }

  addElements(finalIngredients, ingredientsList);
  addElements(finalAppliances, appliancesList);
  addElements(finalUstensils, ustensilsList);
}
