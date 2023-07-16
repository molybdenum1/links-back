import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  linkUrl: string;
}
