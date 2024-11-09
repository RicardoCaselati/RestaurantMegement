  // Modelo de Receita
  class Receita {
    public ingredientes: { [key: string]: number } = {};
  
    constructor(public nome: string) {}
  
    adicionarIngrediente(ingrediente: Ingrediente, quantidade: number) {
      this.ingredientes[ingrediente.nome] = quantidade;
    }
  }