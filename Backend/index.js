const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
const { createDefaultCategories } = require("./src/controllers/categorysControllers");

conn.sync({ force: true }).then(() => {
  createDefaultCategories().then(() => { // Call createDefaultCategories here
    server.listen(port, () => {
      console.log(`%s listening at port ${port}`);
    });
  });
});
