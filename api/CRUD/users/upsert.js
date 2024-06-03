module.exports = (db) => (req, res, next) => {
    const { id, email } = req.body;
    const sql = `
      INSERT INTO App_User (Id_User, email)
      VALUES (?, ?)
      ON CONFLICT(id) DO UPDATE SET
        email = excluded.email
    `;
    db.run(sql, [id, name, email], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send('User upserted');
      }
    });
  };

// Faire en sorte de selectionner l'id et choisir les key a modifier
  