import * as Yup from 'yup';
import Ingredient from '../models/Ingredient';
import Recipe from '../models/Recipe';

class IngredientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipe_id: Yup.number().required(),
      name: Yup.string().required(),
      quantity: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipe = await Recipe.findByPk(req.body.recipe_id);

    if (!recipe) {
      return res.status(400).json({ error: 'Invalid recipe id' });
    }

    const { name, quantity, recipe_id } = await Ingredient.create(req.body);

    return res.json({ name, quantity, recipe_id });
  }
}

export default new IngredientController();
