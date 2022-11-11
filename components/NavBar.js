import Image from "next/image";
import Link from "next/link";

//ToDo: logo should be bigger?
export default function NavBar () {
  return (
    <div className="fixed w-full h-20 bg-white z-20 shadow ">
      <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between">
        <div className="flex flex-col justify-around">
          <Image src="/img/logo_small.svg" alt="Logo" width={81} height={30}/>
        </div>
        <a href="https://g-grip.swell.store/buy/QyQf8uwP">
          <button className="px-4 py-2 mx-2">
            Pre-Order Now
          </button>
        </a>
        <div className="hidden md:block">
          <Link href="/#overview" className="mx-8">
            <a className=" hover:text-gray-900 mx-2">Overview</a>
          </Link>
          <Link href="/#about">
            <a className=" hover:text-gray-900 mx-2">About</a>
          </Link>
          <Link href="/#techspecs">
            <a className=" hover:text-gray-900 mx-2 text-body font-body">Tech Specs</a>
          </Link>
          <a href="https://g-grip.swell.store/buy/QyQf8uwP">
            <button className="px-4 py-2 mx-2">
              Buy
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
