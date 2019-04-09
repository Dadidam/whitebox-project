const request = require('request');

module.exports = app => {
  app.get('/api/products', (req, res) => {
    // res.json({ test: true });
    request('https://next.json-generator.com/api/json/get/EkzBIUWNL', function(
      error,
      response,
      body
    ) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      res.send(JSON.parse(body));
    });
  });
};
