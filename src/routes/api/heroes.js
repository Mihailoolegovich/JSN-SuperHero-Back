const express = require("express");
const { heroesApi: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));
router.post("/", ctrlWrapper(ctrl.add));
router.put("/:heroId", ctrlWrapper(ctrl.update));
router.delete("/:heroId", ctrlWrapper(ctrl.remove));

module.exports = router;
