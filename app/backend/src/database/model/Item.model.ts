import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ShoppingList } from './ShoppingList.model'; // Relacionamento com ShoppingList

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  nomeProduto: string | undefined;

  @Column()
  quantidade: string | undefined;

  @Column()
  fabricanteId: string | undefined; // ID do fabricante (referência MongoDB)

  @ManyToOne(() => ShoppingList, shoppingList => shoppingList.items)
  shoppingList: ShoppingList | undefined;
}
