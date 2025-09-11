const { Router } = require("express");
const router = Router();
const {
  createMatiere,
  getAllMatieres,
  getMatieresByClasse,
  getOneMatiere,
  updateMatiere,
  deleteMatiere,
} = require("../../controllers/matiereEController");

// CRUD
router.post("/", createMatiere);
router.get("/", getAllMatieres);
router.get("/niveau/:niveauId", getMatieresByClasse); // todas las materias de una clase
router.get("/:matiereId", getOneMatiere);
router.put("/:matiereId", updateMatiere);
router.delete("/:matiereId", deleteMatiere);

module.exports = router;
