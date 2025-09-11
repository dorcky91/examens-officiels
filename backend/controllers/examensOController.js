const ExamenO = require("../models/examen");

// Crear examen
const createExam = async (req, res) => {
  try {
    const examen = new ExamenO(req.body);
    await examen.save();
    res.status(201).json(examen);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear examen", error });
  }
};

// Obtener todos los exámenes
const getAllExams = async (req, res) => {
  try {
    const examens = await ExamenO.find({ active: true })
      .populate("idMatiere", "nom")
      .populate("idClasse", "nom");
    res.json(examens);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener exámenes", error });
  }
};

// Obtener examen específico
const getOneExam = async (req, res) => {
  try {
    const { examenId } = req.params;
    const examen = await ExamenO.findById(examenId)
      .populate("idMatiere", "nom")
      .populate("idClasse", "nom");
    if (!examen) return res.status(404).json({ msg: "Examen no encontrado" });
    res.json(examen);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener examen", error });
  }
};

// Actualizar examen
const updateExam = async (req, res) => {
  try {
    const { examenId } = req.params;
    await ExamenO.findByIdAndUpdate(examenId, req.body);
    const updatedExam = await ExamenO.findById(examenId)
      .populate("idMatiere", "nom")
      .populate("idClasse", "nom");
    res.json(updatedExam);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar examen", error });
  }
};

// Desactivar examen
const deleteExam = async (req, res) => {
  try {
    const { examenId } = req.params;
    await ExamenO.findByIdAndUpdate(examenId, { active: false });
    res.json({ msg: "Examen desactivado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al desactivar examen", error });
  }
};

// Obtener todos los exámenes de una materia
const getExamsByMatiere = async (req, res) => {
  try {
    const { matiereId } = req.params;
    const examens = await ExamenO.find({
      idMatiere: matiereId,
      active: true,
    }).populate("idClasse", "nom");
    res.json(examens);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al obtener exámenes por materia", error });
  }
};

// Obtener exámenes de una clase agrupados por materia
const getExamsByClasseGroupedByMatiere = async (req, res) => {
  try {
    const { classeId } = req.params;
    const examens = await ExamenO.find({
      idClasse: classeId,
      active: true,
    }).populate("idMatiere", "nom");

    const grouped = examens.reduce((acc, examen) => {
      const matiereName = examen.idMatiere.nom;
      if (!acc[matiereName]) acc[matiereName] = [];
      acc[matiereName].push(examen);
      return acc;
    }, {});

    res.json(grouped);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener exámenes agrupados", error });
  }
};

module.exports = {
  createExam,
  getAllExams,
  getOneExam,
  updateExam,
  deleteExam,
  getExamsByMatiere,
  getExamsByClasseGroupedByMatiere,
};
