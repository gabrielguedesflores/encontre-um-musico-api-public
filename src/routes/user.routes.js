const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'User':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/user
router.post('/user', userController.createUser);

// ==> Rota responsável por listar todos os 'Users': (GET): localhost:3000/api/users
router.get('/users', userController.listAllUsers);


// ==> Rota responsável por selecionar 'User' pelo 'user_id': (GET): localhost:3000/api/users/:user_id
router.get('/users/:user_id', userController.findUserById);

// ==> Rota responsável por logar via API: (POST): localhost:3000/api/users/login
router.post('/users/login', userController.loginToUser);

module.exports = router;