import {NextFunction, Request, Response} from 'express';
import { StripeApi } from '../resources/stripe';
export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send('Hello World');
    }

    static postCoupons(req:Request,res:Response,next:NextFunction) {
        console.log("req body : ",req.body)
        const coupon = StripeApi.postCoupon(req.body);
        res.send(coupon);
    }

    static async getCoupons(req:Request,res:Response,next:NextFunction) {
        const response = await StripeApi.getCoupons();
        if(response !== -1) {
            res.send(response);
        } else {
            res.send('Error Occured');
        } 
    }

    static async deleteCoupon(req:Request,res:Response,next:NextFunction) {
        console.log("req params : ",req.params)
        const { id } = req.params;
        const response = await StripeApi.deleteCoupon(id);
        if(response !== -1) {
            res.send(response);
        } else {
            res.send('Error Occured');
        } 
    }
}


