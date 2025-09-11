const Espagnol = require("../../models/examenes/Espagnol");

// Crear examen
const createExamEspagnol = async (req, res) => {
  try {
    const { body } = req;
    const examEspagnol = new Espagnol(body);
    await examEspagnol.save();
    res.status(201).json(examEspagnol);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al crear un examen de espagnol", error });
  }
};

// Obtener todos
const getAllExamsEspagnol = async (req, res) => {
  try {
    const examenesEspagnol = await Espagnol.find();
    res.status(200).json(examenesEspagnol);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Error al leer los exámenes de espagnol", error });
  }
};

// Obtener uno
const getOneExamEspagnolById = async (req, res) => {
  try {
    const { params } = req;
    const { examenEspagnolId } = params;
    const oneExamenEspagnol = await Espagnol.findById(examenEspagnolId);
    if (!oneExamenEspagnol)
      return res.status(404).json({ msg: "Examen no encontrado" });
    res.status(200).json(oneExamenEspagnol);
  } catch (error) {
    res.status(500).json({ msg: "Error al leer el examen", error });
  }
};

// Actualizar
const updateExamEspagnol = async (req, res) => {
  try {
    const { params, body } = req;
    const { examenEspagnolId } = params;
    await Espagnol.findByIdAndUpdate(examenEspagnolId, body);

    const examenEspagnolActualizado = await Espagnol.findById(examenEspagnolId);
    if (!examenEspagnolActualizado)
      return res.status(404).json({ msg: "Examen no encontrado" });
    res.status(202).json(examenEspagnolActualizado);
  } catch (error) {
    res.status(400).json({ msg: "Error al actualizar el examen", error });
  }
};

// Eliminar
const deleteExamEspagnol = async (req, res) => {
  try {
    const { examenEspagnolId } = req.params;
    const desactivarExamenEspagnol = { active: false };
    await Espagnol.findByIdAndUpdate(
      examenEspagnolId,
      desactivarExamenEspagnol
    );
    const examenEspagnolToShow = await Espagnol.findById(examenEspagnolId);

    if (!examenEspagnolToShow)
      return res.status(404).json({ error: "Examen no encontrado" });

    res.status(202).json({
      message: "Se desactivó el examen correctamente",
      examenEspagnolToShow,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al desactivar el examen espagnol", error });
  }
};

module.exports = {
  createExamEspagnol,
  getAllExamsEspagnol,
  getOneExamEspagnolById,
  updateExamEspagnol,
  deleteExamEspagnol,
};
