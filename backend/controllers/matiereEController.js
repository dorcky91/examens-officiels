const MatiereE = require("../models/matiereE");

// Crear materia
const createMatiere = async (req, res) => {
  try {
    const matiere = new MatiereE(req.body);
    await matiere.save();
    res.status(201).json(matiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear materia", error });
  }
};

// Obtener todas las materias
const getAllMatieres = async (req, res) => {
  try {
    const matieres = await MatiereE.find().populate(
      "niveauId",
      "nom description"
    );
    res.json(matieres);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener materias", error });
  }
};

// Obtener materias de una clase específica
const getMatieresByClasse = async (req, res) => {
  try {
    const { niveauId } = req.params;
    const matieres = await MatiereE.find({ niveauId });
    res.json(matieres);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener materias por clase", error });
  }
};

// Obtener una materia por ID
const getOneMatiere = async (req, res) => {
  try {
    const { matiereId } = req.params;
    const matiere = await MatiereE.findById(matiereId).populate(
      "niveauId",
      "nom description"
    );
    if (!matiere) return res.status(404).json({ msg: "Materia no encontrada" });
    res.json(matiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener materia", error });
  }
};

// Actualizar materia
const updateMatiere = async (req, res) => {
  try {
    const { matiereId } = req.params;
    await MatiereE.findByIdAndUpdate(matiereId, req.body);
    const updatedMatiere = await MatiereE.findById(matiereId);
    res.json(updatedMatiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar materia", error });
  }
};

// Eliminar materia
const deleteMatiere = async (req, res) => {
  try {
    const { matiereId } = req.params;
    await MatiereE.findByIdAndDelete(matiereId);
    res.json({ msg: "Materia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar materia", error });
  }
};

module.exports = {
  createMatiere,
  getAllMatieres,
  getMatieresByClasse,
  getOneMatiere,
  updateMatiere,
  deleteMatiere,
};
