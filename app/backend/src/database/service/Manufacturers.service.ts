const Manufacturers = require('../model/Manufacturers.model');
import {ManufacturersData} from '../Interface/Manufacturers.interface';



// Função para criar uma nova empresa
export const createManufacturersService = async (empresaData: ManufacturersData): Promise<{ success: boolean, message?: string }> => {
  try {
    console.log("oi, company service")
    const empresa = new Manufacturers(empresaData);
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
export const getAllManufacturersService = async () => {
  const response = await Manufacturers.find({ excluido_em: null });
   return response
  };

// Função para buscar uma empresa por ID
// const getEmpresaByIdService = async (id) => {
//   return await Manufacturers.findById(id);
// };

// Função para atualizar uma empresa
// const updateEmpresaService = async (id, empresaData) => {
//   return await Manufacturers.findByIdAndUpdate(id, empresaData, { new: true });
// };

// Função para excluir (logicamente) uma empresa
const deleteManufacturersService = async (id: number) => {
  return await Manufacturers.findByIdAndUpdate(id, { excluido_em: new Date() });
};

// module.exports = {
//   getEmpresaByIdService,
//   updateEmpresaService,
// };

module.exports = {
    createManufacturersService,
    getAllManufacturersService,
    deleteManufacturersService
};