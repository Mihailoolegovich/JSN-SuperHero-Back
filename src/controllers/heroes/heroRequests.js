const { Hero } = require("../../models/heroes");

const add = async (req, res) => {
  const hero = await Hero.create({
    ...req.body,
  });

  res.status(201).json({ hero });
};

const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;

  const hero = await Hero.find({}, "", {
    skip,
    limit: Number(limit),
  });

  res.json({ hero });
};

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

module.exports = {
  getAll,
  add,
  update,
  //   updateStatusContact,
  remove,
};
