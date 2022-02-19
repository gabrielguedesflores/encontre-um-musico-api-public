const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'User':

// ==> Rota responsável por criar um novo 'User': (POST): localhost:3000/api/user
router.post('/user', userController.createUser);

// ==> Rota responsável por listar todos os 'Users': (GET): localhost:3000/api/users
router.get('/users', userController.listAllUsers);

// ==> Rota responsável por listar todos os 'Users' ativos: (GET): localhost:3000/api/users
router.get('/users/active/:user_active', userController.listAllUsersActive);

// ==> Rota responsável por selecionar 'User' pelo 'user_id': (GET): localhost:3000/api/users/:user_id
router.get('/users/:user_id', userController.findUserById);

// ==> Rota responsável por logar via API: (POST): localhost:3000/api/users/login
router.post('/users/login', userController.loginToUser);

// ==> Rota responsável por inativar um usuário via API: (PUT): localhost:3000/api/user
router.put('/user/active', userController.alterActiveUser);

// ==> Rota responsável por retornar os instrumentos disponíveis via API: (GET): localhost:3000/api/user
router.get('/user/instrument_badges', userController.instrument_badges);

// ==> Rota responsável decodificar o token JWT e retornar para o frontend: (POST): localhost:3000/api/user/token
router.post('/user/token', userController.decodeToken);

// ==> Rota responsável retornar a lista de amigos do usuário: (POST): localhost:3000/api/user/friends
router.post('/user/friends', userController.userFriends);

module.exports = router;