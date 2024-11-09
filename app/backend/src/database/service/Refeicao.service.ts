  // Serviço de Refeição
  class RefeicaoService {
    constructor(
      public nome: string,
      public panelaService: PanelaService,
      public quantidadePorPorcao: number
    ) {}
  
    vender(quantidade: number = 1): { status: string; mensagem: string } {
      if (this.panelaService.servir(this.quantidadePorPorcao * quantidade)) {
        return { status: "sucesso", mensagem: `${quantidade} ${this.nome}(s) vendida(s)` };
      } else {
        return { status: "erro", mensagem: "Quantidade insuficiente para vender" };
      }
    }
  }