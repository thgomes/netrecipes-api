import Recipe from '../models/Recipe';

class FeedController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const recipes = await Recipe.findAll({
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
      attributes: ['id', 'name', 'description', 'created_at'],
    });

    return res.json(recipes);
  }
}

export default new FeedController();
