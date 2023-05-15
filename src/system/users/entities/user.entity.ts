import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { SaleEntity } from 'src/v1/sales/entities/sale.entity';
import { StockEntity } from 'src/v1/stock/entities/stock.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity extends ParanoidEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  image: string;

  @OneToMany(() => SaleEntity, (saleEntity) => saleEntity.user)
  sale: SaleEntity[];

  @OneToMany(() => StockEntity, (stockEntity) => stockEntity.user)
  stock: SaleEntity[];
}
