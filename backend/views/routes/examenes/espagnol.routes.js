const { Router } = require("express");
const router = Router();
const {
  createExamEspagnol,
  getAllExamsEspagnol,
  getOneExamEspagnolById,
  updateExamEspagnol,
  deleteExamEspagnol,
} = require("../../../controllers/examenes/espagnolController");

// CRUD
router.post("/", createExamEspagnol);
router.get("/", getAllExamsEspagnol);
router.get("/:examenEspagnolId", getOneExamEspagnolById);
router.put("/:examenEspagnolId", updateExamEspagnol);
router.delete("/:examenEspagnolId", deleteExamEspagnol);

module.exports = router;
