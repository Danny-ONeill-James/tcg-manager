import { ECondition } from 'src/v1/cards/enums/quality.enum';
export declare class InputStockDto {
    cardId: string;
    vendorId: string;
    quantity: number;
    condition: ECondition;
}
