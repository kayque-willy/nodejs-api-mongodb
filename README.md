# Exemplo de API RESTFUL - SQL

Exemplo de API RESTFUL com uso do Node.js, Express.js e MongoDB.

## Development server

Navigate to `http://localhost:8080/api`. The app will automatically reload if you change any of the source files.

## API REQUESTS: 

ROTA                    |     HTTP(Verbo)   |    Request    |    Return   |    Description
------------------------| ----------------- | ------------- | ----------- | ----------------- |
/api/                   |       GET         |      -        |     HTML    | API index         |
/api/user               |       GET         |      -        |     JSON    | List users        |
/api/user               |       POST        |     JSON      |     JSON    | Create user       |
/api/user/:id           |       GET         |    int(id)    |     JSON    | Get user by id    |
/api/user/:id           |       PUT         | JSON, int(id) |     JSON    | Save user by id   |
/api/user/:id           |       DELETE      |   int(id)     |    boolean  | Delete user by id |
