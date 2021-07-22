import Image from "next/image";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-center py-2 md:py-4 md:justify-between items-center">
      <Image src="/img/logo.svg" alt="Logo" width={150} height={33} />
      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
        <a className="tracking-wide hover:text-gray-300" >Next.js</a>
        </Link>
        <Link href="/tailwind">
        <a className="tracking-wide hover:text-gray-300" >Tailwind</a>
        </Link>
        <Link href="/framer-motion">
        <a className="tracking-wide hover:text-gray-300" >Framer Motion</a>
        </Link>
      </nav>
      </header>
  )
}
