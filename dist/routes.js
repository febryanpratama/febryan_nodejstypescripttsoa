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
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const ChecklistController_1 = require("./modules/Cheklist/controller/ChecklistController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const AuthController_1 = require("./modules/Authentication/controllers/AuthController");
const context_1 = require("./middleware/context");
const expressAuthenticationRecasted = context_1.expressAuthentication;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "requestBody": {
        "dataType": "refObject",
        "properties": {
            "title": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "requestBodyItem": {
        "dataType": "refObject",
        "properties": {
            "title": { "dataType": "string", "required": true },
            "description": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterRequestBody": {
        "dataType": "refObject",
        "properties": {
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras" });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/checklist', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.getItem)), function ChecklistController_getItem(request, response, next) {
        const args = {};
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'getItem',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/checklist', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.setItem)), function ChecklistController_setItem(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "requestBody" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'setItem',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/checklist/:checklistId', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.getDetail)), function ChecklistController_getDetail(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'getDetail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/checklist/:checklistId/item', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.getItemDetail)), function ChecklistController_getItemDetail(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'getItemDetail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/checklist/:checklistId/item', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.setItemDetail)), function ChecklistController_setItemDetail(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "requestBodyItem" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'setItemDetail',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/checklist/:checklistId/item/:itemId', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.getItemDetailById)), function ChecklistController_getItemDetailById(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
            itemId: { "in": "query", "name": "itemId", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'getItemDetailById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/checklist/:checklistId/item/:itemId', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.updateItemDetailById)), function ChecklistController_updateItemDetailById(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
            itemId: { "in": "query", "name": "itemId", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "requestBodyItem" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'updateItemDetailById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/checklist/:checklistId/item/:itemId', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.deleteItemDetailById)), function ChecklistController_deleteItemDetailById(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
            itemId: { "in": "query", "name": "itemId", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'deleteItemDetailById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/checklist/:checklistId/item/rename/:itemId', authenticateMiddleware([{ "bearerAuth": [] }]), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController)), ...((0, runtime_1.fetchMiddlewares)(ChecklistController_1.ChecklistController.prototype.renameItemDetailById)), function ChecklistController_renameItemDetailById(request, response, next) {
        const args = {
            checklistId: { "in": "query", "name": "checklistId", "required": true, "dataType": "double" },
            itemId: { "in": "query", "name": "itemId", "required": true, "dataType": "double" },
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "requestBodyItem" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new ChecklistController_1.ChecklistController();
            templateService.apiHandler({
                methodName: 'renameItemDetailById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/login', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.signin)), function AuthController_signin(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "RegisterRequestBody" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new AuthController_1.AuthController();
            templateService.apiHandler({
                methodName: 'signin',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/register', ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController)), ...((0, runtime_1.fetchMiddlewares)(AuthController_1.AuthController.prototype.signup)), function AuthController_signup(request, response, next) {
        const args = {
            requestBody: { "in": "body", "name": "requestBody", "required": true, "ref": "RegisterRequestBody" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = templateService.getValidatedArgs({ args, request, response });
            const controller = new AuthController_1.AuthController();
            templateService.apiHandler({
                methodName: 'signup',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
            });
        }
        catch (err) {
            return next(err);
        }
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function authenticateMiddleware(security = []) {
        return function runAuthenticationMiddleware(request, response, next) {
            return __awaiter(this, void 0, void 0, function* () {
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                // keep track of failed auth attempts so we can hand back the most
                // recent one.  This behavior was previously existing so preserving it
                // here
                const failedAttempts = [];
                const pushAndRethrow = (error) => {
                    failedAttempts.push(error);
                    throw error;
                };
                const secMethodOrPromises = [];
                for (const secMethod of security) {
                    if (Object.keys(secMethod).length > 1) {
                        const secMethodAndPromises = [];
                        for (const name in secMethod) {
                            secMethodAndPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow));
                        }
                        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                        secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                            .then(users => { return users[0]; }));
                    }
                    else {
                        for (const name in secMethod) {
                            secMethodOrPromises.push(expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow));
                        }
                    }
                }
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
                try {
                    request['user'] = yield Promise.any(secMethodOrPromises);
                    // Response was sent in middleware, abort
                    if (response.writableEnded) {
                        return;
                    }
                    next();
                }
                catch (err) {
                    // Show most recent error as response
                    const error = failedAttempts.pop();
                    error.status = error.status || 401;
                    // Response was sent in middleware, abort
                    if (response.writableEnded) {
                        return;
                    }
                    next(error);
                }
                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            });
        };
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
