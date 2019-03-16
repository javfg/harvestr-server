require('./config/config');

const express = require('express');
const axios = require('axios');


// Define app.
const server = express();
const port = process.env.PORT;


// GET - query.
server.get('/query', async (req, res) => {
  try {
    console.log('query:', req.query);

    const doc = await axios(req.query.address);

    console.log('doc', doc.status);

    res.status(200).send(doc.data);
  } catch (e) {
    // TODO: Log errors!
    res.status(400).send();
  }
});


/*************************************************************************/
// Set up server.

// Start listening.
server.listen(port, () => {});
console.log(`Server listening on port ${port}`);

// Export for tests.
module.exports = { server };
