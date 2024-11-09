  // Serviço de Prato Feito
  class PratoFeitoService extends RefeicaoService {
    constructor(panelaService: PanelaService) {
      super("Prato Feito", panelaService, 0.6);
    }
  }