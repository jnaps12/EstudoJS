import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, Entity } from 'typeorm';
import { Category } from './Category';

@Entity("videos")
export class Video {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category_id: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "category_id" })
  category: Category;

  @Column()
  duration: number;

  @CreateDateColumn()
  created_at: Date;
}



