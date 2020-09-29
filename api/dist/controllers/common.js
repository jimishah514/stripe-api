"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stripe_1 = require("../resources/stripe");
class commonController {
    static getHelloWorld(req, res, next) {
        res.send('Hello World');
    }
    static postCoupons(req, res, next) {
        stripe_1.StripeApi.postCoupon({
            percent_off: 25,
            duration: 'repeating',
            duration_in_months: 3,
        });
        res.send('Coupnons Sent Successfully');
    }
}
exports.commonController = commonController;
//# sourceMappingURL=common.js.map