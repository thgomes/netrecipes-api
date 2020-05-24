import Sequelize, { Model } from 'sequelize';

class Step extends Model {
  static init(sequelize) {
    super.init(
      {
        instruction: Sequelize.STRING,
        order: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipe, { foreignKey: 'recipe_id', as: 'recipe' });
  }
}

export default Step;
