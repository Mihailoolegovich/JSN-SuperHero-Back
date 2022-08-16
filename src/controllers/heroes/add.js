const { Hero } = require("../../models/heroes");

const add = async (req, res) => {
  const hero = await Hero.create({
    ...req.body,
  });

  res.status(201).json({ hero });
};

module.exports = add;
