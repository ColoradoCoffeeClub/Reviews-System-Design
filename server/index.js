const express = require('express');

const app = express();
const PORT = 3000;


app.use(express.json())
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

app.get('/reviews/:product_id/list', (req, res) => {
  let product_id = req.params.product_id;
  let selectedProduct;
  for (let i = 0; i < mockData.length; i++) {
    if (mockData[i].product === product_id) {
      console.log(mockData[i].product)
      selectedProduct = mockData[i];
    }
  }
  console.log(req.query.sort)
  res.send(selectedProduct)
})

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
