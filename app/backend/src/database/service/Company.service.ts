const Empresa = require('../model/Company.model');
import {EmpresaData} from '../Interface/Company.interface';



// Função para criar uma nova empresa
export const createCompanyService = async (empresaData: EmpresaData): Promise<{ success: boolean, message?: string }> => {
  try {
    console.log("oi, company service")
    const empresa = new Empresa(empresaData);
    await empresa.save();
    return { success: true };
  } catch (error) {
    console.error('Erro ao cadastrar empresa:', error);
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: 'Ocorreu um erro desconhecido ao cadastrar uma empresa. Func: createCompanyService' };
  }
};

// Função para buscar todas as empresas
export const getAllEmpresasService = async () => {
  const response = await Empresa.find({ excluido_em: null });
   return response
  };

// Função para buscar uma empresa por ID
// const getEmpresaByIdService = async (id) => {
//   return await Empresa.findById(id);
// };

// Função para atualizar uma empresa
// const updateEmpresaService = async (id, empresaData) => {
//   return await Empresa.findByIdAndUpdate(id, empresaData, { new: true });
// };

// Função para excluir (logicamente) uma empresa
const deleteEmpresaService = async (id: number) => {
  return await Empresa.findByIdAndUpdate(id, { excluido_em: new Date() });
};

// module.exports = {
//   getEmpresaByIdService,
//   updateEmpresaService,
// };

module.exports = {
  createCompanyService,
  getAllEmpresasService,
  deleteEmpresaService
};