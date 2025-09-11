// routes/examen.routes.js
const { Router } = require("express");
const router = Router();
const ctrl = require("../../controllers/examensController");

router.post("/", ctrl.createExamen);
router.get("/", ctrl.getExamenes);
router.get("/classe/:idClasse", ctrl.getExamenesByClasse);
router.get(
  "/classe/:idClasse/matiere/:nom",
  ctrl.getExamenesByClasseAndMatiere
);
router.get("/date/:date", ctrl.getExamenesByDate);

module.exports = router;
