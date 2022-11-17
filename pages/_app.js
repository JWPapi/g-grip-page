import '../styles/index.css'
import NavBar from "../components/NavBar";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function App ({Component, pageProps}) {
  const router = useRouter()
  const [price, setPrice] = useState('£49')
  const [checkoutURL, setCheckoutURL] = useState('https://g-grip.swell.store/buy/VAnIaAiK')
  const [freeShipping, setFreeShipping] = useState(true)

  useEffect(() => {
    fetch('/api/getCountry').then(res => res.json()).then(async ({data: {country,continent}}) => {
      if (country === 'Austria') setFreeShipping(false)
      if (country === 'United Kingdom') return
      if (continent === 'Europe') {
        setCheckoutURL('https://g-grip.swell.store/buy/uZx7NaLM')
        return setPrice('€59')
      }
      setCheckoutURL('https://g-grip.swell.store/buy/asmGsHr3')
      setPrice('$59')
      if(continent !== 'North America') setFreeShipping(false)
    })

    import('react-facebook-pixel').then(({default: ReactPixel}) => {
      ReactPixel.init('111649226022273')
      ReactPixel.pageView()

      router.events.on('routeChangeComplete', () => {
        ReactPixel.pageView()
      })

    })
  }, [router.events])

  return (
    <>
      <link rel="prefetch" href={checkoutURL} />
      <link rel='prerender' href={checkoutURL} />
      <NavBar checkoutURL={checkoutURL} />
      <Component checkoutURL={checkoutURL} price={price} {...pageProps} freeShipping={freeShipping} />
    </>
  )
}

export default App
