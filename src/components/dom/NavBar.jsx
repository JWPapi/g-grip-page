import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-2  flex justify-between">
      <div className="flex flex-col justify-around">
      <Image src="/img/logo.jpg" alt="Logo" width={54} height={20} />
      </div>
      <div>
        <Link href="#overview" className="mx-8">
          <a className=" hover:text-gray-900 mx-2">Overview</a>
        </Link>
        <Link href="#about">
          <a className=" hover:text-gray-900 mx-2">About</a>
        </Link>
        <Link href="#techspecs">
          <a className=" hover:text-gray-900 mx-2 text-body font-body">Tech Specs</a>
        </Link>
        <a href="https://g-grip.swell.store/buy/QyQf8uwP">
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 mx-2">
            Buy
          </button>
        </a>
      </div>
    </div>
  )
}
