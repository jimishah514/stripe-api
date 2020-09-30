"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = require("../resources/stripe");
class commonController {
    static getHelloWorld(req, res, next) {
        res.send('Hello World');
    }
    static postCoupons(req, res, next) {
        console.log("req body : ", req.body);
        const coupon = stripe_1.StripeApi.postCoupon(req.body);
        res.send(coupon);
    }
    static getCoupons(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield stripe_1.StripeApi.getCoupons();
            if (response !== -1) {
                res.send(response);
            }
            else {
                res.send('Error Occured');
            }
        });
    }
}
exports.commonController = commonController;
//# sourceMappingURL=common.js.map