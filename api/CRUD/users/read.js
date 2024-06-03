module.exports = (db) => (req, res, next) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM App_User WHERE Id_User = ?';
    db.get(sql, [userId], (err, row) => {
      if (err) {
        return res.status(500).send(err);
      } else if (row) {
        return res.json(row);
      } else {
        return res.status(404).send('User not found');
      }
    });
  };
  