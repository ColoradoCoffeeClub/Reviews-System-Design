const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static('public'));

const mockData = [
  {
  "product": "24",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 57454,
          "rating": 5,
          "summary": "TEST",
          "recommend": 1,
          "response": null,
          "body": "ETSTLEKSJTLKJSELKTJLKSEJLKJLKJTL:KSJLKTJLKSEJTLKSJL:KJLK",
          "date": "2020-08-22T00:00:00.000Z",
          "reviewer_name": "TEST",
          "helpfulness": 4,
          "photos": []
      },
      {
          "review_id": 57459,
          "rating": 4,
          "summary": "these overalls are too short!!! maybe I am just too tall. ",
          "recommend": 1,
          "response": null,
          "body": "these overalls are too short!!! maybe I am just too tall. Mario, you can wear these",
          "date": "2020-08-22T00:00:00.000Z",
          "reviewer_name": "Luigi",
          "helpfulness": 2,
          "photos": [
              {
                  "id": 27152,
                  "url": "https://toppng.com/uploads/preview/luigi-nsmbod-super-mario-luigi-11563054900re9hy0bndm.png"
              }
          ]
      },
      {
          "review_id": 57458,
          "rating": 5,
          "summary": "These overalls are the best!!! ",
          "recommend": 1,
          "response": null,
          "body": "they match my red shirt perfectly! let's go save the princess",
          "date": "2020-08-22T00:00:00.000Z",
          "reviewer_name": "Its me! Mario",
          "helpfulness": 1,
          "photos": [
              {
                  "id": 27151,
                  "url": "https://pngimg.com/uploads/mario/mario_PNG88.png"
              }
          ]
      },
      {
          "review_id": 57455,
          "rating": 5,
          "summary": "pretttyyyyyyyyyy good",
          "recommend": 0,
          "response": null,
          "body": "50 characters?????????????????????/???????????????",
          "date": "2020-08-22T00:00:00.000Z",
          "reviewer_name": "yes",
          "helpfulness": 0,
          "photos": []
      },
      {
          "review_id": 57457,
          "rating": 1,
          "summary": "sgsdfgsdfg",
          "recommend": 1,
          "response": null,
          "body": "sdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgsdfgadfg",
          "date": "2020-08-22T00:00:00.000Z",
          "reviewer_name": "new review ",
          "helpfulness": 0,
          "photos": []
      }
  ]
},
{
  "product": "25",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 97,
          "rating": 1,
          "summary": "Et occaecati necessitatibus qui rerum odio.",
          "recommend": 0,
          "response": "null",
          "body": "Rerum fugiat itaque molestiae ratione ut vel at iste quo. Provident culpa enim nobis nulla libero et. Aliquid optio magni. Eum autem quia amet asperiores qui quam quaerat qui.",
          "date": "2019-07-29T00:00:00.000Z",
          "reviewer_name": "Lavern_Nitzsche97",
          "helpfulness": 23,
          "photos": []
      },
      {
          "review_id": 93,
          "rating": 5,
          "summary": "Aut voluptas qui accusamus magni et odio sunt voluptatem similique.",
          "recommend": 1,
          "response": "null",
          "body": "Eaque ut qui ad repellendus omnis et a. Magni aut facilis nemo et omnis ut qui. Nesciunt aut itaque consequatur repudiandae eius consectetur ad iusto ducimus. Dolorem eos impedit aut aliquam laboriosam quam. Reiciendis beatae ducimus delectus aliquam.",
          "date": "2019-02-13T00:00:00.000Z",
          "reviewer_name": "Kaleb_Wuckert36",
          "helpfulness": 22,
          "photos": []
      },
      {
          "review_id": 95,
          "rating": 5,
          "summary": "Eum ad et et accusamus illum earum.",
          "recommend": 1,
          "response": "null",
          "body": "Est occaecati culpa voluptas natus eos. Ut molestiae quod similique dolores est dolorem omnis non. Quia id explicabo rerum corrupti consequatur ab dolores omnis.",
          "date": "2019-03-02T00:00:00.000Z",
          "reviewer_name": "Victor.Goodwin",
          "helpfulness": 21,
          "photos": []
      },
      {
          "review_id": 94,
          "rating": 5,
          "summary": "Cum omnis officia ea aut.",
          "recommend": 1,
          "response": "null",
          "body": "Iure velit unde in. Molestiae repellendus debitis et quae dolorem quod. Ab voluptate dolorum aliquam sed.",
          "date": "2019-02-19T00:00:00.000Z",
          "reviewer_name": "Alvera.Baumbach66",
          "helpfulness": 18,
          "photos": [
              {
                  "id": 43,
                  "url": "https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              }
          ]
      },
      {
          "review_id": 96,
          "rating": 1,
          "summary": "Facilis eligendi dolorum voluptatibus accusamus.",
          "recommend": 0,
          "response": "null",
          "body": "Sint nemo cumque. Explicabo quibusdam et totam corrupti sequi laboriosam. In sit tempore voluptatem perferendis culpa nemo.",
          "date": "2018-10-27T00:00:00.000Z",
          "reviewer_name": "Karley96",
          "helpfulness": 18,
          "photos": []
      }
  ]
}
]

const mockMetaData = [
  {
    "product_id": "24",
    "ratings": {
        "1": 2,
        "2": 2,
        "4": 6,
        "5": 14
    },
    "recommended": {
        "0": 3,
        "1": 21
    },
    "characteristics": {
        "Fit": {
            "id": 78,
            "value": "3.8000"
        },
        "Length": {
            "id": 79,
            "value": "3.8500"
        },
        "Comfort": {
            "id": 80,
            "value": "4.0500"
        },
        "Quality": {
            "id": 81,
            "value": "3.9000"
        }
    }
},
{
  "product_id": "25",
  "ratings": {
      "1": 2,
      "5": 3
  },
  "recommended": {
      "0": 2,
      "1": 3
  },
  "characteristics": {
      "Fit": {
          "id": 82,
          "value": "1.8000"
      },
      "Length": {
          "id": 83,
          "value": "2.2000"
      },
      "Comfort": {
          "id": 84,
          "value": "3.4000"
      },
      "Quality": {
          "id": 85,
          "value": "3.4000"
      }
  }
}
]

app.get('/reviews/:product_id/list', (req, res) => {
  let product_id = req.params.product_id;
  let selectedProduct = null;
  // Find the product for which the reviews are requested by iterating through product list and matching product ID
  for (let i = 0; i < mockData.length; i++) {
    if (mockData[i].product === product_id) {
      selectedProduct = mockData[i];
    }
  }
  // Initialize the array to send with whatever is currently in that product's results array (holding reviews)
  let arrayToSend = selectedProduct.results;
  // If sort query specified to be helpful, sort the results array by the helpfulness property (most helpful at top)
  if (req.query.sort === 'helpful') {
    arrayToSend = selectedProduct.results.sort((a,b) => b.helpfulness - a.helpfulness);
  }
  // If sort query specified to be newest, sort the results array by the date created property (most recent at top)
  if (req.query.sort === 'newest') {
    arrayToSend = selectedProduct.results.sort((a,b) => new Date(b.date) - new Date(a.date));
  }
  //if count is specified only send up to that amount of reviews back
  if (req.query.count) {
    arrayToSend = arrayToSend.slice(0, req.query.count)
  }
  selectedProduct.results = arrayToSend;
  res.send(selectedProduct)
})

app.get('/reviews/:product_id/meta', (req, res) => {
  // Find the product for which metadata is requested by iterating through product list and matching product ID
  let selectedData = null;
  let product_id = req.params.product_id;
  for (let i = 0; i < mockMetaData.length; i++) {
    if (mockMetaData[i].product_id === product_id) {
      selectedData = mockMetaData[i];
    }
  }
  res.send(selectedData);
});

app.post('/reviews/:product_id', (req, res) => {
   // Find the product for which a new review needs to be inserted
   let selectedProduct = null;
   let product_id = req.params.product_id;
   for (let i = 0; i < mockData.length; i++) {
     if (mockData[i].product === product_id) {
       selectedProduct = mockData[i];
     }
   }
   // Create new ID integer by sorting the current array of reviews, finding the most recent review, and adding 1 to its ID
   let sortedNewest = selectedProduct.results.sort((a,b) => new Date(b.date) - new Date(a.date));
   let lastIndex = sortedNewest.length - 1;
   let newID = sortedNewest[lastIndex].review_id + 2;
   // Create a new review based on the data sent in the req body
   let timestamp = new Date();
   let newReview = {
    "review_id": newID,
    "rating": req.body.rating,
    "summary": req.body.summary,
    "recommend": req.body.recommend,
    "response": null,
    "body": req.body.body,
    "date": timestamp,
    "reviewer_name": req.body.name,
    "helpfulness": 0,
    "photos": req.body.photos
   }
  // Push the newly created review to the array containing the reviews in the selected product
   selectedProduct.results.push(newReview);
   res.status(201).end();
});

app.put('/reviews/helpful/:review_id', (req, res) => {
    //USING MOCK DATA THAT DOES NOT EXIST YET IN THIS DOCUMENT, WILL EXIST WHEN DATABASE IS SEEDED
    // Find the review for which a the helpful property needs to be needs to be incremented from the database
   let selectedProduct = null;
   let review_id = req.params.review_id;
   for (let i = 0; i < mockData.length; i++) {
     if (mockData[i].review_id === review_id) {
       selectedReview = mockData[i];
     }
   }
   //increment the number at the helpful property
   selectedReview.helpfulness++;
})


app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
