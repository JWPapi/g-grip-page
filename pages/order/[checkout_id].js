import Image from 'next/image'
import _ from 'lodash'
import SkillsPromo from '../../components/SkillsPromo'
import SkillsBanner from '../../components/SkillsBanner'
import Footer from '../../components/Footer'

export default function ThankYouPage({ order }) {
  return (
    <>
      <pre>
        {JSON.stringify(order, null, 2)}
      </pre>
      <SkillsBanner />
      <SkillsPromo/>

      <main className="relative lg:min-h-full -mt-4">
        <div>
          <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl  lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <div>
              <h1 className="text-sm font-medium text-primary">
                Payment successful
              </h1>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Thanks for ordering
              </p>
              <p className="mt-2 text-base text-gray-500">
                We appreciate your order, we’re currently processing it. So hang
                tight and we’ll send you confirmation very soon!
              </p>
              <ul
                role="list"
                className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
              >
                {order.items.map((item) => (
                  <li key={item.id} className="flex space-x-6 py-6">
                    <Image
                      src={item.product.images[0].file.url}
                      width={100}
                      height={100}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">
                        <span>{item.product.name}</span>
                      </h3>
                      <p>{item.product.description}</p>
                      <p>× {item.quantity}</p>
                    </div>
                    <p className="flex-none font-medium text-gray-900">
                      {item.price} {order.currency}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">
                    {order.sub_total} {order.currency}
                  </dd>
                </div>

                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="text-gray-900">
                    {order.shipping.price} {order.shipping.currency}
                  </dd>
                </div>

                {order.discount_total > 0 && (
                <div className="flex justify-between text-primary">
                  <dt>Discount</dt>
                  <dd >
                    -{order.discount_total} {order.currency}
                  </dd>
                </div>)}

                <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">
                    {order.grand_total} {order.currency}
                  </dd>
                </div>
              </dl>

              <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping Address
                  </dt>
                  <dd className="mt-2">
                    <address className="not-italic">
                      <span className="block">{order.shipping.name}</span>{" "}
                      <span className="block">{order.shipping.address1}</span>{" "}
                      <span className="block">
                        {order.shipping.city}, {order.shipping.zip}{" "}
                        {order.shipping.country}
                      </span>
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">
                    Payment Method:
                  </dt>
                  <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">

                    <div className="flex-auto">
                      <p className="text-gray-900">{_.capitalize(order.billing.method)}</p>
                    </div>
                  </dd>
                </div>
              </dl>

              <div className="mt-16 border-t border-gray-200 py-6 text-right">
                <a href="/#" className="text-sm font-medium text-primary ">
                  {" "}
                  Continue Shopping <span aria-hidden="true"> &rarr;</span>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

ThankYouPage.getLayout = (page) => page

//ToDo: Could be client side
export async function getServerSideProps(context) {
  const swell = require("swell-js")
  swell.init("g-grip", "pk_4yeESF2sYLvnuIY42XlQ6vPZJTSv6Mro")
  const { checkout_id } = context.query
  const data = await swell.cart.getOrder(checkout_id)

  return {
    props: {
      order: data,
    },
  }
}
