import * as Yup from 'yup';
import Recipe from '../models/Recipe';
import Ingredient from '../models/Ingredient';
import Step from '../models/Step';
import File from '../models/File';

class RecipeController {
  async show(req, res) {
    const recipe = await Recipe.findByPk(req.params.id);

    const image = await File.findByPk(recipe.image_id);

    const ingredients = await Ingredient.findAll({
      where: { recipe_id: req.params.id },
      order: [['created_at']],
    });

    const steps = await Step.findAll({
      where: { recipe_id: req.params.id },
      order: [['created_at']],
    });

    return res.json({ recipe, image, ingredients, steps });
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const recipes = await Recipe.findAndCountAll({
      where: { user_id: req.userId },
      order: [['created_at', 'DESC']],
      limit: 6,
      offset: (page - 1) * 6,
      attributes: ['id', 'name', 'description', 'image_id', 'created_at'],
      include: [
        {
          model: File,
          as: 'image',
          attributes: ['name', 'path', 'url'],
        },
      ],
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

    const { name, description, image_id } = req.body;

    const { id, user_id } = await Recipe.create({
      user_id: req.userId,
      name,
      description,
      image_id,
    });

    return res.json({ id, user_id, name, description, image_id });
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

    const { name, description, image_id } = req.body;

    const recipe = await Recipe.findByPk(req.body.id);

    if (!recipe) {
      return res.status(400).json({ error: 'invalid recipe id' });
    }

    const { id } = await recipe.update({ name, description, image_id });

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
