const { Hero } = require("../../models/heroes");

const update = async (req, res) => {
  const { heroId } = req.params;
  const data = req.body;

  const hero = await Hero.findByIdAndUpdate(heroId, data, {
    new: true,
  });

  if (!hero) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  res.json({ hero });
};

module.exports = update;
