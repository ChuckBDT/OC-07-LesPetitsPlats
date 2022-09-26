import filterGenerator from '../components/filterGenerator.js';
import recipeGenerator from '../components/recipeGenerator.js';
import { btnInit } from '../components/buttonsBehavior.js';
import recipeSearcher from '../components/recipeSearcher.js';
import filterSearcher from '../components/filterSearcher.js';
import { recipes } from '../datas/recipes.js';

function init() {
  console.log('init - forEach Loops version');
  filterGenerator(recipes);
  recipeGenerator(recipes);
  btnInit();
  recipeSearcher();
  filterSearcher();
}

init();
