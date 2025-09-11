const { Router } = require("express");
const router = Router();
const {
  createExam,
  getAllExams,
  getOneExam,
  updateExam,
  deleteExam,
  getExamsByMatiere,
  getExamsByClasseGroupedByMatiere,
} = require("../../controllers/examensOController");

// CRUD
router.post("/", createExam);
router.get("/", getAllExams);
router.get("/:examenId", getOneExam);
router.put("/:examenId", updateExam);
router.delete("/:examenId", deleteExam);

// Filtros
router.get("/matiere/:matiereId", getExamsByMatiere);
router.get("/classe/:classeId/matieres", getExamsByClasseGroupedByMatiere);

module.exports = router;
