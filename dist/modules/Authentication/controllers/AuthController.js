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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const tsoa_1 = require("tsoa");
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
let AuthController = class AuthController extends tsoa_1.Controller {
    signin(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { email, password } = requestBody; // Access request body directly    
                // return { data: email, password}
                // Check if user already exists
                const existingUser = yield prisma.user.findUnique({
                    where: {
                        email: email
                    }
                });
                if (!existingUser) {
                    this.setStatus(404); // Set HTTP status code
                    return { message: "User does not exist" };
                }
                let isPasswordValid = yield bcryptjs_1.default.compare(password, existingUser.password);
                if (!isPasswordValid) {
                    this.setStatus(404); // Set HTTP status code
                    return { message: "Invalid Password" };
                }
                const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser.id }, (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : 'Secretkey');
                return { status: true, message: "Success Login", data: token }; // Return response
            }
            catch (error) {
                this.setStatus(404); // Set HTTP status code
                return { message: "User does not exist" };
            }
        });
    }
    signup(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const saltRounds = 10;
                const salt = yield bcryptjs_1.default.genSalt(saltRounds);
                const { email, password } = requestBody; // Access request body directly
                // Check if user already exists
                const existingUser = yield prisma.user.findUnique({
                    where: {
                        email: email
                    }
                });
                // return { data: existingUser}
                if (existingUser) {
                    // this.setStatus(409); // Set HTTP status code
                    return { message: "User already exists" };
                }
                // Create new user
                const newUser = yield prisma.user.create({
                    data: {
                        email,
                        password: yield bcryptjs_1.default.hash(password, salt),
                    }
                });
                // this.setStatus(201); // Set HTTP status code
                return { message: "Sucessfully Create User" }; // Return response
            }
            catch (error) {
                // this.setStatus(404); // Set HTTP status code
                return { message: error.message };
            }
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, tsoa_1.Post)('login'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
__decorate([
    (0, tsoa_1.Post)('register'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
exports.AuthController = AuthController = __decorate([
    (0, tsoa_1.Route)('/')
], AuthController);
