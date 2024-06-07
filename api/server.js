const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const router = express.Router();
const port = 3001;

app.use(cors());
app.use(express.json());

// Ouvrir la base de données SQLite locale
const db = new sqlite3.Database('./database/database.db', (err) => {
  if (err) {
    console.error('Erreur lors de l\'ouverture de la base de données :', err);
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
    .get((req, res, next) => { console.log(`GET /user/${req.params.userId}`); next(); }, readUser(db))
    .delete((req, res, next) => { console.log(`DELETE /user/${req.params.userId}`); next(); }, delUser(db));
router.route('/user')
    .put((req, res, next) => { console.log('PUT /user'); next(); }, upsertUser(db));
router.route('/users')
    .get((req, res, next) => { console.log('GET /users'); next(); }, readAllAppUsers(db));
router.route('/admins')
    .get((req, res, next) => { console.log('GET /admins'); next(); }, readAllAdmins(db));
router.route('/coachs')
    .get((req, res, next) => { console.log('GET /coachs'); next(); }, readAllCoachs(db));
router.route('/patients')
    .get((req, res, next) => { console.log('GET /patients'); next(); }, readAllPatients(db));

// COURS ROUTES
router.route('/cour/:userId')
    .get((req, res, next) => { console.log(`GET /cour/${req.params.userId}`); next(); }, readCours(db))
    .delete((req, res, next) => { console.log(`DELETE /cour/${req.params.userId}`); next(); }, delCours(db));
router.route('/cour')
    .put((req, res, next) => { console.log('PUT /cour'); next(); }, upsertCours(db));
router.route('/cours')
    .get((req, res, next) => { console.log('GET /cours'); next(); }, readAllCours(db));

// PLANS ROUTES
router.route('/plan/:userId')
    .get((req, res, next) => { console.log(`GET /plan/${req.params.userId}`); next(); }, readPlans(db))
    .delete((req, res, next) => { console.log(`DELETE /plan/${req.params.userId}`); next(); }, delPlans(db));
router.route('/plan')
    .put((req, res, next) => { console.log('PUT /plan'); next(); }, upsertPlans(db));
router.route('/plans')
    .get((req, res, next) => { console.log('GET /plans'); next(); }, readAllPlans(db));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
