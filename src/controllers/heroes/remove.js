const { Hero } = require("../../models/heroes");

const remove = async (req, res) => {
  const { heroId } = req.params;
  const hero = await Hero.findByIdAndRemove(heroId);

  if (!hero) {
    const error = new Error("Not found");
    error.status = 404;
    throw error;
  }

  res.json({ message: "hero deleted" });
};

module.exports = remove;
