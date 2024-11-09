"use strict";
// Modelo de Ingrediente
class Ingrediente {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
}
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
//# sourceMappingURL=Ingredientes.service.js.map