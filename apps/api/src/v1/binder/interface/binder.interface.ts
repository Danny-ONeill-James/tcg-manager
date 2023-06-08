import { UserEntity } from 'src/users/entities/user.entity';

export interface IBinder {
  id: string;
  name: string;
  user: UserEntity;
}
