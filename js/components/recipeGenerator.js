import { recipes } from "../datas/recipes.js";
import recipeFactory from "../factories/recipeFactory.js";

export default function recipeGenerator() {
    const recipesPlace = document.querySelector("#recipes")
    recipes.forEach((recipe) => {
        let element = recipeFactory(recipe);
        recipesPlace.append(element)
        
    })
}