const Matiere = require("../models/matieresModel");

const createMatiere = async (req, res) => {
  try {
    const { body } = req;
    const matiere = new Matiere(body);
    await matiere.save();
    res.status(201).json(matiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear una materia", error });
  }
};

const readAllMatieres = async (req, res) => {
  try {
    const matieres = await Matiere.find();

    res.status(200).json(matieres);
  } catch (error) {
    res.status(500).json({ msg: "Error al leer las materias", error });
  }
};

const readAllMatieresByIdClasse = async (req, res) => {
  try {
    const { idClasse } = req.params;
    const matieres = await Matiere.find({ idClasse }).populate(
      "_id",
      "nom description"
    );
    res.status(200).json(matieres);
  } catch (error) {
    res.status(500).json({ msg: "Error al leer las materias", error });
  }
};

const readOneMatiereById = async (req, res) => {
  try {
    const { params } = req;

    const { idMatiere } = params;
    const oneMatiere = await Matiere.findById(idMatiere);

    if (!oneMatiere) {
      return res.status(404).json({ msg: "Materia no encontrada" });
    }

    res.status(200).json(oneMatiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al leer una materia", error });
  }
};

const updateMatiereById = async (req, res) => {
  try {
    const { params, body } = req;
    const { idMatiere } = params;
    await Matiere.findByIdAndUpdate(idMatiere, body);

    const matiereToShow = await Matiere.findById(idMatiere);
    res.status(202).json(matiereToShow);
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar una materia", error });
  }
};

module.exports = {
  createMatiere,
  updateMatiereById,
  readOneMatiereById,
  readAllMatieres,
  readAllMatieresByIdClasse,
};
