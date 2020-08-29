const faker = require("faker");
const fs = require("fs");

let numberOfRecords = 1000;

const generateData = () => {
  const startTime = Date.now(); //timestamp for when script starts

  //create the file starting with an open bracket
  fs.writeFileSync("data.json", "[");
  let i = 1;
  //Starting at 1, do the following for each record until reached number of records
  while (i <= numberOfRecords) {
    //Create photos array with random number of photos and mock data
    let photos = [];
    let randomNumberOfPhotos = Math.floor(Math.random() * 5) + 1;
    let j = 0;
    while (j < randomNumberOfPhotos) {
      let singlePhoto = {
        id: faker.random.number({ min: 1, max: 1000 }),
        url: faker.image.imageUrl(500, 500, "review_photo"),
      };
      photos.push(singlePhoto);
      j++;
    }

    //Create characteristics array with random number of chars and mock data
    let characteristics = [];
    let possibleCharacteristicNames = [
      "fit",
      "comfort",
      "quality",
      "width",
      "length",
      "size",
    ];
    let randomNumberOfChars = Math.floor(Math.random() * (4 - 0 + 1));
    j = 0;
    while (j <= randomNumberOfChars) {
      let singleCharacteristic = {
        id: j,
        name: possibleCharacteristicNames[j],
        value: faker.random.number({ min: 1, max: 5 }),
      };
      characteristics.push(singleCharacteristic);
      j++;
    }

    //Create actual review record using photos and chars arrays from above
    let review = {
      product_id: faker.random.number({ max: 1000 }),
      review_id: i,
      rating: faker.random.number({ min: 1, max: 5 }),
      summary: faker.lorem.sentence(),
      recommended: faker.random.number(1),
      response: faker.lorem.sentence(),
      body: faker.lorem.sentences(),
      date: faker.date.recent(),
      reviewer_name: faker.name.firstName(),
      reviewer_email: faker.internet.email(),
      helpfulness: faker.random.number(1),
      photos: photos,
      reported: 0,
      characteristics: characteristics,
    };

    //append each record to the created file with commas in between and a final closing bracket
    fs.appendFileSync("data.json", JSON.stringify(review, null, 1));

    i !== numberOfRecords
      ? fs.appendFileSync("data.json", ",")
      : fs.appendFileSync("data.json", "]");
    i++;

    //console logs to track timing
    i % 500000 === 0 && i !== numberOfRecords
      ? console.log(
          `${i} records inserted, ${
            (Date.now() - startTime) / 1000
          } seconds have elapsed`
        )
      : null;
  }

  console.log(
    `${i - 1} records were inserted in a total of ${
      (Date.now() - startTime) / 1000
    } seconds`
  );
};

generateData();
