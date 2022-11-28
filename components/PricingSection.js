export default function PricingSection({checkoutURL, price, salePrice, freeShipping, onQuantityClick }) {
  return (<section className="mt-16 md:mt-32">
    <h2 className="text-center mb-4 md:mb-8">Pre-order deal (Get it by 1 Dec)</h2>
    <div className="text-8xl leading-none text-center mb-4 -mt-4 tracking-tighter ">
      <del className="line-through decoration-primary block md:inline">{price}</del>
      <span className="text-primary inline-block ml-0 md:ml-6">{salePrice}</span>
    </div>
    <div className="text-center mb-32 ">
      <a href={checkoutURL}>
        <button className="text-2xl px-10 py-3">
          Pre-order now
        </button>
      </a>
      <div className="mt-2">or <span className="underline cursor-pointer" onClick={() => onQuantityClick(true)}>order multiple</span></div>
      {freeShipping ? <div className="mt-4">Free shipping • 30 day no risk return</div> :null}
    </div>
  </section>)
}
