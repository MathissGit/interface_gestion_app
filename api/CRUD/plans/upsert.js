module.exports = (db) => (req, res, next) => {
    const { id, name } = req.body;
    const sql = `
      INSERT INTO Plan (Id_Plan, name)
      VALUES (?, ?)
      ON CONFLICT(id) DO UPDATE SET
        name = excluded.name
    `;
    db.run(sql, [id, name], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send('Plan upserted');
      }
    });
  };

// Faire en sorte de selectionner l'id et choisir les key a modifier
  