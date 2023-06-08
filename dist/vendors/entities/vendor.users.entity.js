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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorUsersEntity = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const paranoid_entity_1 = require("../../v1/common/entities/paranoid.entity");
const typeorm_1 = require("typeorm");
const vendor_entity_1 = require("./vendor.entity");
let VendorUsersEntity = class VendorUsersEntity extends paranoid_entity_1.ParanoidEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VendorUsersEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (userEntity) => userEntity.vendorAccess),
    __metadata("design:type", Array)
], VendorUsersEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.VendorEntity, (vendorEntity) => vendorEntity.users),
    __metadata("design:type", Array)
], VendorUsersEntity.prototype, "vendor", void 0);
VendorUsersEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'VendorUsers' })
], VendorUsersEntity);
exports.VendorUsersEntity = VendorUsersEntity;
//# sourceMappingURL=vendor.users.entity.js.map