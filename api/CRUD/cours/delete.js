module.exports = (db) => (req, res, next) => {
    const coursId = req.params.coursId;
    const sql = 'DELETE FROM Course WHERE Id_Course = ?';
    db.run(sql, [coursId], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else if (this.changes === 0) {
        return res.status(404).send('User not found');
      } else {
        return res.status(200).send('User deleted');
      }
    });
  };
  