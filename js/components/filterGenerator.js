import filterFactory from '../factories/filterFactory.js';

export default function filterGenerator(recipesList) {
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

  // Removing all duplicates and converting sets to arrays

  const setIngredients = new Set(ingredtwo);
  const finalIngredients = Array.from(setIngredients);

  const setAppliances = new Set(appliances);
  const finalAppliances = Array.from(setAppliances);

  const setUstensils = new Set(ustensils);
  const finalUstensils = Array.from(setUstensils);

  // Adding each element to his list

  for (let i = 0; i < finalIngredients.length; i++) {
    const element = filterFactory(finalIngredients[i], ingredientsList.classList[0]);
    if (i > 29) {
      element[0].classList.add('d-none');
    }
    ingredientsList.append(element[0]);
    options.append(element[1]);
  }

  for (let i = 0; i < finalAppliances.length; i++) {
    const element = filterFactory(finalAppliances[i], appliancesList.classList[0]);
    if (i > 29) {
      element[0].classList.add('d-none');
    }
    appliancesList.append(element[0]);
    options.append(element[1]);
  }

  for (let i = 0; i < finalUstensils.length; i++) {
    const element = filterFactory(finalUstensils[i], ustensilsList.classList[0]);
    if (i > 29) {
      element[0].classList.add('d-none');
    }
    ustensilsList.append(element[0]);
    options.append(element[1]);
  }
}
