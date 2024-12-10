import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';

@Entity('recipes')
export default class Recipes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column({ type: 'varchar', length: 255 })
  nomeReceita: string | undefined;

  @Column({ type: 'text', length: 255 })
  receita: string | undefined;
}
