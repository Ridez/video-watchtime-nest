import { PrimaryEntity } from 'src/shared/entities/primary.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('youtube')
export class Watchtime extends PrimaryEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  watchtime!: number;

  @Column()
  videoId!: string;
}
