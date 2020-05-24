import * as Yup from 'yup';
import Ingredient from '../models/Ingredient';

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

    const { name, quantity, recipe_id } = await Ingredient.create(req.body);

    return res.json({ name, quantity, recipe_id });
  }
}

export default new IngredientController();
