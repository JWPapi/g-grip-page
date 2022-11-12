import '../styles/index.css'
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";

function App ({Component, pageProps}) {

  const [price, setPrice] = useState('£49')
  const [checkoutURL, setCheckoutURL] = useState('https://g-grip.swell.store/buy/VAnIaAiK')

  useEffect(() => {
    fetch('/api/getCountry').then(res => res.json()).then(async data => {
      if (data.data.country === 'United Kingdom') return
      if (data.data.continent === 'Europe') {
        setCheckoutURL('https://g-grip.swell.store/buy/uZx7NaLM')
        return setPrice('€59')
      }
      setCheckoutURL('https://g-grip.swell.store/buy/asmGsHr3')
      setPrice('$59')
    })
  }, [])

  return (
    <>
      <NavBar checkoutURL={checkoutURL} />
      <Component checkoutURL={checkoutURL} price={price} {...pageProps} />
    </>
  )
}

export default App
