const { default: Link } = require("next/link");

export default function Navbar() {
    return(
        <nav className="text-white hover:text-blue-800 flex items-center justify-between flex-wrap bg-teal-500 p-6 text-lg font-bold">
            <Link href="/">
              Home
            </Link>
            <ul className="flex gap-x-2 text-lg font-bold">
                <li>
                    <Link className="text-gray-500 hover:text-gray-300" href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}