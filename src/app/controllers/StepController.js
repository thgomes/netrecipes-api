import * as Yup from 'yup';
import Step from '../models/Step';
import Recipe from '../models/Recipe';

class StepController {
  async store(req, res) {
    const schema = Yup.object().shape({
      recipe_id: Yup.number().required(),
      instruction: Yup.string().required(),
      order: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { instruction, order, recipe_id } = req.body;

    const recipe = await Recipe.findByPk(recipe_id);

    if (!recipe) {
      return res.status(400).json({ error: 'Invalid recipe id' });
    }

    const { user_id } = await Step.create({
      user_id: req.userId,
      instruction,
      order,
      recipe_id,
    });

    return res.json({ instruction, order, recipe_id, user_id });
  }

  async delete(req, res) {
    return res.json('ok');
  }
}

export default new StepController();
