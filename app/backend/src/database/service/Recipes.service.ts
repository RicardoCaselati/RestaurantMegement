import Recipes from '../model/Recipes.model';
import { RecipeData } from '../Interface/Recipes.interface';

const recipesService = async (recipe: RecipeData) => {
    try {
     // Inicializa a instância da entidade e atribui os valores
     const newRecipe = new Recipes();
     newRecipe.nomeReceita = recipe.nomeReceita;
     newRecipe.receita = recipe.receita;
  
     // Salva no banco de dados
     await newRecipe.save();
     return newRecipe;
   } catch (error: unknown) {
     if (error instanceof Error) {
       throw new Error('Erro ao cadastrar receita: ' + error.message);
     } else {
       throw new Error('Erro desconhecido ao cadastrar receita');
     }
   }
};


module.exports = {
    recipesService,
};