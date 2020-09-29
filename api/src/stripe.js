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




    async function postCoupon() {
        const coupon = await stripe.coupons.create({
            percent_off: 25,
            duration: 'repeating',
            duration_in_months: 3,
          });
          console.log("coupon : ",coupon);
    }


    postCoupon()

