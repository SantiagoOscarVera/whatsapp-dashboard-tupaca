const { Router } = require("express");
const router = Router();
const {
  getCategorys,
} = require("../controllers/categorysControllers");

router.get("/", getCategorys);

module.exports = router;
