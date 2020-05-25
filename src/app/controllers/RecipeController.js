import * as Yup from 'yup';
import Recipe from '../models/Recipe';

class RecipeController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const recipes = await Recipe.findAll({
      where: { user_id: req.userId },
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'name', 'description', 'created_at'],
    });

    return res.json(recipes);
  }

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

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, description } = req.body;

    const recipe = await Recipe.findByPk(req.body.id);

    if (!recipe) {
      return res.status(400).json({ error: 'invalid recipe id' });
    }

    const { id } = await recipe.update({ name, description });

    return res.json({ id, name, description });
  }

  async delete(req, res) {
    const recipe = await Recipe.findByPk(req.params.id);

    if (!recipe) {
      return res.status(400).json({ error: 'invalid recipe id' });
    }

    if (recipe.user_id !== req.userId) {
      return res.status(401).json({
        error: "You don't have permission to delete this recipe",
      });
    }

    const { id, name } = recipe;

    await recipe.destroy();

    return res.json({ id, name });
  }
}

export default new RecipeController();
