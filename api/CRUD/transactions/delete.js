module.exports = (db) => (req, res, next) => {
  const userId = req.params.userId;
  const planId = req.params.planId;
  const sql = 'DELETE FROM Pay WHERE Id_User = ? AND Id_Plan = ?';
  db.run(sql, [userId, planId], function(err) {
    if (err) {
      return res.status(500).send(err.message);
    } else if (this.changes === 0) {
      return res.status(404).send('Plan not found');
    } else {
      return res.status(200).send('Plan deleted');
    }
  });
};
