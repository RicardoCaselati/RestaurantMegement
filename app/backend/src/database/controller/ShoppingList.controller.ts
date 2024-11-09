import { log } from 'console';
import { Request, Response } from 'express';
import { getAllShoppingListsService } from '../service/ShoppingList.service';

// Controlador para buscar todas as empresas
export const getAllShoppingListController = async (req: Request, res: Response) => {   
    try {
      const shoppingList = await getAllShoppingListsService();
      console.log("controller", shoppingList)
      res.status(200).json(shoppingList);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor', error });
    }
  };

  module.exports = {
    getAllShoppingListController,
    // getAllEmpresasController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    // deleteEmpresaController
  };
