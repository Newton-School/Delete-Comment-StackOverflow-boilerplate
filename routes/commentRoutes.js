const express = require("express");

const { createComment, getComment, deleteComment } = require("../controllers/commentControllers");

const router = express.Router();

router.get("/:id", getComment);
router.delete("/delete/:id", deleteComment);
router.post("/create", createComment);

module.exports = router;