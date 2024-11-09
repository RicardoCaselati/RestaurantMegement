"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Manufacturers_controller_1 = require("../controller/Manufacturers.controller");
const router = (0, express_1.Router)();
router.post('/create', Manufacturers_controller_1.createManufacturersController);
router.get('/list', Manufacturers_controller_1.getAllManufacturersController);
// router.post('/edit', getAllEmpresasController);
router.post('/delete', Manufacturers_controller_1.deleteManufacturersController);
exports.default = router;
//# sourceMappingURL=Manufacturers.router.js.map