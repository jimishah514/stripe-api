// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//     api_key: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
//   });

const Stripe = require('stripe');
const stripe = Stripe('sk_test_51HWhXCBJS2K9rpVUnPH71X3TWUuJpSdR226Kva9dSXFXVBUL87eqMV5CfpU706vEvBgzabCIiWbwdoNprt0pp6cP00aZeXIy8J');
// stripe.charges.retrieve('ch_1HWfs82eZvKYlo2C6DSNfink', {
//   expand: ['customer', 'invoice.subscription'],
// });

export class StripeApi {
    static async postCoupon(obj: any) {
        try {
            console.log("obj : ",obj);
            const coupon = await stripe.coupons.create({  percent_off: obj.percent_off,
                duration: obj.duration,
                duration_in_months: obj.duration_in_months, 
                }
            );
            console.log("coupon : ",coupon);
        } catch(e) {
            throw Error(e.message);
        }
    }

    static async getCoupons() {
        try {
            // const coupon = await stripe.coupons.list({
            //     limit: 5,
            //   });
            const coupon = await stripe.coupons.list();
            //console.log("coupon : ",coupon);
            return coupon;
        } catch {
            throw Error("Error Occured while getting coupons");
            return -1;
        }
       
    }
}




