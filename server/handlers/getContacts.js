const query = require('../db/query');

const queryContacts = ({
  pageSize,
  pageNumber,
  keywords = '',
  sortOrder,
  sortColumnName
}) => {
  const limitStart = pageSize * (pageNumber - 1);

  return query(`SELECT C.*, IFNULL(D.count, 0) as detailCount FROM expedia.contact C 
    LEFT JOIN (SELECT UserID, COUNT(UserID) as count FROM expedia.contactdetail GROUP BY UserID) D on C.UserID = D.UserID
    ${keywords ? `WHERE C.Name LIKE '%${keywords}%'` : ''} ${sortColumnName ? `ORDER BY ${sortColumnName} ${sortOrder}` : ''}
    LIMIT ${limitStart},${pageSize}`);
}
const queryContactsNumber = (keywords) => query(`SELECT COUNT(Name) as count from contact ${keywords ? `WHERE Name LIKE '%${keywords}%'` : ''}`);


const getContacts = (req, res, next) => {
    const {
      pageNumber,
      pageSize,
      sortColumnName,
      sortOrder,
      keywords
    } = req.query;

    Promise.all([
      queryContacts({
        pageNumber,
        pageSize,
        sortColumnName,
        sortOrder,
        keywords
      }),
      queryContactsNumber(keywords)
    ]).then(([ contacts, count ]) => {
      res.send({
        contacts,
        count: count[0].count
      });
    }).catch(err => {
      res.status(500).send(err);
    })
}

module.exports = {
  getContacts: getContacts
}