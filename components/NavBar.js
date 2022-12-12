import Image from "next/image"
import Link from "next/link"

//ToDo: logo should be bigger?
export default function NavBar({checkoutURL}) {
  return (<div className="fixed w-full h-20 bg-white z-20 shadow ">
    <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between">
      <div className="flex flex-col justify-around">
        <Link href="/#top">
          <Image src="/img/logo_small.svg" alt="Logo" width={81} height={30} className="cursor-pointer"/>
        </Link>
      </div>
      <a href={checkoutURL}>
        <button className="px-4 py-2 mx-2 md:hidden">
          Buy now
        </button>
      </a>
      <div className="hidden md:block">
        <Link href="/#overview" className="mx-8"><a className=" hover:text-gray-900 mx-2">Overview</a></Link>
        <Link href="/#about"><a className="hover:text-gray-900 mx-2">About</a></Link>
        <Link href="/#techspecs"><a className="hover:text-gray-900 mx-2 text-body font-body">Tech Specs</a></Link>
        <a href={checkoutURL}>
          <button className="ml-6 px-8 py-2">Buy now</button>
        </a>
      </div>
    </div>
  </div>)
}
