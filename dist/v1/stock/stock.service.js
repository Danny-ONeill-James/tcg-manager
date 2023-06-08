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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const typeorm_2 = require("typeorm");
const cards_service_1 = require("../cards/cards.service");
const card_entity_1 = require("../cards/entities/card.entity");
const createStock_dto_1 = require("./dto/createStock.dto");
const stock_entity_1 = require("./entities/stock.entity");
let StockService = class StockService {
    constructor(stockRepository, vendorRepository, cardRepository, cardsService) {
        this.stockRepository = stockRepository;
        this.vendorRepository = vendorRepository;
        this.cardRepository = cardRepository;
        this.cardsService = cardsService;
    }
    findAll() {
        return this.stockRepository.find();
    }
    async findOne(cardId) {
        const returnedCard = await this.cardsService.findOne(cardId);
        console.log(returnedCard);
        return this.stockRepository.findOne({
            where: { card: returnedCard },
        });
    }
    async findStockFromCard(_userId, _cardSlug) {
        const returnedStockItems = await this.stockRepository.find({
            where: {
                card: { slug: _cardSlug },
                vendor: { user: { id: _userId } },
            },
        });
        return returnedStockItems;
    }
    getCardListForUserSearch(userId, term) {
        return null;
    }
    async create(createStockDto) {
        const newStock = this.stockRepository.create(Object.assign({}, createStockDto));
        return this.stockRepository.save(newStock);
    }
    async update(_id, _conditon, _quantity) {
        return this.stockRepository.save({ id: _id, quantity: _quantity });
    }
    async delete(_id) {
        return this.stockRepository.delete(_id);
    }
    async getCardListForUser(_userId) {
        const cardList = [];
        const returnedStockItems = await this.vendorRepository.findOne({
            where: { stock: { vendor: { user: { id: _userId } } } },
            relations: {
                stock: {
                    vendor: { user: true },
                    card: { set: { series: { game: true } } },
                },
            },
        });
        console.log('Found Vendor: ', returnedStockItems);
        for (const element of returnedStockItems.stock) {
            console.log('Checking item');
            const isCardAlreadyInList = cardList.some((card) => card.id === element.card.id);
            if (!isCardAlreadyInList) {
                cardList.push(element.card);
            }
        }
        return cardList;
    }
    async updateStockFromCard(_id, _cardSlug, _updateStock) {
        let stockItem = new createStock_dto_1.CreateStockDto();
        const returnedStockItems = await this.stockRepository.find({
            where: {
                card: { slug: _cardSlug },
                vendor: { user: { id: _id } },
            },
            relations: { card: true, vendor: { user: true } },
        });
        if (returnedStockItems.length > 0) {
            stockItem.vendor = returnedStockItems[0].vendor;
            stockItem.card = returnedStockItems[0].card;
        }
        else {
            stockItem.vendor = await this.vendorRepository.findOne({
                where: { user: { id: _id } },
            });
            stockItem.card = await this.cardRepository.findOne({
                where: { slug: _cardSlug },
            });
        }
        for (const element of _updateStock) {
            stockItem.quantity = element.quantity;
            stockItem.condition = element.condition;
            const found = returnedStockItems.find((item) => {
                return item.condition === stockItem.condition;
            });
            if (found) {
                if (element.quantity == 0) {
                    this.delete(found.id);
                }
                else {
                    this.update(found.id, found.condition, element.quantity);
                }
            }
            else {
                if (element.quantity != 0) {
                    this.create(stockItem);
                }
            }
        }
        return null;
    }
};
StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(stock_entity_1.StockEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(vendor_entity_1.VendorEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(card_entity_1.CardEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        cards_service_1.CardsService])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map