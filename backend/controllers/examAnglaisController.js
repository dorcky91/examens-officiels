const { request, response } = require("express");
const Anglais_9AF = require("../models/ExamAnglaisModel");

const createExamAnglais = async (req = request, res = response) => {
  try {
    const { body } = req;
    const examAnglais = new Anglais_9AF(body);
    await examAnglais.save();
    res.status(201).json({ examAnglais });
  } catch (error) {
    res.status(500).json({ msg: "Error al crear un examen de inglés", error });
  }
};

const readAllExamenesAnglais = async (req = request, res = response) => {
  try {
    const recordLength = await Anglais_9AF.countDocuments();
    const examenesAnglais = await Anglais_9AF.find();
    // const users = await User.find();

    res.status(200).json({
      recordLength,
      examenesAnglais,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al leer los exámenes", error });
  }
};

const readOneExamAnglais = async (req = request, res = response) => {
  try {
    const { params } = req;

    const { examAnglaisId } = params;
    const oneExam = await Anglais_9AF.findById(examAnglaisId);

    if (!oneExam) {
      return res.status(404).json({ msg: "Examen no encontrado" });
    }

    res.status(200).json({ oneExam });
  } catch (error) {
    res.status(500).json({ msg: "Error al leer el examen", error });
  }
};

const updateExamAnglais = async (req = request, res = response) => {
  try {
    const { params, body } = req;
    const { examAnglaisId } = params;
    await Anglais_9AF.findByIdAndUpdate(examAnglaisId, body);
    const examToShow = await Anglais_9AF.findById(examAnglaisId);
    res.status(202).json({ examToShow });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el examen", error });
  }
};

const deleteExamAnglais = async (req = request, res = response) => {
  try {
    const { examAnglaisId } = req.params;
    const desactivarExam = { active: false };
    await Anglais_9AF.findByIdAndUpdate(examAnglaisId, desactivarExam);
    const examToShow = await Anglais_9AF.findById(examAnglaisId);
    res.status(202).json({ msg: "Se desactivó el registro", examToShow });
  } catch (error) {
    res.status(500).json({ msg: "Error al borrar el examen", error });
  }
};

module.exports = {
  createExamAnglais,
  readAllExamenesAnglais,
  updateExamAnglais,
  deleteExamAnglais,
  readOneExamAnglais,
};
