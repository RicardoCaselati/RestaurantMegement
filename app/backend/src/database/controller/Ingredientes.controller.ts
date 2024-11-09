import { Request, Response } from 'express';
import { createIngredienteService } from '../service/Ingredientes.service'

export const createIngredientesController = async (req: Request, res: Response) => {
    try {
    const shoppingListData = req.body;

    // Chamar o serviço para criar a empresa
    const newShoppintList = await createIngredienteService(shoppingListData);

    // Retornar a resposta de sucesso com a empresa criada
    return res.status(201).json({
      message: 'Empresa criada com sucesso!',
      data: newShoppintList
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


module.exports = {
    createIngredientesController,
    // getAllEmpresasController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    // deleteEmpresaController
  };