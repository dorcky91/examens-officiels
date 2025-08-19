const { Router } = require("express");
const {
  createUser,
  readUser,
  updateUser,
  deleteUser,
} = require("../../controllers/usersController");
const { celebrateValidator } = require("../../midlewares/celebrateValidator");
// const { validatePost } = require("../../midlewares/validatorSimple");
// const { schema } = require("../../validators/userValidator");
const router = Router();

// C - Create
router.post(
  "/",
  // validatePost(schema),
  celebrateValidator,
  createUser
);

// R - Read
router.get("/", readUser);

// U - Update
router.put("/:userId", updateUser);

// D - Delete
router.delete("/:userId", deleteUser);

module.exports = router;
