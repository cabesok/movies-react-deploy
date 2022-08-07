const express = require("express");
//const multer = require("multer");
//const path = require("path");
const router = express.Router();
const moviesController = require("../controllers/moviesController")


/* var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../../public/uploads/products'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage}); */


// Endpoints para APIs

router.get("/movies", moviesController.list);
router.get("/genres", moviesController.genresList);
router.get("/buscar", moviesController.buscar);
router.get("/movies/:id", moviesController.detail);






module.exports = router;