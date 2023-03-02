import {Head, Html, Main, NextScript} from 'next/document'
import Script from "next/script";

export default function Document() {
  return (<Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/wqj7agl.css"/>
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico"/>
        <meta name="facebook-domain-verification" content="aclgkmi1nufubsjmwo81e6s0b5mjl7"/>
      </Head>

      <body>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KB56K3B');
        `}
      </Script>
      <Script
        src={`https://www.googleoptimize.com/optimize.js?id=OPT-N5XF7F3`}
      />
      <Main/>
      <NextScript/>
      </body>
    </Html>)
}


