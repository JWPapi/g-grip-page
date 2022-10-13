import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 h-full pt-4 text-neutral-400 px-4 md:px-0">
      <div className="max-w-5xl mx-auto grid grid-cols-2">
        <ul className="list-none ml-0">
          <li><Link href="/pages/privacy"><a>Privacy Statement</a></Link></li>
          <li><Link href="/pages/terms"><a>Terms & Conditions</a></Link></li>
          <li><Link href="/pages/shipping"><a>Shipping & Return Policy</a></Link></li>
        </ul>
        <p className="mt-4">2022 © G-Grip<br/> All rights reserved</p>
      </div>
    </footer>
  )
}
