const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const router = express.Router();
const port = 3001;

app.use(cors());
app.use(express.json());

// Ouvrir la base de données SQLite local
const db = new sqlite3.Database('./database/database.db', (err) => {
  if (err) {
    console.error('Erreur lors de l\'ouverture de la base de données:', err);
  } else {
    console.log('Connecté à la base de données SQLite.');
  }
});

// APP_USERS PATHS
const readAllAdmins = require('./CRUD/app_user/readAllAdmins');
const readAllCoachs = require('./CRUD/app_user/readAllCoachs');
const readAllPatients = require('./CRUD/app_user/readAllPatients');
const readAllAppUsers = require('./CRUD/app_user/readAllUsers');
const readUser = require('./CRUD/app_user/read');
const delUser = require('./CRUD/app_user/delete');
const upsertUser = require('./CRUD/app_user/upsert');

// APP_USER ROUTES
router.route('/user/:userId')
    .get(readUser(db))
    .delete(delUser(db));
router.route('/user')
    .put(upsertUser(db));
router.route('/users')
    .get(readAllAppUsers(db));
router.route('/admins')
    .get(readAllAdmins(db));
router.route('/coachs')
    .get(readAllCoachs(db));
router.route('/patients')
    .get(readAllPatients(db));

app.use(router);

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
