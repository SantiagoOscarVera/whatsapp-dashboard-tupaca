const { Category } = require("../db.js");

const createDefaultCategories = async () => {
  try {
    const categories = ["To do", "In progress", "Made"];

    for (const category of categories) {
      await Category.findOrCreate({ where: { name: category } });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCategorys = async (req, res) => {
  try {
    const data = await Category.findAll();
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



module.exports = {
  createDefaultCategories,
  getCategorys,
};
