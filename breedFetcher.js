const request = require('request');

const readDescription = (breedName) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
  //console.log('error:', error);
  //console.log('statusCode:', response && response.statusCode);
  //console.log('body:', body);
    if (error !== null && error.code === 'ENOTFOUND') {
      console.log("The site can't be reached");
    } else {
      if (body === '[]') {
        console.log(`${breedName} is not found`);
      } else {
        const data = JSON.parse(body);
        console.log(data[0]['description']);
      }
    }
  });
};

const breed = process.argv.slice(2)[0];
readDescription(breed);