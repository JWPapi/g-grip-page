import Footer from "@/../../components/Footer";
import Head from "next/head";

export default function Shipping() {
  return (<>
      <Head>
        <title>G–Grip by Greg Williams – Shipping & Refund Policy</title>
      </Head>
      <div className="pt-16 px-4 md:px-0">
        <article className="mx-auto prose my-16">
          <h1>Shipping & Delivery</h1>
          <p>
            We advise on a delivery period of up to two (2) to three (3) weeks for your print(s) or other products e.g
            cameras or camera equipment. If you would like your print(s) or other purchases e.g. cameras or camera
            equipment sooner, please contact us at studio@gwp.wordpress.test for stock information. International orders
            may take longer especially to the EU due to the impact of Brexit.
          </p>
          <p> All prints, cameras and camera equipment are listed at retail value. Shipping is free on orders over five
            hundred pounds sterling (£500), otherwise we will notify you of domestic UK shipping costs. We may request
            that you cover any re-delivery costs where we have not been able to deliver because of incorrect or
            incomplete information provided to us. Overseas shipping costs and customs duties on imports will be
            additional and will be at your cost.
          </p>
          <p> Last updated: February 2021
          </p>
          <h1>Return Policy</h1>
          <p>
            Our policy is applicable for fourteen (14) days after you have received your order. If fourteen (14) days
            have
            gone by since receipt, unfortunately we can’t offer you refunds or exchanges. This is in addition to your
            statutory rights.
          </p>
          <p> i) Refunds
            If you are unhappy with your purchase you may return it in its original condition for a refund, provided it
            is returned within fourteen (14) days from receipt by you of your order. Shipping costs will not be
            refunded. Please contact studio@gwp.wordpress.test for further instructions.
          </p>
          <p> To be eligible for a refund, your item must be unused, undamaged and in the same condition that you
            received
            it. It must also be in the original packaging.
          </p>
          <p> Once your return is received and inspected, we will send you an email to notify you that we have received
            your returned item. Provided the item is unused, undamaged and in the same condition as you received it, we
            will grant a refund. This will occur via a credit being automatically applied to your credit card or
            original method of payment.
          </p>
          <p> ii) Exchanges
            Exact exchanges will be made on damaged or defective products. If a product arrives damaged, you must keep
            all original packaging material for insurance purposes. Claims must be made within fourteen (14) days of
            receipt of your order via email to support@ggrip.com.
          </p>
          <p> In the event of an exchange or refund, please print off your order confirmation form which includes your
            unique order Number and return it with the damaged or defective item to the following address:
          </p>
          <p> a. For Prints:
            Greg Williams Photography c/o Dark Matter, 8 Brook Lane Business Centre, Brentford, Middlesex TW8 0PP.
          </p>
          <p> b. For Camera Equipment:
            Greg Williams Photography, Lower Ground Floor, 34 North Row, London W1K 6DG United Kingdom.
          </p>
          <p> In addition to insuring your return, we strongly recommend that the order be sent with Delivery
            Confirmation. Should we not receive your return, we will not be able to issue a refund or exchange as
            appropriate. Refunds on returns will be issued on the price of the merchandise and any sales tax, if
            applicable. If the purchase is made in a currency other than GBP £, a refund will be based on the daily rate
            of the date of purchase.
          </p>
          <p> You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are
            non-refundable. We will not charge you for any further shipping costs on exchanges where we send replacement
            goods.
          </p>
          <p> Items that are returned to us as undeliverable or returned after three (3) delivery attempts will be
            treated
            as a return. Shipping will be charged again upon the request of an order reshipment. We will try and contact
            you three (3) times through the email address provided with your order. If two (2) months have passed, and
            we have not received a response from you, your item will be returned-to-stock, and you will be refunded for
            the product cost, but not the shipping costs, associated with this order.
          </p>
          <p> Late or Missing Refunds (if applicable)
            If you haven’t received a refund yet, first double check your account. Then contact your credit card
            company, as it may take some time before your refund is processed.
          </p>
          <p> If you’ve done all of this and you still have not received your refund, please contact us at
            info@gwshop.uk.
            Depending on where you live, the time it may take for your exchanged product to reach you may vary.
          </p>
          <p> Delivery Gone Missing
            If your order seems to be lost in the mail, please notify us by email at info@gwshop.uk no later than three
            (3) weeks for domestic orders, and five (5) weeks for international orders, after having received your
            shipping notification. We will do our best to work with you and the shipping service to locate your package,
            and/or send you a replacement. Unfortunately, we are unable to assist after this time frame has passed.
          </p>
          <p> Warranties
            Leica Camera AG (“LEICA”) offers various product warranties from the date of purchase from an authorised
            LEICA dealership (which includes GWP) for any LEICA product and all accessories included in the original
            packaging. The product warranty is subject to various warranty conditions. For further information please
            see here: https://uk.leica-camera.com/warranty.
          </p>
          <p> Your statutory warranty rights towards the seller of your LEICA products remain unaffected by such product
            warranties.
          </p>
          <p> Last updated: February 2021
          </p>

        </article>
      </div>

    </>
  )

}

export async function getStaticProps() {
  return {
    props: {
      title: 'Shipping & Delivery',
    },
  }
}

