export default function PricingSection ({ checkoutURL, price, salePrice, freeShipping, onQuantityClick }) {
  return (<section className="mt-16 md:mt-32">
    <h2 className="text-center mb-8 uppercase">Black Friday Sale</h2>
    <div className="text-8xl leading-none text-center mb-4 -mt-4 tracking-tighter ">
      <span className="block md:inline">
        <del className="text-black-friday"><span className="text-black"> {price}</span></del>
        <span className="text-black-friday">&nbsp;{salePrice}</span>
          </span>
    </div>
    <div className="text-center mb-32 ">
      <a href={checkoutURL}>
        <button className="text-2xl px-10 py-3">
          Buy now
        </button>
      </a>
      <div className="mt-2">or <span className="underline cursor-pointer" onClick={() => onQuantityClick(true)}>order multiple</span>
      </div>
      {freeShipping ? <div className="mt-4">Free shipping • 30 day no risk return</div> : null}
    </div>
  </section>)
}
