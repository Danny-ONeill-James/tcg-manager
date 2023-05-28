import { UserEntity } from 'src/users/entities/user.entity';
import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Stock' })
export class StockEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CardEntity, (cardEntity) => cardEntity.stock)
  card: CardEntity;

  @ManyToOne(() => VendorEntity, (vendorEntity) => vendorEntity.stock)
  vendor: UserEntity;

  @Column()
  quantity: number;

  @Column()
  condition: ECondition;
}
