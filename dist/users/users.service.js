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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const vendors_service_1 = require("../vendors/vendors.service");
let UsersService = class UsersService {
    constructor(userRepository, vendorService) {
        this.userRepository = userRepository;
        this.vendorService = vendorService;
    }
    async findOne(username) {
        return this.userRepository.findOne({ where: { username } });
    }
    async create(newUserDto) {
        const newUser = this.userRepository.create(Object.assign({}, newUserDto));
        const newUserInserted = await this.userRepository.save(newUser);
        const newPersonalVendor = {
            name: 'Personal Collection',
            slug: 'PersonalCollection',
            user: newUserInserted.id,
        };
        console.log('New Personal Vendor: ', newPersonalVendor);
        await this.vendorService.create(newPersonalVendor);
        console.log('New User: ', await newUserInserted);
        return newUserInserted;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        vendors_service_1.VendorsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map