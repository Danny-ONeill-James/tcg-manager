import { CardEntity } from 'src/v1/cards/entities/card.entity';
import { ECondition } from 'src/v1/cards/enums/quality.enum';
import { VendorEntity } from 'src/vendors/entities/vendor.entity';
import { IVendor } from 'src/vendors/interfaces/vendor.interface';

export class CreateStockDto {
  card: CardEntity;
  vendor: VendorEntity;
  quantity: number;
  condition: ECondition;
  stockItem: IVendor[];
}
