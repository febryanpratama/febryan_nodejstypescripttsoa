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
exports.ItemController = void 0;
const tsoa_1 = require("tsoa");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let ItemController = class ItemController extends tsoa_1.Controller {
    getItem() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return { message: "Sucessfully Get Item" }; // Return response
                // this.setStatus(201); // Set HTTP status code
            }
            catch (error) {
                // this.setStatus(404); // Set HTTP status code
                return { message: error.message };
            }
        });
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, tsoa_1.Get)('/get-item'),
    (0, tsoa_1.Security)("bearerAuth"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemController.prototype, "getItem", null);
exports.ItemController = ItemController = __decorate([
    (0, tsoa_1.Route)('/item')
], ItemController);
