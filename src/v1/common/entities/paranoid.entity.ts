import { Column, DeleteDateColumn } from 'typeorm';
import { FoundationEntity } from './foundation.entity';

export class ParanoidEntity extends FoundationEntity {
  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @Column({ type: 'uuid', nullable: true })
  deletedBy?: string;
}
