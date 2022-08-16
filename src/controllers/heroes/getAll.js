const { Hero } = require("../../models/heroes");

const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;

  const hero = await Hero.find({}, "", {
    skip,
    limit: Number(limit),
  });

  res.json({ hero });
};

module.exports = getAll;
