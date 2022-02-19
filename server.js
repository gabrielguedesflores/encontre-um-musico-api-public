const app = require('./src/app');

const port = process.env.PORT || 3000;
//const port = 8081;

app.listen(port, () => {
  console.log('Aplicação rodando na porta ', port);
});