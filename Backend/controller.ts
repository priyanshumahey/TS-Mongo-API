import { Request, Response } from 'express';

async function getAllData(req: Request, res: Response) {
    try {
        console.log('All data is being sent!')
    } catch (err:any) {
        console.log('Error!')
    }
}

async function Info(req: Request, res: Response) {
    try {
        console.log('This is an API connected to MongoDB!')
    } catch (err:any) {
        console.log('Error!')
    }
}

export default {
    getAllData,
    Info
}