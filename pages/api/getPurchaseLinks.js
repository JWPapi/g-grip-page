const {SWELL_SECRET_KEY, SWELL_STORE_ID} = process.env

const swell = require('swell-node').init(SWELL_STORE_ID, SWELL_SECRET_KEY)


export default async function handler(req, res) {

  const purchaseLinks = await swell.get('/purchaselinks', {
    fields: 'id,name,items,discounts,currency',
    limit: 100
  }).then(({results}) => results.map((fields) => {
      return {
        name: fields.name,
        quantity: fields.items[0].quantity,
        currency: fields.currency,
        url: `https://g-grip.swell.store/buy/${fields.id}`,
      }
    }
  ).filter(({name}) => name.includes('Quantity')))


  res.json(purchaseLinks)

}
