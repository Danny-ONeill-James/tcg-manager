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
exports.UserEntity = void 0;
const paranoid_entity_1 = require("../../v1/common/entities/paranoid.entity");
const vendor_entity_1 = require("../../vendors/entities/vendor.entity");
const vendor_users_entity_1 = require("../../vendors/entities/vendor.users.entity");
const typeorm_1 = require("typeorm");
const accountTypes_enum_1 = require("../enums/accountTypes.enum");
let UserEntity = class UserEntity extends paranoid_entity_1.ParanoidEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_entity_1.VendorEntity, (vendorEntity) => vendorEntity.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "vendorOwner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_users_entity_1.VendorUsersEntity, (vendorUserEntity) => vendorUserEntity.user),
    __metadata("design:type", vendor_users_entity_1.VendorUsersEntity)
], UserEntity.prototype, "vendorAccess", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'User' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map