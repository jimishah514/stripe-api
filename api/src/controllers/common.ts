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
        res.send('Coupnons Sent Successfully');
    }
}


