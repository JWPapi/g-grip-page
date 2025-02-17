import '../styles/index.css'
import 'react-slideshow-image/dist/styles.css'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Analytics } from '@vercel/analytics/react'


function App({ Component, pageProps }) {
  const [price, setPrice] = useState('£59')
  const [salePrice, setSalePrice] = useState('£39')
  const [checkoutURL, setCheckoutURL] = useState('https://g-grip.swell.store/buy/VAnIaAiK')
  const [currency, setCurrency] = useState('GBP')
  const [freeShipping, setFreeShipping] = useState(false)

  useEffect(() => {
    //ToDo: Should be just one of 3 states
    fetch('/api/getCountry')
      .then((res) => res.json())
      .then(async ({ data: { country, continent } }) => {
        if (country === 'Austria') setFreeShipping(false)
        if (country === 'United Kingdom') return
        if (continent === 'Europe') {
          setCheckoutURL('https://g-grip.swell.store/buy/uZx7NaLM')
          setSalePrice('€49')
          setCurrency('EUR')
          return setPrice('€69')
        }
        setCheckoutURL('https://g-grip.swell.store/buy/asmGsHr3')
        setSalePrice('$49')
        setPrice('$69')
        setCurrency('USD')
        if (continent !== 'North America') setFreeShipping(false)
      })
  }, [])

  const getLayout = Component.getLayout || ((page) => <Layout checkoutURL={checkoutURL}>{page}</Layout>)

  return getLayout(
    <>
      <Component
        checkoutURL={checkoutURL}
        price={price}
        {...pageProps}
        freeShipping={freeShipping}
        salePrice={salePrice}
        currency={currency}
      />
      <Analytics />
    </>
  )
}

export default App
