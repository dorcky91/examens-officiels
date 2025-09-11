const Niveau = require("../models/niveau");

// Crear clase
const createClasse = async (req, res) => {
  try {
    const niveau = new Niveau(req.body);
    await niveau.save();
    res.status(201).json(niveau);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear clase", error });
  }
};

// Obtener todas las clases
const getAllClasses = async (req, res) => {
  try {
    const niveaux = await Niveau.find();
    res.json(niveaux);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener clases", error });
  }
};

// Obtener una clase por ID
const getOneClasse = async (req, res) => {
  try {
    const { niveauId } = req.params;
    const niveau = await Niveau.findById(niveauId);
    if (!niveau) return res.status(404).json({ msg: "Clase no encontrada" });
    res.json(niveau);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener clase", error });
  }
};

// Actualizar clase
const updateClasse = async (req, res) => {
  try {
    const { niveauId } = req.params;
    await Niveau.findByIdAndUpdate(niveauId, req.body);
    const updatedNiveau = await Niveau.findById(niveauId);
    res.json(updatedNiveau);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar clase", error });
  }
};

// Eliminar clase
const deleteClasse = async (req, res) => {
  try {
    const { niveauId } = req.params;
    await Niveau.findByIdAndDelete(niveauId);
    res.json({ msg: "Clase eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar clase", error });
  }
};

module.exports = {
  createClasse,
  getAllClasses,
  getOneClasse,
  updateClasse,
  deleteClasse,
};
