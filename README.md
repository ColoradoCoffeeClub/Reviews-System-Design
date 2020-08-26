In this system design project, I designed and optimized the API for legacy front-end code of a retail portal and scaled this application to support 100 requests per second on AWS EC2 using a t2.micro instance. I followed the Agile methodology with regular code reviews and implemented both a MongoDB and PostgreSQL server to see which one would be more efficient, MongoDB won. 

Below is the documentation for the API I built:

# Reviews API

### Current Host
The API can currently be found at (insert URL here)

### List Reviews
Returns a list of reviews for a particular product specified by the product_id parameter.  
- This list *does not* include any reported reviews.

`GET /reviews/:product_id/list`

Parameters

| Parameter  | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| product_id | integer | Specifies the product for which to retrieve reviews.         |
| page       | integer | Selects the page of results to return.  Default 1.           |
| count      | integer | Specifies how many results per page to return. Default 5.    |
| sort       | text    | Changes the sort order of reviews to be based on "newest", "helpful", or "relevant" |

### Get Review Metadata

Returns review metadata for a given product specified by the product_id parameter.

`GET /reviews/:product_id/meta`

Parameters

| Parameter  | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| product_id | integer | Required ID of the product for which data should be returned |


### Add a Review

Adds a review for the given product.

`POST /reviews/:product_id`

Parameters

| Parameter  | Type    | Description                                       |
| ---------- | ------- | ------------------------------------------------- |
| product_id | integer | Required ID of the product to post the review for |

Body Parameters

| Parameter       | Type   | Description                                                  |
| --------------- | ------ | ------------------------------------------------------------ |
| rating          | int    | Integer (1-5) indicating the review rating                   |
| summary         | text   | Summary text of the review                                   |
| body            | text   | Continued or full text of the review                         |
| recommend       | bool   | Value indicating if the reviewer recommends the product      |
| name            | text   | Username for question asker                                  |
| email           | text   | Email address for question asker                             |
| photos          | [text] | Array of text urls that link to images to be shown           |
| characteristics | object | Object of keys representing characteristic_id and values representing the review value for that characteristic. { "14": 5, "15": 5 //...} (must send at least an empty object)|

Response

`Status: 201 CREATED `

### Mark Review as Helpful

Updates a review to show it was found helpful.

`PUT /reviews/helpful/:review_id`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| reveiw_id | integer | Required ID of the review to update |

Response

`Status: 204 NO CONTENT `


### Report Review

Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.

`PUT /reviews/report/:review_id`

Parameters

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| review_id | integer | Required ID of the review to update |

Response

`Status: 204 NO CONTENT `
