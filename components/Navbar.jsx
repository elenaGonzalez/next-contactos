const { default: Link } = require("next/link");

export default function Navbar() {
    return(
        <nav className="text-white hover:text-blue-800 flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <Link href="/">
              Home
            </Link>
        </nav>
    )
}