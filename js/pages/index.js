import filterGenerator from '../components/filterGenerator.js';
import recipeGenerator from '../components/recipeGenerator.js';
import listsHandler from '../components/listsHandler.js';
import recipeSearcher from '../components/recipeSearcher.js';
import { recipes } from '../datas/recipes.js';

function init() {
  console.log('init - native Loops version');
  filterGenerator(recipes);
  recipeGenerator(recipes);
  listsHandler();
  recipeSearcher();
}

init();
