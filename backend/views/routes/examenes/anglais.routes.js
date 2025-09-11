const { Router } = require("express");
const router = Router();
const {
  createExamAnglais,
  getAllExamsAnglais,
  getOneExamAnglaisById,
  updateExamAnglais,
  deleteExamAnglais,
} = require("../../../controllers/examenes/anglaisController");

// CRUD
router.post("/", createExamAnglais);
router.get("/", getAllExamsAnglais);
router.get("/:examenAnglaisId", getOneExamAnglaisById);
router.put("/:examenAnglaisId", updateExamAnglais);
router.delete("/:examenAnglaisId", deleteExamAnglais);

module.exports = router;
