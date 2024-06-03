module.exports = (db) => (req, res, next) => {
    const sql = 'SELECT * FROM App_User';
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json(rows);
      }
    });
  };
  