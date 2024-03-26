import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

interface UserInterface {
    email: string;
    password: string;

}

class UserRepository {
    public async findUserByEmail(email: string): Promise<any> {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if(existingUser){
            return true
        }

        return false

    }

    public async createUser(email:string, password:string): Promise<UserInterface> {
        
        const newUser = await prisma.user.create({
            data: {
                email,
                password
            }
        });

        return newUser;
    }
}

export default UserRepository;