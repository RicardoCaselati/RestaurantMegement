import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { ShoppingList } from './ShoppingList.model';

@Entity('estoque_ingredientes')
export class EstoqueIngrediente extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  nomeProduto: string | undefined;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  quantidade: number | undefined;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorUnidade: number | undefined;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  valorTotal: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  unidade: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  fabricanteId: string | undefined;

//   @Column({ type: 'varchar', length: 255 })
//   fabricante: string | undefined;

  @ManyToOne(() => ShoppingList, shoppingList => shoppingList.ingredientes, { nullable: false })
  shoppingList: ShoppingList | undefined;


//   @Column({ type: 'varchar', length: 255 })
//   fabricante: string | undefined;

  // O construtor pode ser adicionado, mas não é necessário com TypeORM
//   constructor(id: number, nome: string, quantidade: number, unidade: string, dataCadastro: Date) {
//     super();  // Chama o construtor da classe BaseEntity
//     this.id = id;
//     this.nomeProduto = nome;
//     this.quantidade = quantidade;
//     this.unidade = unidade;
//     this.dataCadastro = dataCadastro;
//   }
}
