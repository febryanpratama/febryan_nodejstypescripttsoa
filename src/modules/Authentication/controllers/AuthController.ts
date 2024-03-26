import { Controller, Post, Route, Body } from "tsoa";
import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express'; // Import Request and Response from express
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface RegisterRequestBody {
    email: string;
    password: string;
}

@Route('/')
export class AuthController extends Controller {
    @Post('login')  
    public async signin(@Body() requestBody: RegisterRequestBody): Promise<any> {
        try {
            const { email, password } = requestBody; // Access request body directly    

            // return { data: email, password}
            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
                where: { 
                    email: email
                 }
            });

            if(!existingUser){
                this.setStatus(404); // Set HTTP status code
                return { message: "User does not exist" }; 
            }

            let isPasswordValid = await bcrypt.compare(password, existingUser.password);
            if(!isPasswordValid){
                this.setStatus(404); // Set HTTP status code
                return { message: "Invalid Password" }; 
            }

            const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, process.env.SECRET_KEY ?? 'Secretkey');

            return { status: true, message: "Success Login", data: token }; // Return response

        }catch(error :any){
            this.setStatus(404); // Set HTTP status code
            return { message: "User does not exist" }; 
        }
    }

    @Post('register')
    public async signup(@Body() requestBody: RegisterRequestBody): Promise<any> { // Use Request and Response from express
        try {

            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);

            const { email, password } = requestBody; // Access request body directly

            // Check if user already exists
            const existingUser = await prisma.user.findUnique({
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

            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: await bcrypt.hash(password, salt),
                }
            });



            // this.setStatus(201); // Set HTTP status code
            return { message: "Sucessfully Create User" }; // Return response
        } catch (error:any) {
            // this.setStatus(404); // Set HTTP status code
            return { message: error.message }; 
        }
    }
}
