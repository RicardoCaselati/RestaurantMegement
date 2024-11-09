"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEmpresasService = exports.createCompanyService = void 0;
const Empresa = require('../model/Company.model');
// Função para criar uma nova empresa
const createCompanyService = async (empresaData) => {
    try {
        const empresa = new Empresa(empresaData);
        await empresa.save();
        return { success: true };
    }
    catch (error) {
        console.error('Erro ao cadastrar empresa:', error);
        if (error instanceof Error) {
            return { success: false, message: error.message };
        }
        return { success: false, message: 'Ocorreu um erro desconhecido ao cadastrar uma empresa. Func: createCompanyService' };
    }
};
exports.createCompanyService = createCompanyService;
// Função para buscar todas as empresas
const getAllEmpresasService = async () => {
    const response = await Empresa.find({ excluido_em: null });
    return response;
};
exports.getAllEmpresasService = getAllEmpresasService;
// Função para buscar uma empresa por ID
// const getEmpresaByIdService = async (id) => {
//   return await Empresa.findById(id);
// };
// Função para atualizar uma empresa
// const updateEmpresaService = async (id, empresaData) => {
//   return await Empresa.findByIdAndUpdate(id, empresaData, { new: true });
// };
// Função para excluir (logicamente) uma empresa
const deleteEmpresaService = async (id) => {
    return await Empresa.findByIdAndUpdate(id, { excluido_em: new Date() });
};
// module.exports = {
//   getEmpresaByIdService,
//   updateEmpresaService,
// };
module.exports = {
    createCompanyService: exports.createCompanyService,
    getAllEmpresasService: exports.getAllEmpresasService,
    deleteEmpresaService
};
//# sourceMappingURL=Company.service.js.map