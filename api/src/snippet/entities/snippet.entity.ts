import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Snippet extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  created_at: string;

  @Column()
  content: string;

  @Column()
  language: string;

  @Column({ nullable: true })
  notes?: string;
}
