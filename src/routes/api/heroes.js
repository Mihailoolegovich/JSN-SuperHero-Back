const express = require("express");
const { heroesApi } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrlWrapper(heroesApi.getAll));
router.post("/", ctrlWrapper(heroesApi.add));
router.patch("/:heroId", ctrlWrapper(heroesApi.update));
router.delete("/:heroId", ctrlWrapper(heroesApi.remove));

module.exports = router;
