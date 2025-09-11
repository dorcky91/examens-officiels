// controllers/classe.controller.js
const Classe = require("../models/classe");

// Crear clase
exports.createClasse = async (req, res) => {
  try {
    const newClasse = new Classe(req.body);
    await newClasse.save();
    res.status(201).json(newClasse);
  } catch (error) {
    res.status(400).json({ msg: "Error al crear clase", error });
  }
};

// Obtener todas las clases
exports.getClasses = async (req, res) => {
  try {
    const classes = await Classe.find();
    res.json(classes);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener clases", error });
  }
};

// Obtener todas las materias de una clase
exports.getMatieresByClasse = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse } = params; // ID de la clase
    const classe = await Classe.findById(idClasse).select(
      "matieres nom description"
    );

    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });

    res.json(classe.matieres); // devolvemos solo las materias
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener materias", error });
  }
};

// Obtener una materia de una clase
exports.getMatiereByClasse = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse, idMatiere } = params;
    const classe = await Classe.findById(idClasse).select("matieres");
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });

    const matiere = classe.matieres.find((m) => m._id.toString() === idMatiere);

    if (!matiere) return res.status(404).json({ msg: "Materia no encontrada" });

    res.json(matiere);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener materia", error });
  }
};

// Obtener clase por ID
exports.getClasseById = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse } = params;
    const classe = await Classe.findById(idClasse);
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });
    res.json(classe);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener clase", error });
  }
};

// Actualizar clase
exports.updateClasse = async (req, res) => {
  try {
    const { params, body } = req;
    const { idClasse } = params;

    const classe = await Classe.findByIdAndUpdate(idClasse, body, {
      new: true,
    });
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });
    res.json(classe);
  } catch (error) {
    res.status(400).json({ msg: "Error al actualizar clase", error });
  }
};

// Eliminar clase
exports.deleteClasse = async (req, res) => {
  try {
    const { params } = req;
    const { idClasse } = params;
    const classe = await Classe.findByIdAndDelete(idClasse);
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });
    res.json({ msg: "Clase eliminada" });
  } catch (error) {
    res.status(500).json({ msg: "Error al eliminar clase", error });
  }
};

// ➕ Agregar materia a una clase
exports.addMatiereToClasse = async (req, res) => {
  try {
    const { idClasse } = req.params; // id de la clase
    const { nomClasse, description, imgURL, icone } = req.body;

    const classe = await Classe.findById(idClasse);
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });

    classe.matieres.push({ nomClasse, description, imgURL, icone });
    await classe.save();

    res.json(classe);
  } catch (error) {
    res.status(400).json({ msg: "Error al agregar materia", error });
  }
};

// ➖ Eliminar materia de una clase
exports.removeMatiereFromClasse = async (req, res) => {
  try {
    const { idClasse, idMatiere } = req.params;
    const classe = await Classe.findById(idClasse);
    if (!classe) return res.status(404).json({ msg: "Clase no encontrada" });

    classe.matieres = classe.matieres.filter(
      (m) => m._id.toString() !== idMatiere
    );
    await classe.save();

    res.json(classe);
  } catch (error) {
    res.status(400).json({ msg: "Error al eliminar materia", error });
  }
};
