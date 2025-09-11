const Anglais = require("../../models/examenes/Anglais");

// Crear examen
const createExamAnglais = async (req, res) => {
  try {
    const { body } = req;
    const examAnglais = new Anglais(body);
    await examAnglais.save();
    res.status(201).json(examAnglais);
  } catch (error) {
    res.status(500).json({ msg: "Error al crear un examen de anglais", error });
  }
};

// Obtener todos
const getAllExamsAnglais = async (req, res) => {
  try {
    const examenesAnglais = await Anglais.find();
    res.status(200).json(examenesAnglais);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al leer los exámenes de inglés", error });
  }
};

// Obtener uno
const getOneExamAnglaisById = async (req, res) => {
  try {
    const { params } = req;
    const { examenAnglaisId } = params;
    const oneExamenAnglais = await Anglais.findById(examenAnglaisId);
    if (!oneExamenAnglais)
      return res.status(404).json({ msg: "Examen no encontrado" });
    res.status(200).json(oneExamenAnglais);
  } catch (error) {
    res.status(500).json({ msg: "Error al leer el examen", error });
  }
};

// Actualizar
const updateExamAnglais = async (req, res) => {
  try {
    const { params, body } = req;
    const { examenAnglaisId } = params;
    await Anglais.findByIdAndUpdate(examenAnglaisId, body);

    const examenAnglaisActualizado = await Anglais.findById(examenAnglaisId);
    if (!examenAnglaisActualizado)
      return res.status(404).json({ msg: "Examen no encontrado" });
    res.status(202).json(examenAnglaisActualizado);
  } catch (error) {
    res.status(400).json({ msg: "Error al actualizar el examen", error });
  }
};

// Eliminar
const deleteExamAnglais = async (req, res) => {
  try {
    const { examenAnglaisId } = req.params;
    const desactivarExamenAnglais = { active: false };
    await Anglais.findByIdAndUpdate(examenAnglaisId, desactivarExamenAnglais);
    const examenAnglaisToShow = await Anglais.findById(examenAnglaisId);

    if (!examenAnglaisToShow)
      return res.status(404).json({ error: "Examen no encontrado" });

    res.status(202).json({
      message: "Se desactivó el examen correctamente",
      examenAnglaisToShow,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al desactivar el examen de inglés", error });
  }
};

module.exports = {
  createExamAnglais,
  getAllExamsAnglais,
  getOneExamAnglaisById,
  updateExamAnglais,
  deleteExamAnglais,
};
