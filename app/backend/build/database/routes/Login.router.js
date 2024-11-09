"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_controller_1 = require("../controller/Login.controller");
const router = (0, express_1.Router)();
router.post('/', Login_controller_1.loginController);
exports.default = router;
//# sourceMappingURL=Login.router.js.map