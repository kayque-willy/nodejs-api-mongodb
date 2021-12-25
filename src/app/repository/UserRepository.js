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
    update(id, update, res) {
        UserSchema.findByIdAndUpdate(id, update, { new: true }, (err, user) => {
            if (err)
                return res.status(400).json("Erro ao buscar o usuário no MongDB" + err);
            return res.status(200).json(user);
        });
    }

    // ------------------ Remover um usuário ------------------
    delete(id, res) {
        // Procura o usuário por id no banco
        UserSchema.findOneAndRemove(id, (err) => {
            if (err)
                return res.status(400).json("Erro ao remover os usuários no MongDB" + err);
            return res.status(200).json("Usuário excluido com sucesso!");
        });
    }
}

module.exports = new UserRepository();