import { UserEntity } from 'src/users/entities/user.entity';

export class CreateVendorDto {
  name: string;
  user: string;
  image?: string;
}
