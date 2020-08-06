const query = require('../db/query');

const queryDetails = (userId) => query(`SELECT * FROM expedia.contactdetail WHERE UserID = ${userId}`);

const getDetails = (req, res, next) => {
  const { userId } = req.params;
  queryDetails(userId).then(details => {
    res.send({ details });
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = {
  getDetails: getDetails
}