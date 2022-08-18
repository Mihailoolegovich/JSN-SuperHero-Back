const { Hero } = require("../../models/heroes");

const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;

  const heroes = await Hero.find({}, "", {
    skip,
    limit: Number(limit),
  });

  res.json({ heroes });
};

module.exports = getAll;
