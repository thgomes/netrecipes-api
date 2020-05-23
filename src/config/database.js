module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gorecipes',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
