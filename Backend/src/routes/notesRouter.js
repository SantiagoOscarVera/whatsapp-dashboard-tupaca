const { Router } = require("express");
const router = Router();
const {
  getNotes,
  postNotes,
  updateNotes,
  deleteNote,
  getNoteID,
} = require("../controllers/notesControllers");

router.get("/", getNotes);

router.get("/:id", getNoteID);

router.post("/", postNotes);

router.delete("/:id", deleteNote);

router.put("/:id", updateNotes);

module.exports = router;
