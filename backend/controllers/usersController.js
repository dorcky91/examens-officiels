const { request, response } = require("express");
const User = require("../models/usersModel");

const createUser = async (req = request, res = response) => {
  try {
    const { body } = req;
    const user = new User(body);
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: "Error al crear un usuario", error });
  }
};

const readUser = async (req = request, res = response) => {
  try {
    const { limit = 100 } = req.query;
    const recordLength = await User.countDocuments();
    const queryParams = { active: true };
    const users = await User.find(queryParams).limit(Number(limit));
    // const users = await User.find();

    res.status(200).json({
      recordLength,
      users,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error al leer los usuarios", error });
  }
};

const updateUser = async (req = request, res = response) => {
  try {
    const { params, body } = req;
    const { userId } = params;
    await User.findByIdAndUpdate(userId, body);
    const userToShow = await User.findById(userId);
    res.status(202).json({ userToShow });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar el usuario", error });
  }
};

const deleteUser = async (req = request, res = response) => {
  try {
    const { userId } = req.params;
    const desactivarUser = { active: false };
    await User.findByIdAndUpdate(userId, desactivarUser);
    const userToShow = await User.findById(userId);
    res.status(202).json({ msg: "Se desactivó el registro", userToShow });
  } catch (error) {
    res.status(500).json({ msg: "Error al borrar el usuario", error });
  }
};

module.exports = { createUser, readUser, updateUser, deleteUser };
