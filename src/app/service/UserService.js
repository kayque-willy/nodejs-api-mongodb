const UserRepository = require('../repository/UserRepository');

class UserService{

     // ------------------ Salvar o usuário ------------------
     save(user, res) {
        //Salva o usuario no banco
        return UserRepository.save(user, res);
    }

    // ------------------ Listar os usuários ------------------
    list(res) {
        // Lista todos os usuários do banco
        return UserRepository.list(res);
    }

    // ------------------ Recuperar um usuário por ID ------------------
    getById(id, res) {
        // Salva o usuário no banco
        return UserRepository.getById(id, res);
    }

    // ------------------ Atualiza o usuário ------------------
    update(id, req, res) {
        // Salva o usuário no banco
        return UserRepository.update(id, req, res);
    }

    // ------------------ Remover um usuário ------------------
    delete(id, res) {
        // Remove o usuário no banco
        return UserRepository.delete(id, res);
    }
}

module.exports = new UserService();
