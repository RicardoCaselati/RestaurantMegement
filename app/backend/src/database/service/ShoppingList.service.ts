import { AppDataSource } from "../../data-source";
import { ShoppingList } from "../model/ShoppingList.model"; // Ajuste conforme o nome da sua model
const Company = require('../model/Company.model'); // Modelo do MongoDB para a Empresa
const Manufacturers = require('../model/Manufacturers.model');

export const getAllShoppingListsService = async () => { 
    try {
      const shoppingLists = await AppDataSource.getRepository(ShoppingList).find();
      const enrichedShoppingLists = await Promise.all(shoppingLists.map(async (list) => {
        const mercadoId = list.mercadoId; // ID do mercado
        const mercadoData = await Company.findById(mercadoId);

        const mercadoNomeFantasia = mercadoData ? mercadoData.nome_fantasia : 'Mercado não encontrado';

        return {
            nomeMercado: mercadoNomeFantasia,
            dataCompra: list.data_compra
        };
    }));

    return enrichedShoppingLists
    } catch (error) {
      console.error('Erro ao buscar listas de compras', error);
      throw new Error('Erro ao buscar listas de compras');
    }
};

module.exports = {
    getAllShoppingListsService,
    // getAllEmpresasController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    // deleteEmpresaController
  };
