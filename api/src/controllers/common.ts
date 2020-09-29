import {NextFunction, Request, Response} from 'express';

export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send('New Common Hello World');
    }
}


