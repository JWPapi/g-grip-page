// load environment variables from .env file
require('dotenv').config()

const {SWELL_STORE_ID, SWELL_SECRET_KEY} = process.env

const swell = require('swell-node').init(SWELL_STORE_ID, SWELL_SECRET_KEY)


const createCoupon = async (currency) => {
  const coupon = await swell.post('/coupons', {
    codes: [
      {
        code: 'SKILLS' + currency,
      }
    ],
    discounts: [
      {
        type: 'total',
        value_type: 'fixed',
        value_fixed: '20',
      }
    ],
    name: 'Loyalty Discount for Skills Customers',
    active: true,
    currency,
  });
  console.log(coupon)
}

['GBP', 'EUR', 'USD'].forEach(createCoupon)

