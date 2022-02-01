const db = require("../config/database");

// ==> Método responsável por criar um novo 'User':

exports.createUser = async (req, res) => {
  const { user_full_name, user_name, user_email, user_pass } = req.body;
  const { rows } = await db.query(
    "INSERT INTO users (user_full_name, user_name, user_email, user_pass) VALUES ($1, $2, $3, $4)",
    [user_full_name, user_name, user_email, user_pass]
  );

  res.status(201).send({
    message: "User added successfully!",
    body: {
      user: { user_full_name, user_name, user_email, user_pass }
    },
  });
};

// ==> Método responsável por listar todos os 'Users':
exports.listAllUsers = async (req, res) => {
  const response = await db.query('SELECT * FROM users ORDER BY user_full_name ASC');
  res.status(200).send(response.rows);
};