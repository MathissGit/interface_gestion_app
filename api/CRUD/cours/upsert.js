module.exports = (db) => (req, res, next) => {
    const { id, cost } = req.body;
    const sql = `
      INSERT INTO Course (Id_Course, cost)
      VALUES (?, ?)
      ON CONFLICT(id) DO UPDATE SET
        cost = excluded.cost
    `;
    db.run(sql, [id, cost], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send('Course upserted');
      }
    });
  };

// Faire en sorte de selectionner l'id et choisir les key a modifier
  