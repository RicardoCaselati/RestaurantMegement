import { Request, Response } from 'express';
const recipesService = require('../service/Recipes.service');

// Controlador para criar uma nova empresa
export const recipesController = async (req: Request, res: Response) => {
    try {
    const recipeData = req.body;
    const newRecipe = await recipesService.recipesService(recipeData);

    // Retornar a resposta de sucesso com a empresa criada
    return res.status(201).json({
      message: 'Pessoa cadastrada com sucesso!',
      data: newRecipe
    });
    } catch (error) {
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

// Controlador para buscar todas as empresas
// const getAllEmpresasController = async (req, res) => {
//   try {
//     const empresas = await empresaService.getAllEmpresasService();
//     res.status(200).json(empresas);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

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
// const deleteEmpresaController = async (req, res) => {
//   try {
//     await empresaService.deleteEmpresaService(req.params.id);
//     res.status(200).json({ message: 'Empresa excluída com sucesso' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = {
  recipesController,
//   getAllEmpresasController,
//   getEmpresaByIdController,
//   updateEmpresaController,
//   deleteEmpresaController
};