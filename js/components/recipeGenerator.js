import recipeFactory from '../factories/recipeFactory.js';

export default function recipeGenerator(recipesList) {
  const recipesPlace = document.querySelector('#recipes');
  recipesList.forEach((recipe) => {
    const element = recipeFactory(recipe);
    recipesPlace.append(element);
  });
}
