// routes/taskRoutes.js

const router = require("express").Router();
const Task = require("../models/task");
const auth = require("../middleware/auth");

// CREATE
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user.id
  });
  res.json(task);
});

// GET ALL
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;