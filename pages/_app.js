import '../styles/index.css'
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";

function App ({Component, pageProps}) {
  const [price, setPrice] = useState('£69')
  const [salePrice, setSalePrice] = useState('£49')
  const [checkoutURL, setCheckoutURL] = useState('https://g-grip.swell.store/buy/VAnIaAiK')
  const [currency, setCurrency] = useState('GBP')
  const [freeShipping, setFreeShipping] = useState(true)

  useEffect(() => {
    fetch('/api/getCountry').then(res => res.json()).then(async ({data: {country,continent}}) => {
      if (country === 'Austria') setFreeShipping(false)
      if (country === 'United Kingdom') return
      if (continent === 'Europe') {
        setCheckoutURL('https://g-grip.swell.store/buy/uZx7NaLM')
        setSalePrice('€59')
        setCurrency('EUR')
        return setPrice('€79')
      }
      setCheckoutURL('https://g-grip.swell.store/buy/asmGsHr3')
      setSalePrice('$59')
      setPrice('$79')
      setCurrency('USD')
      if(continent !== 'North America') setFreeShipping(false)
    })

  }, [])

  return (
    <>
      <link rel="prefetch" href={checkoutURL} />
      <link rel='prerender' href={checkoutURL} />
      <NavBar checkoutURL={checkoutURL} />
      <Component checkoutURL={checkoutURL} price={price} {...pageProps} freeShipping={freeShipping} salePrice={salePrice} currency={currency}/>
    </>
  )
}

export default App
