const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reviews', {useNewUrlParser: true, useUnifiedTopology: true});

const Review = mongoose.model('review', {
  product_id: {type: Number, required: true},
  review_id: {type: Number, unique: true, required: true},
  rating: {type: Number, required: true},
  summary: {type: String, required: true},
  recommended: {type: Number, required: true},
  response: {type: String},
  body: {type: String},
  date: {type: Date, default: Date.now, required: true},
  reviewer_name: {type: String, required: true},
  reviewer_email: {type: String, required: true}
  helpfulness: {type: Number, default: 0},
  photos: [{id: Number, url: String}],
  reported: {type: Number},
  characteristics: [{
    id: Number,
    name: String,
    value: Number
  }]
});
