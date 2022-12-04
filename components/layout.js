//layout.js

import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout ({ children, checkoutURL }) {
  return (<>
    <NavBar checkoutURL={checkoutURL}/> {children} <Footer/>
  </>)
}
