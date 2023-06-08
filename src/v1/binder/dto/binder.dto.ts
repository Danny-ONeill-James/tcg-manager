import { VendorEntity } from 'src/vendors/entities/vendor.entity';

export class InputBinderDto {
  name: string;
}

export class CreateBinderDto {
  name: string;
  slug: string;
  image: string;
  vendor: VendorEntity;
}
