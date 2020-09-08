const Faker = require("faker");

const randomProductID = (context, events, next) => {
  context.vars.product_id = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
  return next();
};

const randomReviewID = (context, events, next) => {
  context.vars.review_id = Math.floor(
    Math.random() * (9900000 - 9000000 + 1) + 1
  );
  return next();
};

module.exports = {
  randomProductID,
  randomReviewID,
};
