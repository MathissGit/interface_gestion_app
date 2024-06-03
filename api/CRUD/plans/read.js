module.exports = (db) => (req, res, next) => {
    const planId = req.params.planId;
    const sql = 'SELECT * FROM Plans WHERE Id_Plan = ?';
    db.get(sql, [planId], (err, row) => {
      if (err) {
        return res.status(500).send(err);
      } else if (row) {
        return res.json(row);
      } else {
        return res.status(404).send('Plan not found');
      }
    });
  };
  