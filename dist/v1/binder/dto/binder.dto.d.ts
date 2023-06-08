import { VendorEntity } from 'src/vendors/entities/vendor.entity';
export declare class InputBinderDto {
    name: string;
}
export declare class CreateBinderDto {
    name: string;
    slug: string;
    image: string;
    vendor: VendorEntity;
}
