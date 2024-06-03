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

// USERS PATHS
const readAllUsers = require('./CRUD/users/readAll');
const readUser = require('./CRUD/users/read');
const delUser = require('./CRUD/users/delete');
const upsertUser = require('./CRUD/users/upsert');

// PLANS PATHS
const readAllPlans = require('./CRUD/plans/readAll');
const readPlan = require('./CRUD/plans/read');
const delPlan = require('./CRUD/plans/delete');
const upsertPlan = require('./CRUD/plans/upsert');

// COURS PATHS
const readAllCours = require('./CRUD/cours/readAll');
const readCours = require('./CRUD/cours/read');
const delCours = require('./CRUD/cours/delete');
const upsertCours = require('./CRUD/cours/upsert');

// USER ROUTES
router.route('/user/:userId')
    .get(readUser(db))
    .delete(delUser(db));
router.route('/user')
    .put(upsertUser(db));
router.route('/users')
    .get(readAllUsers(db));

// // PLANS ROUTES
// router.route('/user/:userId')
//     .get(readPlan(db))
//     .delete(delPlan(db));
// router.route('/user')
//     .put(upsertPlan(db));
// router.route('/users')
//     .get(readAllPlans(db));

// // COURS ROUTES
// router.route('/cours/:coursId')
//     .get(readCours(db))
//     .delete(delCours(db));
// router.route('/cours')
//     .put(upsertCours(db));
// router.route('/cours')
//     .get(readAllCours(db));

app.use(router);

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
