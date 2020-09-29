import {NextFunction, Request, Response} from 'express';
import { StripeApi } from '../resources/stripe';
export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send('Hello World');
    }

    static postCoupons(req:Request,res:Response,next:NextFunction) {
        StripeApi.postCoupon({
            percent_off: 25,
            duration: 'repeating',
            duration_in_months: 3,
          })
        res.send('Coupon Sent Successfully');
    }

    static async getCoupons(req:Request,res:Response,next:NextFunction) {
        const response = await StripeApi.getCoupons();
        if(response !== -1) {
            res.send('Coupons Get Successfully');
        } else {
            res.send('Error Occured');
        }
        
        
    }
}


