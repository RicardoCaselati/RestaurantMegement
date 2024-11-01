import { log } from 'console';
import { Request, Response } from 'express';
import { createManufacturersService, getAllManufacturersService, deleteManufacturersService } from '../service/Manufacturers.service';

// Controlador para criar uma nova empresa
export const createManufacturersController = async (req: Request, res: Response) => {
  try {
    const manufacturerData = req.body;
    const newManufacturer = await createManufacturersService(manufacturerData);
    return res.status(201).json({
      message: 'Fabricante criado com sucesso!',
      data: newManufacturer,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no servidor', error });
  }
};

// Controlador para buscar todas as empresas
export const getAllManufacturersController = async (req: Request, res: Response) => {
  try {
    const empresas = await getAllManufacturersService();
    console.log("controller", empresas)
    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};

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
export const deleteManufacturersController = async (req: Request, res: Response) => {
  try {
    await deleteManufacturersService(req.body.id);
    res.status(200).json({ message: 'Empresa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error});
  }
};

module.exports = {
  createManufacturersController,
  getAllManufacturersController,
  // getEmpresaByIdController,
  // updateEmpresaController,
  deleteManufacturersController
};