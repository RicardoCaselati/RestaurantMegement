"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Company_controller_1 = require("../controller/Company.controller");
const router = (0, express_1.Router)();
router.post('/create', Company_controller_1.createCompanyController);
router.get('/list', Company_controller_1.getAllEmpresasController);
// router.post('/edit', getAllEmpresasController);
router.post('/delete', Company_controller_1.deleteEmpresaController);
exports.default = router;
//# sourceMappingURL=ShoppingList.router.js.map