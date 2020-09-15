const express = require("express");
const app = express();
const PORT = 3000;
const {
  addReview,
  updateReview,
  deleteReview,
  getReviews,
  findHighestID,
} = require("../databases/controller.js");
require("newrelic");

app.use(express.json());
app.use(express.static("public"));

app.get("/reviews/:product_id/list", (req, res) => {
  let product_id = req.params.product_id;
  // Get all reviews from the database that match the productID
  let queryStart = Date.now();
  getReviews(product_id, 10).then((data) => {
    let reviews = data;
    let queryEnd = Date.now();
    let timeTaken = queryEnd - queryStart;
    console.log("query time", timeTaken + " ms");
    reviews = reviews.filter((review) => review.reported === 0);
    res.send(reviews);
  });
});

app.get("/reviews/:product_id/meta", (req, res) => {
  let product_id = req.params.product_id;
  let queryStart = Date.now();
  // Get all reviews from the database that match the productID
  getReviews(product_id, 100).then((data) => {
    // Measure query time
    let queryEnd = Date.now();
    let timeTaken = queryEnd - queryStart;
    console.log("query time", timeTaken + " ms");
    let reviews = data;
    // Find total numbers of each rating and whether user recommended or not
    const ratingOnes = reviews.filter((review) => review.rating === 1).length;
    const ratingTwos = reviews.filter((review) => review.rating === 2).length;
    const ratingThrees = reviews.filter((review) => review.rating === 3).length;
    const ratingFours = reviews.filter((review) => review.rating === 4).length;
    const ratingFives = reviews.filter((review) => review.rating === 5).length;
    const recommendedOne = reviews.filter((review) => review.recommended === 1)
      .length;
    const recommendedZero = reviews.filter((review) => review.recommended === 0)
      .length;
    let metaObject = {
      product_id: product_id,
      ratings: {
        1: ratingOnes,
        2: ratingTwos,
        3: ratingThrees,
        4: ratingFours,
        5: ratingFives,
      },
      recommended: {
        0: recommendedZero,
        1: recommendedOne,
      },
    };
    res.send(metaObject);
  });
});

app.post("/reviews/:product_id", (req, res) => {
  let productID = Number(req.params.product_id);
  let timestamp = Date.now();
  let newReview = {
    product_id: productID,
    rating: req.body.rating,
    summary: req.body.summary,
    recommended: req.body.recommended,
    response: null,
    body: req.body.body,
    date: timestamp,
    reviewer_name: req.body.name,
    reviewer_email: req.body.email,
    helpfulness: 0,
    photos: req.body.photos,
    reported: 0,
    characteristics: req.body.characteristics,
  };
  //Start timer
  let queryStart = Date.now();
  findHighestID()
    .then((id) => {
      // Incrementing the review id to be 1 higher than the highest one
      let newID = id + 1;
      console.log("reviewID", newID);
      //Create the new review based on data sent in req body
      newReview.review_id = newID;
      return newReview;
    })
    .then((newReview) =>
      addReview(newReview)
        .then(() => {
          //End timer and log time taken
          let queryEnd = Date.now();
          let timeTaken = queryEnd - queryStart;
          console.log(`query time`, timeTaken + " ms");
          res.send("added review");
        })
        .catch(() => console.log("error in adding created review"))
    )
    .catch(() => console.log("error in calling addReview"));
});

app.put("/reviews/helpful/:review_id", (req, res) => {
  //Get id from parameters
  let review_id = req.params.review_id;
  //Start timer
  let queryStart = Date.now();
  //Interact with controller.js function to update the review
  updateReview(review_id, { $inc: { helpfulness: 1 } }).then((data) => {
    //End timer and log time taken
    let queryEnd = Date.now();
    let timeTaken = queryEnd - queryStart;
    console.log("query time", timeTaken + " ms");
    res.send("marked as helpful");
  });
});

app.put("/reviews/report/:review_id", (req, res) => {
  //Get id from parameters
  let review_id = req.params.review_id;
  //Start timer
  let queryStart = Date.now();
  //Interact with controller.js function to update the review
  updateReview(review_id, { $set: { reported: 1 } }).then((data) => {
    //End timer and log time taken
    let queryEnd = Date.now();
    let timeTaken = queryEnd - queryStart;
    console.log("query time", timeTaken + " ms");
    res.send("reported");
  });
});

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
