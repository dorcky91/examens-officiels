const Examen = require("../models/examen");
const Classe = require("../models/classe");

// Crear examen
exports.createExamen = async (req, res) => {
  try {
    const { body } = req;
    const { idClasse, nom } = body;

    const classe = await Classe.findById(idClasse);
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });

    const materiaExiste = classe.matieres.some(
      (m) => m.nom.toLowerCase() === nom.toLowerCase()
    );
    if (!materiaExiste)
      return res.status(400).json({ msg: "La materia no existe en esa clase" });

    const examen = new Examen(body);
    await examen.save();
    res.status(201).json(examen);
  } catch (error) {
    res.status(400).json({ msg: "Error al crear examen", error });
  }
};

// Obtener todos los exámenes
exports.getExamenes = async (req, res) => {
  try {
    const examenes = await Examen.find().populate("idClasse", "nom");
    res.json(examenes);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener exámenes", error });
  }
};

// Obtener exámenes por clase
exports.getExamenesByClasse = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse } = params;
    console.log(idClasse);
    const examenes = await Examen.find({ idClasse }).populate(
      "idClasse",
      "nom"
    );
    console.log(examenes);
    res.json(examenes);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener exámenes", error });
  }
};

// Obtener exámenes por clase y materia
exports.getExamenesByClasseAndMatiere = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse, nom } = params;
    const examenes = await Examen.find({ idClasse, nom }).populate(
      "idClasse",
      "nom"
    );
    res.json(examenes);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener exámenes", error });
  }
};

// // Obtener exámenes por año (ej: "2023") o mes-año (ej: "Juillet 2023")
// exports.getExamenesByDate = async (req, res) => {
//   try {
//     const { params } = req;
//     const { date } = params; // Ejemplo: "2023" o "Juillet 2023"
//     const examenes = await Examen.find({
//       date: { $regex: date, $options: "i" },
//     });
//     res.json(examenes);
//   } catch (error) {
//     res.status(500).json({ msg: "Error al obtener exámenes por fecha", error });
//   }
// };

// Obtener exámenes por materia y fecha
exports.getExamenesByMatiereAndDate = async (req, res) => {
  try {
    const { nom, date } = req.params;
    // ejemplo: nom="Español", date="2023" o "Juillet 2023"

    const examenes = await Examen.find({
      nom, // filtra materia específica
      date: { $regex: date, $options: "i" }, // busca coincidencia en fecha
    }).populate("idClasse", "nom");

    res.json(examenes);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al obtener exámenes por materia y fecha", error });
  }
};
