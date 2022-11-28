import { useState } from 'react'

export default function QuantityModal ({ show, currency, onBackgroundClick }) {
  const defaultLink = purchaseLinks.find((link) => link.currency === currency && link.quantity === 3)
  const [purchaseLink, setPurchaseLink] = useState(defaultLink)

  //Handlers
  const onInputChange = (e) => {
    const quantity = parseInt(e.target.value) <= 10 ? parseInt(e.target.value) : 10
    const link = purchaseLinks.find((link) => link.currency === currency && link.quantity === quantity)
    setPurchaseLink(link)
  }

  const onBgClick = (e) => {
    console.log(e)
    if (e.target.id === 'modal') onBackgroundClick(false)
  }


  if (!show) return null

  return (<div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        onClick={onBgClick} id="modal"
        className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="">

              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900 text-center" id="modal-title">Quantity</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Order more than one G-Grip</p>
                </div>
                <input type="number" onChange={onInputChange} min="1" max="10" step="1" defaultValue="3"
                       className="mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <a href={purchaseLink.url} className="w-full">
              <button type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm">
                Pre-order multiple
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

const purchaseLinks = [{
  'name': 'G-Grip 10 USD Quantity', 'quantity': 10, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/kpZgTomI'
}, {
  'name': 'G-Grip 9 USD Quantity', 'quantity': 9, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/PVlxCtQj'
}, {
  'name': 'G-Grip 8 USD Quantity', 'quantity': 8, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/EV6uJnUi'
}, {
  'name': 'G-Grip 7 USD Quantity', 'quantity': 7, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/4WCjAC66'
}, {
  'name': 'G-Grip 6 USD Quantity', 'quantity': 6, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/x9fNtN3z'
}, {
  'name': 'G-Grip 5 USD Quantity', 'quantity': 5, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/XugxS3Fl'
}, {
  'name': 'G-Grip 4 USD Quantity', 'quantity': 4, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/OWS11XMg'
}, {
  'name': 'G-Grip 3 USD Quantity', 'quantity': 3, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/pQV4RKHG'
}, {
  'name': 'G-Grip 2 USD Quantity', 'quantity': 2, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/ZkFvKYZB'
}, {
  'name': 'G-Grip 1 USD Quantity', 'quantity': 1, 'currency': 'USD', 'url': 'https://g-grip.swell.store/buy/BlZEHdya'
}, {
  'name': 'G-Grip 10 EUR Quantity', 'quantity': 10, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/EZBSU78U'
}, {
  'name': 'G-Grip 9 EUR Quantity', 'quantity': 9, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/uAWsCUsh'
}, {
  'name': 'G-Grip 8 EUR Quantity', 'quantity': 8, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/3QJlX1XE'
}, {
  'name': 'G-Grip 7 EUR Quantity', 'quantity': 7, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/vKWTn24t'
}, {
  'name': 'G-Grip 6 EUR Quantity', 'quantity': 6, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/gIa2NPPQ'
}, {
  'name': 'G-Grip 5 EUR Quantity', 'quantity': 5, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/hFD4Kt6W'
}, {
  'name': 'G-Grip 4 EUR Quantity', 'quantity': 4, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/L55xe0oR'
}, {
  'name': 'G-Grip 3 EUR Quantity', 'quantity': 3, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/Nuom9kg2'
}, {
  'name': 'G-Grip 2 EUR Quantity', 'quantity': 2, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/zcZfkq7w'
}, {
  'name': 'G-Grip 1 EUR Quantity', 'quantity': 1, 'currency': 'EUR', 'url': 'https://g-grip.swell.store/buy/BURXlQWV'
}, {
  'name': 'G-Grip 10 GBP Quantity', 'quantity': 10, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/qWauebZm'
}, {
  'name': 'G-Grip 9 GBP Quantity', 'quantity': 9, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/sEVvSqYF'
}, {
  'name': 'G-Grip 8 GBP Quantity', 'quantity': 8, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/VEraAN8i'
}, {
  'name': 'G-Grip 7 GBP Quantity', 'quantity': 7, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/qwWNkoHK'
}, {
  'name': 'G-Grip 6 GBP Quantity', 'quantity': 6, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/nXYr9nAS'
}, {
  'name': 'G-Grip 5 GBP Quantity', 'quantity': 5, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/i1ikT0K5'
}, {
  'name': 'G-Grip 4 GBP Quantity', 'quantity': 4, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/FPIJ1CaN'
}, {
  'name': 'G-Grip 3 GBP Quantity', 'quantity': 3, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/0DzcsGmx'
}, {
  'name': 'G-Grip 2 GBP Quantity', 'quantity': 2, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/EyxK5PlD'
}, {
  'name': 'G-Grip 1 GBP Quantity', 'quantity': 1, 'currency': 'GBP', 'url': 'https://g-grip.swell.store/buy/RtMbnETr'
}]
