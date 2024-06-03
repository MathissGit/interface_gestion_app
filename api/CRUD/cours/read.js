module.exports = (db) => (req, res, next) => {
    const coursId = req.params.coursId;
    const sql = 'SELECT * FROM Course WHERE Id_Course = ?';
    db.get(sql, [coursId], (err, row) => {
      if (err) {
        return res.status(500).send(err);
      } else if (row) {
        return res.json(row);
      } else {
        return res.status(404).send('Course not found');
      }
    });
  };
  