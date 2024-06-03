module.exports = (db) => (req, res, next) => {
    const userId = req.params.userId;
    const sql = 'DELETE FROM App_User WHERE Id_User = ?';
    db.run(sql, [userId], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else if (this.changes === 0) {
        return res.status(404).send('User not found');
      } else {
        return res.status(200).send('User deleted');
      }
    });
  };
  