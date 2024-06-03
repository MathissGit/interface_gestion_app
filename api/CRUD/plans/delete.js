module.exports = (db) => (req, res, next) => {
  const planId = req.params.planId;
  const sql = 'DELETE FROM Plans WHERE Id_Plan = ?';
  db.run(sql, [planId], function (err) {
    if (err) {
      return res.status(500).send(err);
    } else if (this.changes === 0) {
      return res.status(404).send('plan not found');
    } else {
      return res.status(200).send('plan deleted');
    }
  });
};
