const { Router } = require("express");
const {
  createExamAnglais,
  readAllExamenesAnglais,
  updateExamAnglais,
  deleteExamAnglais,
  readOneExamAnglais,
} = require("../../controllers/ExamAnglaisController");
const {
  celebrateExamValidator,
} = require("../../midlewares/celebrateExamValidator");

const router = Router();

// C - Create
router.post("/", createExamAnglais);

// R - Read
router.get("/", readAllExamenesAnglais);

// R - Read un examen específico
router.get("/:examAnglaisId", readOneExamAnglais);

// U - Update
router.put("/:examAnglaisId", updateExamAnglais);

// D - Delete
router.delete("/:examAnglaisId", deleteExamAnglais);

module.exports = router;
