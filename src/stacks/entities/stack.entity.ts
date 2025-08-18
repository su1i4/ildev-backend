import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class StackEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  name: string;

  @Column()
  image: string;
}
