"use strict";
// Modelo de Receita
class Receita {
    constructor(nome) {
        this.nome = nome;
        this.ingredientes = {};
    }
    adicionarIngrediente(ingrediente, quantidade) {
        this.ingredientes[ingrediente.nome] = quantidade;
    }
}
//# sourceMappingURL=Receita.service.js.map