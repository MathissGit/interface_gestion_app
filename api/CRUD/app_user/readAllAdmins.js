module.exports = (db) => (req, res, next) => {
    const sql = 'SELECT * FROM Admin';
    db.all(sql, [], (err, rows) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.json(rows);
      }
    });
  };
  