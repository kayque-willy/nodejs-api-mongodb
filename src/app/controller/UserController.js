const UserService = require("../service/UserService");

class UserController {

    // ------------------ Index ------------------
    index(req, res) {
        res.status(200).send('<h2>Exemplo de API Restful</h2> <span>Node.js, Express e MongoDB</span>');
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
        // Salva o usuário no banco
        return UserService.update(user_id, req, res);
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