"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const vendor_entity_1 = require("./entities/vendor.entity");
let VendorsService = class VendorsService {
    constructor(vendorRepository, userRepository) {
        this.vendorRepository = vendorRepository;
        this.userRepository = userRepository;
    }
    async create(createVendorDto) {
        createVendorDto.slug = createVendorDto.name.replace(/[^0-9a-z]/gi, '');
        const user = await this.userRepository.findOne({
            where: { id: createVendorDto.user },
        });
        const newVendor = this.vendorRepository.create(Object.assign(Object.assign({}, createVendorDto), { user }));
        return this.vendorRepository.save(newVendor);
    }
    async findOne(id) {
        return this.vendorRepository.findOne({ where: { id } });
    }
    async findOneFromOwner(_userId, vendorSlug) {
        const user = await this.userRepository.findOne({
            where: { id: _userId },
            relations: { vendorOwner: { stock: true } },
        });
        const returnedVendor = user.vendorOwner.find((vendor) => vendor.slug === vendorSlug);
        const vendor = await this.vendorRepository.findOne({
            where: { user: { id: _userId } },
        });
        console.log('Found Vendor: ', vendor);
        return returnedVendor;
    }
    async getWhereOwner(_id) {
        console.log('Id in Service: ', _id);
        const user = await this.userRepository.findOne({
            where: { id: _id },
            relations: { vendorOwner: true },
        });
        return (await user.vendorOwner);
    }
};
VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vendor_entity_1.VendorEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], VendorsService);
exports.VendorsService = VendorsService;
//# sourceMappingURL=vendors.service.js.map