const Manufacturers = require('../model/Manufacturers.model');
import {ManufacturersData} from '../Interface/Manufacturers.interface';

export const createManufacturersService = async (manufacturerData: ManufacturersData): Promise<{ success: boolean, message?: string }> => {
  try {
    const manufacturer = new Manufacturers(manufacturerData);
    await manufacturer.save();
    return { success: true };
  } catch (error) {
    console.error('Erro ao cadastrar fabricante:', error);
    return { success: false, message: error instanceof Error ? error.message : 'Erro desconhecido' };
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
export const deleteManufacturersService = async (id: number) => {
  return await Manufacturers.findByIdAndUpdate(id, { excluido_em: new Date() });
};

// module.exports = {
//   getEmpresaByIdService,
//   updateEmpresaService,
// };

// module.exports = {
//     createManufacturersService,
//     getAllManufacturersService,
//     deleteManufacturersService
// };