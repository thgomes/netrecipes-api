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

    const { name, quantity, recipe_id } = req.body;

    const recipe = await Recipe.findByPk(recipe_id);

    if (!recipe) {
      return res.status(400).json({ error: 'Invalid recipe id' });
    }

    const { user_id } = await Ingredient.create({
      user_id: req.userId,
      name,
      quantity,
      recipe_id,
    });

    return res.json({ name, quantity, recipe_id, user_id });
  }

  async delete(req, res) {
    const ingredient = await Ingredient.findByPk(req.params.id);

    if (!ingredient) {
      return res.status(400).json({ error: 'invalid ingredient id' });
    }

    if (ingredient.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to delete this ingredient",
      });
    }

    const { id, name } = ingredient;

    await ingredient.destroy();

    return res.json({ id, name });
  }
}

export default new IngredientController();
