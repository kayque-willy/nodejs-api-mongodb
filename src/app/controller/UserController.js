const UserService = require("../service/UserService");

class UserController {

    // ------------------ Index ------------------
    index(req, res) {
        res.status(200).send('<h2>Exemplo de API Restful</h2> <span>Node.js, Express e MongoDB</span>'+
        '<hr><table> <thead> <tr> <th>ROTA</th> <th>HTTP(Verbo)</th> <th>Request</th> <th>Return</th> <th>Description</th> </tr> </thead> <tbody> <tr> <td>/api/</td> <td>GET</td> <td>-</td> <td>HTML</td> <td>API index</td> </tr> <tr> <td>/api/user</td> <td>GET</td> <td>-</td> <td>JSON</td> <td>List users</td> </tr> <tr> <td>/api/user</td> <td>POST</td> <td>JSON</td> <td>JSON</td> <td>Create user</td> </tr> <tr> <td>/api/user/:id</td> <td>GET</td> <td>int(id)</td> <td>JSON</td> <td>Get user by id</td> </tr> <tr> <td>/api/user/:id</td> <td>PUT</td> <td>JSON, int(id)</td> <td>JSON</td> <td>Save user by id</td> </tr> <tr> <td>/api/user/:id</td> <td>DELETE</td> <td>int(id)</td> <td>boolean</td> <td>Delete user by id</td> </tr> </tbody> </table>'
        );
    }

    // ------------------ Salvar o usuário ------------------
    save(req, res) {
        //Recupera o usuario do objeto da requisição
        var user = JSON.parse(JSON.stringify(req.body));
        //Salva o usuario no banco
        return UserService.save(user, res);
    }

    // ------------------ Listar os usuários ------------------
    list(req, res) {
        // Lista todos os usuários do banco
        return UserService.list(res);
    }

    // ------------------ Recuperar um usuário por ID ------------------
    getById(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        // Salva o usuário no banco
        return UserService.getById(user_id, res);
    }

    // ------------------ Atualiza o usuário ------------------
    update(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        const user_update = req.body;
        // Salva o usuário no banco
        return UserService.update(user_id, user_update, res);
    }

    // ------------------ Remover um usuário ------------------
    delete(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        // Remove o usuário no banco
        return UserService.delete(user_id, res);
    }
}

module.exports = new UserController();