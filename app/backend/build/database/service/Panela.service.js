"use strict";
// Serviço de Panela
class PanelaService {
    constructor(receita) {
        this.receita = receita;
        this.quantidadeDisponivel = 0;
    }
    preparar(quantidade) {
        // Lógica para abater ingredientes no estoque
        for (const [ingredienteNome, quantidadeNecessaria] of Object.entries(this.receita.ingredientes)) {
            const ingrediente = ingredientesEstoque.find(i => i.nome === ingredienteNome);
            if (!ingrediente || ingrediente.quantidade < quantidadeNecessaria * quantidade) {
                throw new Error("Ingrediente insuficiente.");
            }
            ingrediente.quantidade -= quantidadeNecessaria * quantidade;
            this.quantidadeDisponivel += quantidade;
        }
        return true;
    }
    servir(quantidade) {
        if (this.quantidadeDisponivel >= quantidade) {
            this.quantidadeDisponivel -= quantidade;
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=Panela.service.js.map