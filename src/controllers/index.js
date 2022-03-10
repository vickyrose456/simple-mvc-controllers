const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));

const hostPage1 = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));

const hostPage2 = (req, res) => res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));

const notFound = (req, res) => {
  // need to also send status code -- this case = 404 for not found
  res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};

const getName = (req, res) => {
  // content type will be json, status code = 200 automatically, writes response and sends it back
  res.json({ name });
};

const setName = (req, res) => {
  // console.dir(req.body);
  // if either field is empty, send 400 bad request response error
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json(
      {
        error: 'First and last name are both required.',
        id: 'badRequest',
      },
    );
  }// end if statement

  // update the name
  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({ name });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
