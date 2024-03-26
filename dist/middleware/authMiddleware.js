"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];
//     if (!token) {
//         return res.status(401).json({ message: 'No token provided' });
//     }
//     jwt.verify(token, 'your_secret_key', (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ message: 'Failed to authenticate token' });
//         }
//         // req.user = decoded; // Attach decoded token to request object
//         next();
//     });
// };
const verifyToken = ({ headers }) => {
    const authHeader = headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return { status: 401, message: 'No token provided' };
    }
    jsonwebtoken_1.default.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return { status: 403, message: 'Failed to authenticate token' };
        }
        // req.user = decoded; // Attach decoded token to request object
        return { status: 200, message: 'Success' };
    });
};
exports.verifyToken = verifyToken;
