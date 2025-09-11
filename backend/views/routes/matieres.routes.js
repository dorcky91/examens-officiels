const { Router } = require("express");
const {
  createMatiere,
  readAllMatieres,
  readOneMatiereById,
  updateMatiereById,
  readAllMatieresByIdClasse,
} = require("../../controllers/matieresController");

const router = Router();

// C - Create
router.post("/", createMatiere);

// R - Read
router.get("/", readAllMatieres);

// R - Read una materia en específico
router.get("/classe/:idClasse", readAllMatieresByIdClasse);
router.get("/:idMatiere", readOneMatiereById);

// U - Update
router.put("/:idMatiere", updateMatiereById);

module.exports = router;
