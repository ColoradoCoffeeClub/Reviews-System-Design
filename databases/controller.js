const { Review } = require("./mongoDB.js");

const addReview = (reviewObj) => {
  Review.create(reviewObject)
    .then(() => console.log("Created review"))
    .catch(() => console.log("ERROR IN CREATION OF DB RECORD"));
};

const updateReview = (review_id_param, reviewObj) => {
  Review.updateOne({ review_id: review_id_param }, reviewObj)
    .then(() => console.log(`Updated review ${review_id_oaram}`))
    .catch(() => console.log(`ERROR IN UPDATING REVIEW ${review_id_oaram}`));
};

const deleteReview = (review_id_param) => {
  Review.deleteOne({ review_id: review_id_param })
    .then(() => console.log(`Deleted review ${review_id_oaram}`))
    .catch(() => console.log(`ERROR IN DELETING REVIEW ${review_id_oaram}`));
};

const getReviews = (productID) => {
  Review.findAll({ product_id: productID })
    .then((data) => {
      console.log("Retrieved ${data.length} reviews");
      return data;
    })
    .catch(() =>
      console.log(`ERROR IN RETRIEVING REVIEWS FOR PRODUCT ${productID}`)
    );
};

module.exports = { addReview, updateReview, deleteReview, getReviews };
