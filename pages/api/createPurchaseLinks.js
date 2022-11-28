import _ from 'lodash'

const {SWELL_SECRET_KEY, SWELL_STORE_ID} = process.env

const swell = require('swell-node').init(SWELL_STORE_ID, SWELL_SECRET_KEY)


export default async function handler(req, res) {

  const createUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
  }

  const createPurchaseLinks = (quantity, currency) => {
    return {
      name: `G-Grip ${quantity} ${currency} Quantity`,
      active: true,
      items: [{
        product_id: '632b02a037b96a0013331679',
        quantity,
        discounts: [{
          id : createUniqueId(),
          amount: 20 * quantity,
        }]
      }],
      currency,
    }
  }

// purchase links for GBP,EUR,USD from one to 10
  const _1to30 = _.range(1, 31).map((_, index) => {
    if (index < 10) {
      return createPurchaseLinks(index % 10 + 1, 'GBP')
    }
    if (index < 20) {
      return createPurchaseLinks(index % 10 + 1, 'EUR')
    }
    return createPurchaseLinks(index % 10 + 1, 'USD')
  })


  const requests = await Promise.all(_1to30.map(async (purchaseLink) => {
    await swell.post('/purchaselinks', purchaseLink)
  }))

  res.send({_1to30, requests})


}
