module.exports = (db) => (req, res, next) => {
    const { Id_User, lastname, firstname, datebirth, email, role } = req.body;
    const sql = `
      INSERT INTO App_User (Id_User, lastname, firstname, datebirth, email, role)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        email = excluded.email
    `;
    db.run(sql, [Id_User, lastname, firstname, datebirth, email, role], function (err) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send('User upserted');
      }
    });
  };

  