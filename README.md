
## Run

#### Clone repository

```bash
  git clone https://github.com/gabrielguedesflores/encontre-um-musico-api-public.git
```

#### Enter in the folder

```bash
  cd encontre-um-musico-api-public
```

#### Install dependencies

```bash
  npm install
```

#### Inicie o servidor

```bash
  npm run start
```


## Environment Settings

To run the project locally change the file .env and set your PostgreSQL database settings.


DATABASE_URL=postgres://{`db_username`}:{`db_password`}@{`host`}:{`port`}/{`db_name`}
## Documentação da API

#### Base URL

```http
  https://encontre-um-musico-api.herokuapp.com
```


#### Return all users

```http
  GET /api/users
```


#### Return user by id

```http
  GET /api/users/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Required**. User ID |


#### Returns active users

```http
  GET /api/users/active/${logic}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `logic`      | `integer` | **Required**. 1 or 0 |


#### User Login

```http
  POST /api/users/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user_name`      | `string` | **Required**. username |
| `user_pass`      | `string` | **Required**. password |



#### Create user

```http
  POST /api/user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `user_full_name`      | `string` | **Required**. |
| `user_name`      | `string` | **Required**. |
| `user_email`      | `string` | **Required**. |
| `user_pass`      | `string` | **Required**. |
| `user_bio`      | `string` | **Required**. |
| `user_state`      | `string` | **Required**. |
| `user_city`      | `string` | **Required**. |
| `user_image`      | `string` | **Required**. |
| `user_twitter`      | `string` | **Required**. |
| `user_facebook`      | `string` | **Required**. |
| `user_instagram`      | `string` | **Required**. |
| `user_name`      | `string` | **Required**. |
