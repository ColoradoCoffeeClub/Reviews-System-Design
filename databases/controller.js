const { Review } = require("./mongoDB.js");

const addReview = (reviewObj) => {
  return Review.create(reviewObj)
    .then(() => console.log("Created review"))
    .catch(() => console.log("ERROR IN CREATION OF DB RECORD"));
};

const updateReview = (review_id_param, reviewObj) => {
  return Review.updateOne({ review_id: review_id_param }, reviewObj)
    .then(() => console.log(`Updated review ${review_id_param}`))
    .catch(() => console.log(`ERROR IN UPDATING REVIEW ${review_id_param}`));
};

const deleteReview = (review_id_param) => {
  Review.deleteOne({ review_id: review_id_param })
    .then(() => console.log(`Deleted review ${review_id_oaram}`))
    .catch(() => console.log(`ERROR IN DELETING REVIEW ${review_id_oaram}`));
};

const getReviews = (productID, amount) => {
  return Review.find({ product_id: productID })
    .hint({ product_id: 1 })
    .limit(amount)
    .then((data) => {
      console.log(`Retrieved ${data.length} reviews`);
      return data;
    })
    .catch(() =>
      console.log(`ERROR IN RETRIEVING REVIEWS FOR PRODUCT ${productID}`)
    );
};

const findHighestID = () => {
  return Review.find()
    .sort({ review_id: -1 })
    .limit(1)
    .then((data) => data[0].review_id)
    .catch(() => console.log("error in retrieving highest ID"));
};

module.exports = {
  addReview,
  updateReview,
  deleteReview,
  getReviews,
  findHighestID,
};
