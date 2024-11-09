"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpresaController = exports.getAllEmpresasController = exports.createCompanyController = void 0;
const empresaService = require('../service/Company.service');
// Controlador para criar uma nova empresa
const createCompanyController = async (req, res) => {
    try {
        // return res.status(200).json({ message: "Rota de criação de empresa funcionando" });
        // Coletar os dados da empresa a partir do corpo da requisição
        const companyData = req.body;
        console.log("oi, company controller", companyData);
        // Chamar o serviço para criar a empresa
        const newCompany = await empresaService.createCompanyService(companyData);
        // Retornar a resposta de sucesso com a empresa criada
        return res.status(201).json({
            message: 'Empresa criada com sucesso!',
            data: newCompany
        });
    }
    catch (error) {
        return res.status(500).json({ message: 'Erro no servidor', error });
    }
    // const empresaData = req.body;
    // const {success, message} = await empresaService.createEmpresaService(empresaData);
    // if (success) {
    //   return res.status(201).json({ message: 'Empresa cadastrada com sucesso' });
    // } else {
    //   return res.status(500).json({ message: message || 'Falha ao cadastrar empresa' });
    // }
};
exports.createCompanyController = createCompanyController;
// Controlador para buscar todas as empresas
const getAllEmpresasController = async (req, res) => {
    try {
        const empresas = await empresaService.getAllEmpresasService();
        console.log("controller", empresas);
        res.status(200).json(empresas);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error });
    }
};
exports.getAllEmpresasController = getAllEmpresasController;
// Controlador para buscar uma empresa por ID
// const getEmpresaByIdController = async (req, res) => {
//   try {
//     const empresa = await empresaService.getEmpresaByIdService(req.params.id);
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
//     const empresaAtualizada = await empresaService.updateEmpresaService(req.params.id, req.body);
//     res.status(200).json(empresaAtualizada);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
// Controlador para excluir logicamente uma empresa
const deleteEmpresaController = async (req, res) => {
    try {
        await empresaService.deleteEmpresaService(req.body.id);
        res.status(200).json({ message: 'Empresa excluída com sucesso' });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};
exports.deleteEmpresaController = deleteEmpresaController;
module.exports = {
    createCompanyController: exports.createCompanyController,
    getAllEmpresasController: exports.getAllEmpresasController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    deleteEmpresaController: exports.deleteEmpresaController
};
//# sourceMappingURL=Company.controller.js.map