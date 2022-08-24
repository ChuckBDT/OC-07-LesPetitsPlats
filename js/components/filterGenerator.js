import { recipes } from '../datas/recipes.js';
import filterFactory from '../factories/filterFactory.js';

export default function filterGenerator() {
  const appliances = [];
  const ingredients = [];
  let ustensils = [];
  const ingredtwo = [];
  const ingredientsList = document.querySelector('#ingredients-search-field ul');
  const ustensilsList = document.querySelector('#ustensils-search-field ul');
  const appliancesList = document.querySelector('#appliances-search-field ul');

  // Searching appliances, ingredients and ustensils inside array

  recipes.forEach((recipe) => {
    appliances.push(recipe.appliance);
    ingredients.push(recipe.ingredients);
    ustensils.push(recipe.ustensils);
  });

  ingredients.forEach((element) => {
    element.forEach((ingredient) => { ingredtwo.push(ingredient.ingredient); });
  });

  ustensils = ustensils.flat();

  // Removing all duplicates
  const setIngredients = new Set(ingredtwo);
  const finalIngredients = Array.from(setIngredients);

  const setAppliances = new Set(appliances);
  const finalAppliances = Array.from(setAppliances);

  const setUstensils = new Set(ustensils);
  const finalUstensils = Array.from(setUstensils);

  // Adding each element to his list

  for (let i = 0; i < 30; i++) {
    const element = filterFactory(finalIngredients[i]);
    ingredientsList.append(element);
  }

  for (let i = 0; i < 30; i++) {
    const element = filterFactory(finalAppliances[i]);
    appliancesList.append(element);
  }

  for (let i = 0; i < 30; i++) {
    const element = filterFactory(finalUstensils[i]);
    ustensilsList.append(element);
  }
}
