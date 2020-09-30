import {Router}from 'express';
import {commonController} from '../controllers/common';
import { requireAuthUser } from '../middlewares/auth';
export const router = Router();
router.get( "/", 
   requireAuthUser(),
   commonController.getHelloWorld
   );

router.post( "/coupons", 
   requireAuthUser(),
   commonController.postCoupons
   );

router.get( "/coupons", 
   requireAuthUser(),
   commonController.getCoupons
   );

router.delete( "/coupons/:id", 
   requireAuthUser(),
   commonController.deleteCoupon
   );