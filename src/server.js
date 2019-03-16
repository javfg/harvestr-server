require('./config/config');

const express = require('express');
const axios = require('axios');


// Define app.
const server = express();
const port = process.env.PORT;
const rateLimitDelay = 2500;


server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const doRequest = function (url) {
  return axios(url);
}


// TODO: Refactor logging.
// TODO: Rate limiting?
// GET - query.
server.get('/query', async (req, res) => {
  let data;

  try {
    console.log('query:', req.query.address.substring(0, 80));

    doc = await doRequest(req.query.address);
  } catch (e) {
    console.log('e', e);

    // TODO: Log errors!
    res.status(400).send();
  } finally {
    console.log('doc', doc.status);

    res.status(200).send(doc.data);
  }
});


/*************************************************************************/
// Set up server.

// Start listening.
server.listen(port, () => {});
console.log(`Server listening on port ${port}`);

// Export for tests.
module.exports = { server };
