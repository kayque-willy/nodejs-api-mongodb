const config = require('../config/auth');
const jwt = require('jsonwebtoken');
const UserModel = require('../Model/User');

class LoginController {

    async login(req, res) {
        // Busca o usuário
        const { name, password } = req.body;
        const user = await UserModel.findOne({ name });
        if (!user) {
            return res.status(400).json({
                message: "Usuário não existe!"
            });
        }

        // Verifica a senha
        if (password !== user.password) {
            return res.status(400).json({
                error: true,
                message: "A senha está inválida!"
            });
        }

        // Gera o token
        return res.status(200).json({
            user: { name: user.name },
            token:
                jwt.sign(
                    { id: user._id },
                    config.secret,
                    { expiresIn: config.expireIn }
                )
        });
    }
}

module.exports = new LoginController();