"use strict";
// Serviço de Marmita
class MarmitaService extends RefeicaoService {
    constructor(panelaService, tamanho = "grande") {
        const quantidadePorPorcao = tamanho === "grande" ? 0.5 : 0.3;
        super(`Marmita ${tamanho}`, panelaService, quantidadePorPorcao);
    }
}
//# sourceMappingURL=Marmita.service.js.map