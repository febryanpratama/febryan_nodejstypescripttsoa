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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistController = void 0;
const tsoa_1 = require("tsoa");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ChecklistController = class ChecklistController extends tsoa_1.Controller {
    getItem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield prisma.checklist.findMany();
                return {
                    status: true,
                    message: "Success",
                    data: data
                };
                // this.setStatus(201); // Set HTTP status code
            }
            catch (error) {
                // this.setStatus(404); // Set HTTP status code
                return { message: error.message };
            }
        });
    }
    setItem(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = requestBody;
                let data = yield prisma.checklist.create({
                    data: {
                        title
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: null
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    getDetail(checklistId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield prisma.checklist.findUnique({
                    where: {
                        id: checklistId
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: data
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    getItemDetail(checklistId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield prisma.item.findMany({
                    where: {
                        checklistId: checklistId
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: data
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    setItemDetail(checklistId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description } = requestBody;
                let createItem = yield prisma.item.create({
                    data: {
                        title,
                        description,
                        checklistId
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: null
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    getItemDetailById(checklistId, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield prisma.item.findUnique({
                    where: {
                        checklistId: checklistId,
                        id: itemId
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: data
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    updateItemDetailById(checklistId, itemId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { description } = requestBody;
                let data = yield prisma.item.update({
                    where: {
                        checklistId: checklistId,
                        id: itemId
                    },
                    data: {
                        // title,
                        description
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: null
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    deleteItemDetailById(checklistId, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield prisma.item.delete({
                    where: {
                        checklistId: checklistId,
                        id: itemId
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: null
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
    renameItemDetailById(checklistId, itemId, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, description } = requestBody;
                let data = yield prisma.item.update({
                    where: {
                        checklistId: checklistId,
                        id: itemId
                    },
                    data: {
                        title,
                        description
                    }
                });
                return {
                    status: true,
                    message: "Success",
                    data: null
                };
            }
            catch (error) {
                return {
                    status: false,
                    message: error.message
                };
            }
        });
    }
};
exports.ChecklistController = ChecklistController;
__decorate([
    (0, tsoa_1.Get)('/'),
    (0, tsoa_1.Security)("bearerAuth"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "getItem", null);
__decorate([
    (0, tsoa_1.Post)('/'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "setItem", null);
__decorate([
    (0, tsoa_1.Get)('{checklistId}'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "getDetail", null);
__decorate([
    (0, tsoa_1.Get)('{checklistId}/item'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "getItemDetail", null);
__decorate([
    (0, tsoa_1.Post)('{checklistId}/item'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "setItemDetail", null);
__decorate([
    (0, tsoa_1.Get)('{checklistId}/item/{itemId}'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "getItemDetailById", null);
__decorate([
    (0, tsoa_1.Put)('{checklistId}/item/{itemId}'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "updateItemDetailById", null);
__decorate([
    (0, tsoa_1.Delete)('{checklistId}/item/{itemId}'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "deleteItemDetailById", null);
__decorate([
    (0, tsoa_1.Put)('{checklistId}/item/rename/{itemId}'),
    (0, tsoa_1.Security)("bearerAuth"),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, tsoa_1.Query)()),
    __param(2, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ChecklistController.prototype, "renameItemDetailById", null);
exports.ChecklistController = ChecklistController = __decorate([
    (0, tsoa_1.Route)('/checklist')
], ChecklistController);
