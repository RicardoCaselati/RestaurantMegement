"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteManufacturersService = exports.getAllManufacturersService = exports.createManufacturersService = void 0;
const Manufacturers = require('../model/Manufacturers.model');
const createManufacturersService = async (manufacturerData) => {
    try {
        const manufacturer = new Manufacturers(manufacturerData);
        await manufacturer.save();
        return { success: true };
    }
    catch (error) {
        console.error('Erro ao cadastrar fabricante:', error);
        return { success: false, message: error instanceof Error ? error.message : 'Erro desconhecido' };
    }
};
exports.createManufacturersService = createManufacturersService;
// Função para buscar todas as empresas
const getAllManufacturersService = async () => {
    const response = await Manufacturers.find({ excluido_em: null });
    return response;
};
exports.getAllManufacturersService = getAllManufacturersService;
// Função para buscar uma empresa por ID
// const getEmpresaByIdService = async (id) => {
//   return await Manufacturers.findById(id);
// };
// Função para atualizar uma empresa
// const updateEmpresaService = async (id, empresaData) => {
//   return await Manufacturers.findByIdAndUpdate(id, empresaData, { new: true });
// };
// Função para excluir (logicamente) uma empresa
const deleteManufacturersService = async (id) => {
    return await Manufacturers.findByIdAndUpdate(id, { excluido_em: new Date() });
};
exports.deleteManufacturersService = deleteManufacturersService;
// module.exports = {
//   getEmpresaByIdService,
//   updateEmpresaService,
// };
// module.exports = {
//     createManufacturersService,
//     getAllManufacturersService,
//     deleteManufacturersService
// };
//# sourceMappingURL=Manufacturers.service.js.map