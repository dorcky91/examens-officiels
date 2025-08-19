const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  userName: {
    type: String,
    required: [true, "Campo requerido"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Campo requerido"],
    unique: true,
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, "Campo requerido"],
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("User", UserSchema);
