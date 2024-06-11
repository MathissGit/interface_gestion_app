module.exports = (db) => (req, res, next) => {
  const userId = req.params.userId;
  const planId = req.params.planId;
  const sql = 'SELECT * FROM PayDetails WHERE Id_User = ? AND Id_Plan = ?';
  db.get(sql, [userId, planId], (err, row) => {
      if (err) {
          return res.status(500).send(err.message);
      } else if (row) {
          return res.json(row);
      } else {
          return res.status(404).send('Plan not found');
      }
  });
};
