// routes/classe.routes.js
const Router = require("express");
const router = Router();
const ctrl = require("../../controllers/classeController");

router.post("/", ctrl.createClasse);
router.get("/", ctrl.getClasses);
router.get("/:idClasse", ctrl.getClasseById);
router.get("/:idClasse/matieres", ctrl.getMatieresByClasse);
router.get("/:idClasse/matieres/:idMatiere", ctrl.getMatiereByClasse);
router.put("/:idClasse", ctrl.updateClasse);
router.delete("/:idClasse", ctrl.deleteClasse);

// materias dentro de una clase
router.post("/:idClasse/matieres", ctrl.addMatiereToClasse);
router.delete("/:idClasse/matieres/:idMatiere", ctrl.removeMatiereFromClasse);

module.exports = router;
