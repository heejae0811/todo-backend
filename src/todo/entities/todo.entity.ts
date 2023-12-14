import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('todo_table')
export class TodoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column()
  created_at: Date;
}
