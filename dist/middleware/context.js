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
exports.expressAuthentication = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const userScopeValidation = (token, scopes, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // if (!scopes.includes(ScopeRole.USER)) {
    //   return false;
    // }
    //
    // // If we are asking for admin scopes, then make sure payload has admin scopes
    //
    // if (scopes.includes(ScopeRole.ADMIN) && !payload.scopes.includes(ScopeRole.ADMIN)) {
    //   return false;
    // }
    //   const session: Session|null = await client().session.findUnique({ where: { token } });
    //   if (!session) {
    //     return false;
    //   }
    return true;
});
function expressAuthentication(_a, securityName_1, scopes_1) {
    return __awaiter(this, arguments, void 0, function* ({ headers }, securityName, scopes) {
        var _b;
        if (securityName === 'bearerAuth') {
            if (!headers.authorization) {
                throw new Error('No authorization header');
            }
            const tokenString = (_b = headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
            try {
                (0, jsonwebtoken_1.verify)(tokenString, process.env.SECRET_KEY || 'Secretkey', {
                    algorithms: ['HS256'],
                });
            }
            catch (_c) {
                throw new Error('Invalid token');
            }
            const token = (0, jsonwebtoken_1.decode)(tokenString, {
                complete: true,
            });
            if (!token) {
                throw new Error('Invalid token');
            }
            // const validations = await Promise.all([
            //   userScopeValidation(headers.authorization, scopes, token.payload),
            // ]);
            //
            // if (!validations.includes(true)) {
            //   throw new ApiError(errors.UNAUTHENTICATED);
            // }
            return {
                id: token.payload.id,
                payload: token.payload,
                token: headers.authorization,
            };
        }
        return {};
    });
}
exports.expressAuthentication = expressAuthentication;
