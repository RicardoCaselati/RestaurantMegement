"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const Login_service_1 = require("../service/Login.service");
const loginController = async (req, res) => {
    try {
        const peopleData = req.body;
        const newPeople = await (0, Login_service_1.LoginService)(peopleData);
        console.log("🚀 ~ loginController ~ newPeople:", newPeople);
        return res.status(201).json({
            message: 'Login realizado com sucesso!',
            data: newPeople
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error });
    }
};
exports.loginController = loginController;
//# sourceMappingURL=Login.controller.js.map