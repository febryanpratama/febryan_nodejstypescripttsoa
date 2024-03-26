import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

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

export const verifyToken = ({headers}: Request) => {
    const authHeader = headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return { status: 401, message: 'No token provided' };
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return { status: 403, message: 'Failed to authenticate token' };
        }

        // req.user = decoded; // Attach decoded token to request object
        return { status: 200, message: 'Success' };
    });
}