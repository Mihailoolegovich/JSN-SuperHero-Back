const { Hero } = require("../../models/heroes");

const getById = async (req, res) => {
  const { heroId } = req.params;

  const hero = await Hero.findById(heroId);

  res.json({ hero });
};

module.exports = getById;
