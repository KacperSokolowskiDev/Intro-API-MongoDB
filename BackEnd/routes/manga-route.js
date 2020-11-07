const express = require("express");
const controllers = require("../controllers/manga-controllers");

// Creating a router, Allow to add any amout of routes
// CRUD : Create, Read, Update, Delete
const router = express.Router();

// Create
router.post("/", controllers.addManga);
// Read
router.get("/", controllers.fetchMangas);
// Update
router.put("/", controllers.updateManga);
// Delete
router.delete("/", controllers.supressManga);

module.exports = router;
