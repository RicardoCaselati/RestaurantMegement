"use strict";
// Serviço de Refeição
class RefeicaoService {
    constructor(nome, panelaService, quantidadePorPorcao) {
        this.nome = nome;
        this.panelaService = panelaService;
        this.quantidadePorPorcao = quantidadePorPorcao;
    }
    vender(quantidade = 1) {
        if (this.panelaService.servir(this.quantidadePorPorcao * quantidade)) {
            return { status: "sucesso", mensagem: `${quantidade} ${this.nome}(s) vendida(s)` };
        }
        else {
            return { status: "erro", mensagem: "Quantidade insuficiente para vender" };
        }
    }
}
//# sourceMappingURL=Refeicao.service.js.map