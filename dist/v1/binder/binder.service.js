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
exports.BinderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const typeorm_2 = require("typeorm");
const binder_entity_1 = require("./entities/binder.entity");
const stockInBinder_entity_1 = require("./entities/stockInBinder.entity");
let BinderService = class BinderService {
    constructor(binderRepository, stockInBinderRepository, vendorRepository) {
        this.binderRepository = binderRepository;
        this.stockInBinderRepository = stockInBinderRepository;
        this.vendorRepository = vendorRepository;
    }
    async getSingleBinder(userId, binderSlug) {
        return await this.binderRepository.findOne({
            where: { slug: binderSlug, vendor: { user: { id: userId } } },
            relations: { stockInBinder: true },
        });
    }
    async getAllBindersForUser(userId) {
        return await this.binderRepository.find({
            where: { vendor: { user: { id: userId } } },
        });
    }
    async createBinder(userId) {
        const vendor = await this.vendorRepository.findOne({
            where: { user: { id: userId } },
            relations: { user: true, binder: true },
        });
        const name = vendor.user.username + ' Binder';
        const image = 'https://res.cloudinary.com/deftmtx9e/image/upload/v1676549773/More%20From%20Games/placeholder_urxkej.png';
        const slug = vendor.user.username + (vendor.binder.length + 1);
        const newBinder = this.binderRepository.create({
            name,
            image,
            vendor,
            slug,
        });
        console.log('newBinder: ', newBinder);
        this.binderRepository.save(newBinder);
        return newBinder;
    }
    async updateStockInBinder(userId, binderSlug, cardSlug, quantity) {
        const binderStockCheck = await this.stockInBinderRepository.find({
            where: {
                stock: { card: { slug: cardSlug } },
                binder: { vendor: { user: { id: userId } } },
            },
        });
        console.log('Binder Check: ', binderStockCheck);
        if (binderStockCheck.length == 0) {
            console.log('Did not find stock');
            const binder = await this.binderRepository.findOne({
                where: { vendor: { user: { id: userId } }, slug: binderSlug },
            });
            const newBinderStock = this.stockInBinderRepository.create({
                binder,
            });
            console.log('New Binder Stock: ', newBinderStock);
        }
        return null;
    }
};
BinderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(binder_entity_1.BinderEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(stockInBinder_entity_1.StockInBinderEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(vendor_entity_1.VendorEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BinderService);
exports.BinderService = BinderService;
//# sourceMappingURL=binder.service.js.map