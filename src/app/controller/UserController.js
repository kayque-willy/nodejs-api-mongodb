const UserSchema = require('../Model/User');

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
        UserSchema.create(user, (err) => {
            if (err)
                return res.status(400).json("Erro ao tentar inserir usuário no MongDB" + err);
            return res.status(200).json(user);
        });
    }

    // ------------------ Listar os usuários ------------------
    list(req, res) {
        UserSchema.find((err, users) => {
            if (err)
                return res.status(400).json("Erro ao buscar os usuários no MongDB" + err);
            return res.status(200).json(users);
        });
    }

    // ------------------ Recuperar um usuário por ID ------------------
    getById(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        // Procura o usuário por id no banco
        UserSchema.findById(user_id, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar os usuários no MongDB" + err);
            return res.status(200).json(user);
        });
    }

    // ------------------ Atualiza o usuário ------------------
    update(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        // Procura o usuário por id no banco
        UserSchema.findById(user_id, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar o usuário no MongDB" + err);
            //Recupera o objeto da requisição
            user.name = req.body.name;
            user.type = req.body.type;
            user.password = req.body.password;
            // Salva o usuário no banco
            user.save((err) => {
                if (err)
                    return res.status(400).json("Erro ao salvar o usuário no MongDB" + err);
                return res.status(200).json(user);
            });
        });

    }

    // ------------------ Remover um usuário ------------------
    delete(req, res) {
        //Recupera id enviado por parametro
        const user_id = req.params.id;
        // Procura o usuário por id no banco
        UserSchema.findById(user_id, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar o usuário no MongDB" + err);
            // Salva o usuário no banco
            user.remove((err) => {
                if (err)
                    return res.status(400).json("Erro ao remover o usuário no MongDB" + err);
                return res.status(200).json("Usuário excluido com sucesso!");
            });
        });
    }
}

module.exports = new UserController()