"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManufacturersController = exports.getAllManufacturersController = exports.createManufacturersController = void 0;
const Manufacturers_service_1 = require("../service/Manufacturers.service");
// Controlador para criar uma nova empresa
const createManufacturersController = async (req, res) => {
    try {
        const manufacturerData = req.body;
        const newManufacturer = await (0, Manufacturers_service_1.createManufacturersService)(manufacturerData);
        return res.status(201).json({
            message: 'Fabricante criado com sucesso!',
            data: newManufacturer,
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error });
    }
};
exports.createManufacturersController = createManufacturersController;
// Controlador para buscar todas as empresas
const getAllManufacturersController = async (req, res) => {
    try {
        const empresas = await (0, Manufacturers_service_1.getAllManufacturersService)();
        console.log("controller", empresas);
        res.status(200).json(empresas);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
};
exports.getAllManufacturersController = getAllManufacturersController;
// Controlador para buscar uma empresa por ID
// const getEmpresaByIdController = async (req, res) => {
//   try {
//     const empresa = await manufacturersService.getEmpresaByIdService(req.params.id);
//     if (!empresa) {
//       return res.status(404).json({ message: 'Empresa não encontrada' });
//     }
//     res.status(200).json(empresa);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// Controlador para atualizar uma empresa
// const updateEmpresaController = async (req, res) => {
//   try {
//     const empresaAtualizada = await manufacturersService.updatemanufacturersService(req.params.id, req.body);
//     res.status(200).json(empresaAtualizada);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// Controlador para excluir logicamente uma empresa
const deleteManufacturersController = async (req, res) => {
    try {
        await (0, Manufacturers_service_1.deleteManufacturersService)(req.body.id);
        res.status(200).json({ message: 'Empresa excluída com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};
exports.deleteManufacturersController = deleteManufacturersController;
module.exports = {
    createManufacturersController: exports.createManufacturersController,
    getAllManufacturersController: exports.getAllManufacturersController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    deleteManufacturersController: exports.deleteManufacturersController
};
//# sourceMappingURL=Manufacturers.controller.js.map