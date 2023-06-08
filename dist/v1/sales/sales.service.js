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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const sale_entity_1 = require("./entities/sale.entity");
const saleItem_entity_1 = require("./entities/saleItem.entity");
let SalesService = class SalesService {
    constructor(saleRepository, saleItemRepository) {
        this.saleRepository = saleRepository;
        this.saleItemRepository = saleItemRepository;
    }
    findAll() {
        return this.saleRepository.find({
            relations: { saleItem: { card: true }, transaction: true },
        });
    }
    findOne(_id) {
        return this.saleRepository.findOne({
            where: { id: _id },
            relations: { transaction: true, saleItem: { card: true } },
        });
    }
    async editOneSale(id, updatedSaleData) {
        try {
            const sale = await this.saleRepository.findOne({
                where: { id },
                relations: { transaction: true, saleItem: { card: true } },
            });
            if (!sale) {
                throw new Error('Sale not found.');
            }
            Object.assign(sale, updatedSaleData);
            const updatedSale = await this.saleRepository.save(sale);
            return updatedSale;
        }
        catch (error) {
            throw error;
        }
    }
    deleteSale(id) {
        const returnDeleted = this.saleRepository.findOne({ where: { id } });
        this.saleRepository.delete(id);
        return returnDeleted;
    }
    async createSale(createSaleDto) {
        if (createSaleDto.user == null) {
        }
        const newSale = this.saleRepository.create(Object.assign({}, createSaleDto));
        return this.saleRepository.save(newSale);
    }
    async createSaleItem(createSaleItemDto) {
        const newSaleItem = this.saleItemRepository.create(Object.assign({}, createSaleItemDto));
        return this.saleItemRepository.save(newSaleItem);
    }
};
SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sale_entity_1.SaleEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(saleItem_entity_1.SaleItemEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SalesService);
exports.SalesService = SalesService;
//# sourceMappingURL=sales.service.js.map