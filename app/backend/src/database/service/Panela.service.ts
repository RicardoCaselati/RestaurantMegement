// Serviço de Panela
class PanelaService {
    private quantidadeDisponivel: number = 0;
  
    constructor(public receita: Receita) {}
  
    preparar(quantidade: number): boolean {
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
  
    servir(quantidade: number): boolean {
      if (this.quantidadeDisponivel >= quantidade) {
        this.quantidadeDisponivel -= quantidade;
        return true;
      } else {
        return false;
      }
    }
  }