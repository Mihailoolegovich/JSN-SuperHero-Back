const { Hero } = require("../../models/heroes");

const remove = async (req, res) => {
  const { heroId } = req.params;
  const heroes = await Hero.findByIdAndRemove(heroId);

  if (!heroes) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  res.json({ message: "hero deleted" });
};

module.exports = remove;
