// ShoppingList.model.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from 'typeorm';
import { EstoqueIngrediente } from './Ingredientes.model';

@Entity('shopping_list')
export class ShoppingList extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column({ type: 'varchar', length: 255 })
  mercadoId: string | undefined;

  @Column({ type: 'date' })
  data_compra: Date | undefined;

  @OneToMany(() => EstoqueIngrediente, ingrediente => ingrediente.shoppingList)
  ingredientes: EstoqueIngrediente[] | undefined;
}