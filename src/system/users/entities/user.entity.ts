import { ParanoidEntity } from 'src/v1/common/entities/paranoid.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
