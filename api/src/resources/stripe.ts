// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//     api_key: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
//   });

const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//   expand: ['customer', 'invoice.subscription'],
// });

export class StripeApi {
    static async postCoupon(obj: any) {
        try {
            const coupon = await stripe.coupons.create(obj);
            console.log("coupon : ",coupon);
        } catch {
            throw Error("Error Occured");
        }
    }

    static async getCoupons() {
        try {
            const coupon = await stripe.coupons.list({
                limit: 3,
              });;
            console.log("coupon : ",coupon);
            return coupon;
        } catch {
            throw Error("Error Occured while getting coupons");
            return -1;
        }
       
    }
}




