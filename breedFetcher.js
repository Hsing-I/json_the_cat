const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breedName}`, (error, response, body) => {
    /*console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);*/
    if (error) {
      return callback(error, null);
    }
    if (body === '[]') {
      const msg = `${breedName} can't be found`;
      return callback(msg, body);
    }

    const description = JSON.parse(body)[0]['description'];
    return callback(null, description);
  });
};

module.exports = { fetchBreedDescription };