"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../controller/User.controller");
const router = (0, express_1.Router)();
router.post('/create', User_controller_1.createUserController);
// router.get('/list', createUserController);
// router.post('/edit', createUserController);
// router.post('/delete', createUserController);
exports.default = router;
//# sourceMappingURL=User.router.js.map