const { Note } = require("../db.js");

const getNotes = async (req, res) => {
  try {
    const data = await Note.findAll();
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getNoteID = async (req, res) => {
  const { id } = req.params;
  const data = await Note.findAll();
  try {
    if (id) {
      const noteID = await data.filter((note) => note.id === id);
      if (noteID.length) return res.json(noteID);
    }
  } catch (error) { }
};

const postNotes = async (req, res) => {
  const { title, content, archived, category } = req.body;

  try {
    const data = await Note.create({
      title,
      content,
      archived,
      category,
    });
    res.json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateNotes = async (req, res) => {
  const data = req.body;
  const { id } = req.params;

  const note = await Note.findByPk(id);

  try {
    let update = await Note.update(
      {
        title: data.title || note.title,
        content: data.content || note.content,
        archived: data.archived || note.archived,
        category: data.category || note.category,
      },
      {
        where: { id },
      }
    );

    res.send("Modified note");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);

  try {
    await note.destroy();
    res.json(note.title + "Deleted successfully");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getNotes,
  postNotes,
  updateNotes,
  deleteNote,
  getNoteID,
};
