import { recipes } from '../datas/recipes.js';
import filterFactory from '../factories/filterFactory.js';

export default function filterGenerator() {
  const appliances = [];
  const ingredients = [];
  let ustensils = [];
  const ingredtwo = [];
  const ingredientsList = document.querySelector('#ingredients-search-field ul');

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

  const setAppliances = new Set(appliances);
  const setIngredients = new Set(ingredtwo);
  const finalIngredients = Array.from(setIngredients);
  const setUstensils = new Set(ustensils);

  // Adding each element to his list

  for (let i = 0; i < 30; i++) {
    const element = filterFactory(finalIngredients[i]);
    ingredientsList.append(element);
  }
}
