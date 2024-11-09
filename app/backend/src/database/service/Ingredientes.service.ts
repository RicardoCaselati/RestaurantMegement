import { AppDataSource } from '../../data-source';
import { EstoqueIngrediente } from "../model/Ingredientes.model";
import { ShoppingList } from "../model/ShoppingList.model";

interface ShoppingListItem {
    fabricanteId: string;
    nomeProduto: string;
    quantidade: string;
    valorUnidade: string;
    valorTotal: string;
    fabricante: string;
  }
  
  interface ShoppingListData {
    mercado: string;
    data_compra: string;
    items: ShoppingListItem[];
  }
  
  export const createIngredienteService = async (shoppingListData: ShoppingListData) => {
    try {
      // Obtendo o repositório
      const shoppingListRepository = AppDataSource.getRepository(ShoppingList);
      const ingredienteRepository = AppDataSource.getRepository(EstoqueIngrediente);

      const shoppingList = shoppingListRepository.create({
        mercadoId: shoppingListData.mercado,
        data_compra: new Date(shoppingListData.data_compra),
      });
      await shoppingListRepository.save(shoppingList);
  
      for (const item of shoppingListData.items) {
        const ingrediente = ingredienteRepository.create({
          shoppingList: shoppingList,
          fabricanteId: item.fabricanteId,
          nomeProduto: item.nomeProduto,
          quantidade: parseFloat(item.quantidade),
          valorUnidade: parseFloat(item.valorUnidade),
          valorTotal: parseFloat(item.valorTotal),
          unidade: 'unidade',
        });
  
        await ingredienteRepository.save(ingrediente);
      }
  
      return { success: true, message: 'Lista de compras e ingredientes criados com sucesso!' };
    } catch (error) {
      console.error('Erro ao cadastrar lista de compras e ingredientes:', error);
      if (error instanceof Error) {
        return { success: false, message: error.message };
      }
      return { success: false, message: 'Ocorreu um erro desconhecido ao cadastrar a lista de compras e ingredientes.' };
    }
  };


  module.exports = {
    createIngredienteService,
    // getAllEmpresasController,
    // getEmpresaByIdController,
    // updateEmpresaController,
    // deleteEmpresaController
  };

// Modelo de Ingrediente
// class Ingrediente {
//     constructor(public nome: string, public quantidade: number) {}
// }
//
//   // Criando receita e adicionando ingredientes
//   const receitaFeijao = new Receita("Feijão");
//   receitaFeijao.adicionarIngrediente(arroz, 2);
//   receitaFeijao.adicionarIngrediente(feijao, 3);
  
//   // Criando o serviço de panela
//   const panelaFeijao = new PanelaService(receitaFeijao);
  
//   // Preparando a panela
//   try {
//     panelaFeijao.preparar(2); // Prepara 2 porções
//     console.log("Panela preparada com sucesso!");
//   } catch (error) {
//     console.error(error.message);
//   }
  
//   // Criando o serviço de marmita
//   const marmitaService = new MarmitaService(panelaFeijao, "grande");
  
//   // Vendendo marmita
//   const resultadoVenda = marmitaService.vender(1); // Vende 1 marmita
//   console.log(resultadoVenda);
  