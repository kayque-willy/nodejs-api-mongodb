const { Router} = require("express");
const LoginController = require("./app/controller/LoginController");
const UserController = require("./app/controller/UserController");
const AuthMiddleware = require("./app/middleware/AuthMiddleware");

const routes = new Router();

routes.get("/", UserController.index);
routes.post("/login", LoginController.login);

// ------------------- Rotas - Users -------------------
routes.get("/user", UserController.list);
routes.post("/user", UserController.save);
routes.put("/user/:id", UserController.update);
routes.get("/user/:id", UserController.getById);
routes.delete("/user/:id", UserController.delete);

//Para deixar as rotas privadas com autenticação é necessario adicioinar o AuthMiddleware como parametro
// routes.get("/user", AuthMiddleware, UserController.list); 

module.exports = routes;