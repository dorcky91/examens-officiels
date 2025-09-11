const { Router } = require("express");
const router = Router();
const {
  createClasse,
  getAllClasses,
  getOneClasse,
  updateClasse,
  deleteClasse,
} = require("../../controllers/niveauController");

// CRUD
router.post("/", createClasse);
router.get("/", getAllClasses);
router.get("/:niveauId", getOneClasse);
router.put("/:niveauId", updateClasse);
router.delete("/:niveauId", deleteClasse);

module.exports = router;
