const db = require("../config/database");
//const { jwtTokenDecodificator } = require("./jwtTokenManipulator");
const jwt = require("bcryptjs");


// ==> Método responsável por criar um novo 'User':
exports.createUser = async (req, res) => {
  const { user_full_name, user_name, user_email, user_pass, user_bio, user_state, user_city, user_image, user_twitter, user_facebook, user_instagram, user_active } = req.body;
  const { rows } = await db.query(
    "INSERT INTO users (user_full_name, user_name, user_email, user_pass, user_bio, user_state, user_city, user_image, user_twitter, user_facebook, user_instagram, user_active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
    [user_full_name, user_name, user_email, user_pass, user_bio, user_state, user_city, user_image, user_twitter, user_facebook, user_instagram, user_active]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      user: { user_full_name, user_name, user_email, user_pass, user_bio, user_state, user_city, user_image, user_twitter, user_facebook, user_instagram, user_active }
    },
  });
};

// ==> Método responsável por listar todos os 'Users':
exports.listAllUsers = async (req, res) => {
  const response = await db.query('SELECT * FROM users ORDER BY user_full_name ASC');
  res.status(200).send(response.rows);
};

// ==> Método responsável por listar todos os 'Users' ativos:
exports.listAllUsersActive = async (req, res) => {
  const user_active = parseInt(req.params.user_active);
  const response = await db.query('SELECT * FROM users WHERE user_active = $1 ORDER BY user_full_name ASC', [user_active]);
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'User' pelo 'Id':
exports.findUserById = async (req, res) => {
  const user_id = parseInt(req.params.user_id);
  const response = await db.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
  res.status(200).send(response.rows);
}

exports.loginToUser = async (req, res) => {
  const { user_name, user_pass } = req.body;
  const { rows } = await db.query(
    "SELECT * FROM users WHERE user_name = $1 AND user_pass = $2", [user_name, user_pass]
  );

  res.status(200).send({
    message: "User exists",
    body: {
      user: rows
    },
  });
};

exports.alterActiveUser = async (req, res) => {
  const { user_active, user_id } = req.body;
  const { rows } = await db.query(
    "UPDATE users SET user_active = $1 WHERE user_id = $2;", [user_active, user_id]
  );

  res.status(200).send({
    message: "User Updated!",
    body: {
      user: rows
    },
  });
};

// ==> Método responsável por buscar os badges de instrumentos:
exports.instrument_badges = async (req, res) => {
  const response = await db.query('SELECT * FROM instrument_badges;');
  res.status(200).send(response.rows);
};

exports.decodeToken = async (req, res) => {
  const { user_token } = req.body;
  console.log(jwt.decode(req.body));
  const { rows } = await db.query("SELECT * FROM users");

  res.status(200).send({
    acess_token: user_token,
  });
};

exports.userFriends = async (req, res) => {
  const { user_id } = req.body;
  const { rows } = await db.query(
    "SELECT * FROM friends WHERE user_id = $1", [user_id]
  );

  res.status(200).send({
    user_friends: rows,
  });
};

exports.findBadges = async (req, res) => {
  const { instrument_badges_id } = req.body;
  const { rows } = await db.query(
    "SELECT * FROM users WHERE instrument_badges_id LIKE $1", [ instrument_badges_id ]
  );

  res.status(200).send({
    instrument_badges: rows,
  });
};

exports.forgotPassword = async (req, res) => {
  const { user_name } = req.body;
  const { rows } = await db.query(
    "SELECT * FROM users WHERE user_name = $1", [ user_name ]
  );

  res.status(200).send({
    user_data: rows,
  });
};

exports.changePassword = async (req, res) => {
  const { user_pass, user_id } = req.body;
  const { rows } = await db.query(
    "UPDATE users SET user_pass = $1 WHERE user_id = $2", [ user_pass, user_id ]
  );

  res.status(200).send({
    log: 'Password changed!',
  });
};