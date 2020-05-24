import * as Yup from 'yup';
import Recipe from '../models/Recipe';

class RecipeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, description } = req.body;

    const { id, user_id } = await Recipe.create({
      user_id: req.userId,
      name,
      description,
    });

    return res.json({ id, user_id, name, description });
  }
}

export default new RecipeController();