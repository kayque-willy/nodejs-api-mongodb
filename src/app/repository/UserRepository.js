const UserSchema = require('../Model/User');

class UserRepository {

    // ------------------ Salvar o usuário ------------------
    save(user, res) {
        //Salva o usuario no banco
        UserSchema.create(user, (err) => {
            if (err)
                return res.status(400).json("Erro ao tentar inserir usuário no MongDB" + err);
            return res.status(200).json(user);
        });
    }

    // ------------------ Listar os usuários ------------------
    list(res) {
        // Lista todos os usuários do banco
        UserSchema.find((err, users) => {
            if (err)
                return res.status(400).json("Erro ao buscar os usuários no MongDB" + err);
            return res.status(200).json(users);
        });
    }

    // ------------------ Recuperar um usuário por ID ------------------
    getById(id, res) {
        // Procura o usuário por id no banco
        UserSchema.findById(id, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar os usuários no MongDB" + err);
            return res.status(200).json(user);
        });
    }

    // ------------------ Atualiza o usuário ------------------
    update(id, req, res) {
        // Procura o usuário por id no banco
        UserSchema.findById(id, (err, user) => {
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
    delete(id, res) {
        // Procura o usuário por id no banco
        UserSchema.findById(id, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar o usuário no MongDB" + err);
            // Remove o usuário do banco
            user.remove((err) => {
                if (err)
                    return res.status(400).json("Erro ao remover o usuário no MongDB" + err);
                return res.status(200).json("Usuário excluido com sucesso!");
            });
        });
    }
}

module.exports = new UserRepository();