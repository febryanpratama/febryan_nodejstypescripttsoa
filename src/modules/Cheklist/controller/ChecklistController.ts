import { Controller, Post, Route, Body, Get, Middlewares, Query, Security, Put, Delete } from "tsoa";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface requestBody {
    title: string;
}

interface requestBodyItem {
    title: string;
    description: string;

}

@Route('/checklist')
export class ChecklistController extends Controller {


    @Get('/')
    @Security("bearerAuth")
    public async getItem(): Promise<any> { // Use Request and Response from express
        try {

            let data = await prisma.checklist.findMany();

            return {
                status: true,
                message: "Success",
                data: data
            }

            // this.setStatus(201); // Set HTTP status code
        } catch (error:any) {
            // this.setStatus(404); // Set HTTP status code
            return { message: error.message }; 
        }
    }

    @Post('/')
    @Security("bearerAuth")
    public async setItem(@Body() requestBody: requestBody): Promise<any> { // Use Request and Response from express
        try {
            const {title} = requestBody;

            let data = await prisma.checklist.create({
                data: {
                    title
                }
            });

            return {
                status: true,
                message: "Success",
                data: null
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Get('{checklistId}')
    @Security("bearerAuth")

    public async getDetail(@Query() checklistId: number): Promise<any>{
        try {
            let data = await prisma.checklist.findUnique({
                where: {
                    id: checklistId
                }
            });

            return {
                status: true,
                message: "Success",
                data: data
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Get('{checklistId}/item')
    @Security("bearerAuth")
    public async getItemDetail(@Query() checklistId: number): Promise<any>{
        try {
            let data = await prisma.item.findMany({
                where: {
                    checklistId: checklistId
                }
            });

            return {
                status: true,
                message: "Success",
                data: data
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Post('{checklistId}/item')
    @Security("bearerAuth")
    public async setItemDetail(@Query() checklistId: number, @Body() requestBody: requestBodyItem): Promise<any>{
        try {
            const {title, description} = requestBody;

            let createItem = await prisma.item.create({
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
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Get('{checklistId}/item/{itemId}')
    @Security("bearerAuth")
    public async getItemDetailById(@Query() checklistId: number, @Query() itemId: number): Promise<any>{
        try {
            let data = await prisma.item.findUnique({
                where: {
                    checklistId: checklistId,
                    id: itemId
                }
            });

            return {
                status: true,
                message: "Success",
                data: data
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Put('{checklistId}/item/{itemId}')
    @Security("bearerAuth")
    public async updateItemDetailById(@Query() checklistId: number, @Query() itemId: number, @Body() requestBody: requestBodyItem): Promise<any>{
        try {
            const {description} = requestBody;

            let data = await prisma.item.update({
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
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Delete('{checklistId}/item/{itemId}')
    @Security("bearerAuth")
    public async deleteItemDetailById(@Query() checklistId: number, @Query() itemId: number): Promise<any>{
        try {
            let data = await prisma.item.delete({
                where: {
                    checklistId: checklistId,
                    id: itemId
                }
            });

            return {
                status: true,
                message: "Success",
                data: null
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }

    @Put('{checklistId}/item/rename/{itemId}')
    @Security("bearerAuth")
    public async renameItemDetailById(@Query() checklistId: number, @Query() itemId: number, @Body() requestBody: requestBodyItem): Promise<any>{
        try {
            const {title,description} = requestBody;

            let data = await prisma.item.update({
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
            }
        } catch (error:any) {
            return {
                status: false,
                message: error.message
            }            
        }
    }
}
