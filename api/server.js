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

// COURS PATHS
const readAllCours = require('./CRUD/cours/readAll');
const readCours = require('./CRUD/cours/read');
const delCours = require('./CRUD/cours/delete');
const upsertCours = require('./CRUD/cours/upsert');

// PLANS PATHS
const readAllPlans = require('./CRUD/plans/readAll');
const readPlans = require('./CRUD/plans/read');
const delPlans = require('./CRUD/plans/delete');
const upsertPlans = require('./CRUD/plans/upsert');

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

// COURS ROUTES
router.route('/cour/:userId')
    .get(readCours(db))
    .delete(delCours(db));
router.route('/cour')
    .put(upsertCours(db));
router.route('/cours')
    .get(readAllCours(db));

// PLANS ROUTES
router.route('/plan/:userId')
    .get(readPlans(db))
    .delete(delPlans(db));
router.route('/plan')
    .put(upsertPlans(db));
router.route('/plans')
    .get(readAllPlans(db));

app.use(router);

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
