"use strict";
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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class UserRepository {
    findUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if user already exists
            const existingUser = yield prisma.user.findUnique({
                where: { email }
            });
            if (existingUser) {
                return true;
            }
            return false;
        });
    }
    createUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield prisma.user.create({
                data: {
                    email,
                    password
                }
            });
            return newUser;
        });
    }
}
exports.default = UserRepository;
