"use strict";
// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
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
// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//     api_key: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
//   });
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HWhXCBJS2K9rpVUnPH71X3TWUuJpSdR226Kva9dSXFXVBUL87eqMV5CfpU706vEvBgzabCIiWbwdoNprt0pp6cP00aZeXIy8J');
// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//   expand: ['customer', 'invoice.subscription'],
// });
class StripeApi {
    static postCoupon(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("obj : ", obj);
                const coupon = yield stripe.coupons.create({ percent_off: obj.percent_off,
                    duration: obj.duration,
                    duration_in_months: obj.duration_in_months,
                });
                console.log("coupon : ", coupon);
            }
            catch (e) {
                throw Error(e.message);
            }
        });
    }
    static getCoupons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const coupon = await stripe.coupons.list({
                //     limit: 5,
                //   });
                const coupon = yield stripe.coupons.list();
                //console.log("coupon : ",coupon);
                return coupon;
            }
            catch (_a) {
                throw Error("Error Occured while getting coupons");
                return -1;
            }
        });
    }
}
exports.StripeApi = StripeApi;
//# sourceMappingURL=stripe.js.map