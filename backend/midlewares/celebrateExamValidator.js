const { celebrate, Segments } = require("celebrate");
const { schema } = require("../validators/examValidator");

const celebrateExamValidator = celebrate({
  [Segments.BODY]: schema,
});

module.exports = { celebrateExamValidator };
