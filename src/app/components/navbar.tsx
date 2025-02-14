import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link href="/"><Image src="/Logo/ChatGPT_Logo_Versuch.png" alt="Logo" width={70} height={100} />
          </Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/registry">Registry</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;