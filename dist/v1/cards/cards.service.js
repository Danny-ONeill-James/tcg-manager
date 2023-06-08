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
exports.CardsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const set_entity_1 = require("../sets/entities/set.entity");
const card_entity_1 = require("./entities/card.entity");
let CardsService = class CardsService {
    constructor(cardRepository, setRepository) {
        this.cardRepository = cardRepository;
        this.setRepository = setRepository;
    }
    async findAll() {
        return this.cardRepository.find({
            relations: {
                set: {
                    series: {
                        game: true,
                    },
                },
                stock: true,
            },
        });
    }
    async findOne(_id) {
        return this.cardRepository.findOne({
            where: { id: _id },
            relations: { set: { series: { game: true } }, stock: true },
        });
    }
    async findForActiveSearch(_searchTerm) {
        return this.cardRepository.find({
            where: { name: (0, typeorm_2.Like)(`%${_searchTerm}%`) },
            relations: { set: { series: { game: true } }, stock: true },
        });
    }
    findOneBySlug(_slug) {
        return this.cardRepository.findOne({
            where: { slug: _slug },
            relations: { set: { series: { game: true } }, stock: true },
        });
    }
    async findAllCardsInSet(_slug) {
        const cards = await this.cardRepository.find({
            where: {
                set: {
                    slug: _slug,
                },
            },
            relations: { set: { series: { game: true } }, stock: true },
        });
        return cards;
    }
    async create(createCardDto) {
        const newCard = this.cardRepository.create(Object.assign({}, createCardDto));
        return this.cardRepository.save(newCard);
    }
    async update(inputId, updateCardDto) {
        const updateCardWithEditDetails = Object.assign({}, updateCardDto);
        return this.cardRepository.update(inputId, updateCardWithEditDetails);
    }
    async remove(id) {
        return this.cardRepository.delete(id);
    }
};
CardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.CardEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(set_entity_1.SetEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CardsService);
exports.CardsService = CardsService;
//# sourceMappingURL=cards.service.js.map